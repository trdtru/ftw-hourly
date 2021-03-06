import React, { Component } from 'react';
import { bool, func, object, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl';
import classNames from 'classnames';
import { calculateQuantityFromHours, timestampToDate } from '../../util/dates';
import { propTypes } from '../../util/types';
import config from '../../config';
import {
  FieldCheckbox,
  Form,
  LocationAutocompleteInputField,
  PrimaryButton
} from '../../components';
import EstimatedBreakdownMaybe from './EstimatedBreakdownMaybe';
import FieldDateAndTimeInput from './FieldDateAndTimeInput';

import css from './BookingTimeForm.css';
import {formatMoney} from "../../util/currency";
import { types as sdkTypes } from '../../util/sdkLoader';
import {
  autocompletePlaceSelected,
  autocompleteSearchRequired,
  composeValidators
} from "../../util/validators";
const { Money } = sdkTypes;

const identity = v => v;

export class BookingTimeFormComponent extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    this.props.onSubmit(e);
  }

  render() {
    const { rootClassName, className, price: unitPrice, addons, ...rest } = this.props;
    const classes = classNames(rootClassName || css.root, className);

    if (!unitPrice) {
      return (
        <div className={classes}>
          <p className={css.error}>
            <FormattedMessage id="BookingTimeForm.listingPriceMissing" />
          </p>
        </div>
      );
    }
    if (unitPrice.currency !== config.currency) {
      return (
        <div className={classes}>
          <p className={css.error}>
            <FormattedMessage id="BookingTimeForm.listingCurrencyInvalid" />
          </p>
        </div>
      );
    }

    return (
      <FinalForm
        {...rest}
        unitPrice={unitPrice}
        onSubmit={this.handleFormSubmit}
        render={fieldRenderProps => {
          const {
            endDatePlaceholder,
            startDatePlaceholder,
            form,
            pristine,
            handleSubmit,
            intl,
            isOwnListing,
            listingId,
            submitButtonWrapperClassName,
            unitPrice,
            unitType,
            values,
            monthlyTimeSlots,
            onFetchTimeSlots,
            timeZone,
          } = fieldRenderProps;

          const startTime = values && values.bookingStartTime ? values.bookingStartTime : null;
          const endTime = values && values.bookingEndTime ? values.bookingEndTime : null;

          const bookingStartLabel = intl.formatMessage({
            id: 'BookingTimeForm.bookingStartTitle',
          });
          const bookingEndLabel = intl.formatMessage({ id: 'BookingTimeForm.bookingEndTitle' });

          const startDate = startTime ? timestampToDate(startTime) : null;
          const endDate = endTime ? timestampToDate(endTime) : null;

          const selectedAddons = [];
          if (addons && Array.isArray(addons) && values && values.addons && Array.isArray(values.addons)) {
            values.addons.forEach(selectedAddonTitle => {
              addons.forEach(addonData => {
                if (addonData.addOnTitle === selectedAddonTitle) {
                  selectedAddons.push(addonData);
                }
              })
            })
          }

          const isEnabledBookingButton = selectedAddons && Array.isArray(selectedAddons) && selectedAddons.length > 0;

          // This is the place to collect breakdown estimation data. See the
          // EstimatedBreakdownMaybe component to change the calculations
          // for customized payment processes.
          const bookingData =
            startDate && endDate
              ? {
                  unitType,
                  unitPrice,
                  startDate,
                  endDate,

                  // Calculate the quantity as hours between the booking start and booking end
                  quantity: calculateQuantityFromHours(startDate, endDate),
                  timeZone,
                  addons: selectedAddons
                }
              : null;
          const bookingInfo = bookingData ? (
            <div className={css.priceBreakdownContainer}>
              <h3 className={css.priceBreakdownTitle}>
                <FormattedMessage id="BookingTimeForm.priceBreakdownTitle" />
              </h3>
              <EstimatedBreakdownMaybe bookingData={bookingData} />
            </div>
          ) : null;

          const submitButtonClasses = classNames(
            submitButtonWrapperClassName || css.submitButtonWrapper
          );

          const startDateInputProps = {
            label: bookingStartLabel,
            placeholderText: startDatePlaceholder,
          };
          const endDateInputProps = {
            label: bookingEndLabel,
            placeholderText: endDatePlaceholder,
          };

          const dateInputProps = {
            startDateInputProps,
            endDateInputProps,
          };

          const customerAddressPlaceholder = intl.formatMessage(
            { id: 'BookingTimeForm.customerAddressPlaceholder' }
          );

          const addressPlaceholderMessage = intl.formatMessage({
            id: 'EditListingLocationForm.addressPlaceholder',
          });
          const addressRequiredMessage = intl.formatMessage({
            id: 'EditListingLocationForm.addressRequired',
          });
          const addressNotRecognizedMessage = intl.formatMessage({
            id: 'EditListingLocationForm.addressNotRecognized',
          });

          return (
            <Form onSubmit={handleSubmit} className={classes}>

              {Object.keys(addons).map((item, index) => {
                const addonData = addons[item];
                if (addonData) {
                  return (
                    <div className={css.rowCheckbox} key={`addon.${index}`}>
                      <FieldCheckbox
                        id={`addon-${index}`}
                        label={addonData.addOnTitle}
                        name={'addons'}
                        value={addonData.addOnTitle}
                      />
                      <span className={css.labelPrice}>
                      {formatMoney(intl, new Money(addonData.addOnPrice, config.currency))}
                    </span>
                    </div>
                  );
                } else {
                  return null;
                }
              })}

              {monthlyTimeSlots && timeZone ? (
                <FieldDateAndTimeInput
                  {...dateInputProps}
                  className={css.bookingDates}
                  listingId={listingId}
                  bookingStartLabel={bookingStartLabel}
                  onFetchTimeSlots={onFetchTimeSlots}
                  monthlyTimeSlots={monthlyTimeSlots}
                  values={values}
                  intl={intl}
                  form={form}
                  pristine={pristine}
                  timeZone={timeZone}
                />
              ) : null}
              {bookingInfo}
              <label className={css.customerAddressLabel}>
                <FormattedMessage id={'BookingTimeForm.customerAddressLabel'}/>
              </label>

              <LocationAutocompleteInputField
                className={css.locationAddress}
                inputClassName={css.locationAutocompleteInput}
                iconClassName={css.locationAutocompleteInputIcon}
                predictionsClassName={css.predictionsRoot}
                validClassName={css.validLocation}
                autoFocus
                name="customerAddressInput"
                placeholder={addressPlaceholderMessage}
                useDefaultPredictions={false}
                format={identity}
                valueFromForm={values.customerAddress}
                validate={composeValidators(
                  autocompleteSearchRequired(addressRequiredMessage),
                  autocompletePlaceSelected(addressNotRecognizedMessage)
                )}
              />

              <p/>
              <p className={css.smallPrint}>
                <FormattedMessage
                  id={
                    isOwnListing
                      ? 'BookingTimeForm.ownListing'
                      : 'BookingTimeForm.youWontBeChargedInfo'
                  }
                />
              </p>
              <div className={submitButtonClasses}>
                <PrimaryButton type="submit" disabled={!isEnabledBookingButton}>
                  <FormattedMessage id="BookingTimeForm.requestToBook" />
                </PrimaryButton>
              </div>
            </Form>
          );
        }}
      />
    );
  }
}

BookingTimeFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  submitButtonWrapperClassName: null,
  price: null,
  isOwnListing: false,
  listingId: null,
  startDatePlaceholder: null,
  endDatePlaceholder: null,
  monthlyTimeSlots: null,
};

BookingTimeFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  submitButtonWrapperClassName: string,

  unitType: propTypes.bookingUnitType.isRequired,
  price: propTypes.money,
  isOwnListing: bool,
  listingId: propTypes.uuid,
  monthlyTimeSlots: object,
  onFetchTimeSlots: func.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,

  // for tests
  startDatePlaceholder: string,
  endDatePlaceholder: string,
};

const BookingTimeForm = compose(injectIntl)(BookingTimeFormComponent);
BookingTimeForm.displayName = 'BookingTimeForm';

export default BookingTimeForm;
