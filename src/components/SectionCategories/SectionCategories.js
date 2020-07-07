import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionCategories.css';

import hairImage from './images/hair.jpg';
import beautyImage from './images/beauty.jpg';
import nailsImage from './images/nails.jpg';
import massageImage from './images/massage.jpg';
import barbersImage from './images/barbers.jpg';
import aestheticsImage from './images/aesthetics.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionCategories.listingsInCategories"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionCategories = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>

      <div className={css.locations}>
        {locationLink(
          'Hair',
          hairImage,
          '?address=United%20Kingdom&bounds=59.71220931%2C3.29963686%2C48.21698826%2C-11.96781662&pub_yogaStyles=has_all%3Ahair'
        )}
        {locationLink(
          'Beauty',
          beautyImage,
          '?address=United%20Kingdom&bounds=59.71220931%2C3.29963686%2C48.21698826%2C-11.96781662&pub_yogaStyles=has_all%3Abeauty'
        )}
        {locationLink(
          'Nails',
          nailsImage,
          '?address=United%20Kingdom&bounds=59.71220931%2C3.29963686%2C48.21698826%2C-11.96781662&pub_yogaStyles=has_all%3Anails'
        )}
      </div>
<div className={css.locations}>
        {locationLink(
          'Massage & Spa',
          massageImage,
          '?address=United%20Kingdom&bounds=59.71220931%2C3.29963686%2C48.21698826%2C-11.96781662&pub_yogaStyles=has_all%3Amassage'
        )}
        {locationLink(
          'Barbers',
          barbersImage,
          '?address=United%20Kingdom&bounds=59.71220931%2C3.29963686%2C48.21698826%2C-11.96781662&pub_yogaStyles=has_all%3Abarbering'
        )}
        {locationLink(
          'Aesthetics',
          aestheticsImage,
          '?address=United%20Kingdom&bounds=59.71220931%2C3.29963686%2C48.21698826%2C-11.96781662&pub_yogaStyles=has_all%3AAesthetics'
        )}
      </div>
    </div>
  );
};


SectionCategories.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionCategories.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionCategories;
