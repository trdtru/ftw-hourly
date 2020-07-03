import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import nyImage from './images/london.jpg';
import laImage from './images/manchester.jpg';
import sfImage from './images/leeds.jpg';

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
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const minilocationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationNameB}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.linkTextB}>
        <FormattedMessage
          id="SectionLocations.minilistingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'London',
          nyImage,
          '?address=London%2C%20Greater%20London%2C%20England%2C%20United%20Kingdom&bounds=51.669993%2C0.152641%2C51.384598%2C-0.35167'
        )}
        {locationLink(
          'Manchester',
          laImage,
          '?address=Manchester%2C%20Greater%20Manchester%2C%20England%2C%20United%20Kingdom&bounds=53.586199%2C-2.087698%2C53.348612%2C-2.52355'
        )}
        {locationLink(
          'Leeds',
          sfImage,
          '?address=Leeds%2C%20West%20Yorkshire%2C%20England%2C%20United%20Kingdom&bounds=53.955164%2C-1.161587%2C53.719309%2C-1.800362'
        )}
      </div>
      <div className={css.locations}>
        {minilocationLink(
          'Belfast',
          nyImage,
          '?address=Belfast%2C%20Belfast%2C%20Northern%20Ireland%2C%20United%20Kingdom&bounds=54.663074%2C-5.757518%2C54.482496%2C-6.085279'
        )}
        {minilocationLink(
          'Birmingham',
          laImage,
          '?address=Birmingham%2C%20West%20Midlands%2C%20England%2C%20United%20Kingdom&bounds=52.570615%2C-1.597742%2C52.327674%2C-2.045202'
        )}
        {minilocationLink(
          'Bristol',
          sfImage,
          '?address=Bristol%2C%20Bristol%2C%20England%2C%20United%20Kingdom&bounds=51.66977%2C-2.293634%2C51.27028%2C-2.872346'
        )}
        {minilocationLink(
          'Cardiff',
          sfImage,
          '?address=Cardiff%2C%20Cardiff%2C%20Wales%2C%20United%20Kingdom&bounds=51.58318%2C-3.035689%2C51.418702%2C-3.386759'
        )}
        {minilocationLink(
          'Edinburgh',
          sfImage,
          '?address=Edinburgh%2C%20City%20of%20Edinburgh%2C%20Scotland%2C%20United%20Kingdom&bounds=55.995262%2C-3.077809%2C55.868572%2C-3.3796'
        )}
        {minilocationLink(
          'Glasgow',
          sfImage,
          '?address=Glasgow%2C%20Scotland%2C%20United%20Kingdom&bounds=55.9296412679205%2C-4.07171678939187%2C55.7812791430739%2C-4.39320049520215'
        )}
      </div>
      <div className={css.locations}>
        {minilocationLink(
          'Leicester',
          nyImage,
          '?address=Leicester%2C%20Leicester%2C%20England%2C%20United%20Kingdom&bounds=52.780377%2C-0.805322%2C52.504224%2C-1.388562'
        )}
        {minilocationLink(
          'Liverpool',
          laImage,
          '?address=Liverpool%2C%20Merseyside%2C%20England%2C%20United%20Kingdom&bounds=53.589405%2C-2.777467%2C53.322243%2C-3.10547'
        )}
        {minilocationLink(
          'Newcastle',
          sfImage,
          '?address=Newcastle%20upon%20Tyne%2C%20Tyne%20and%20Wear%2C%20England%2C%20United%20Kingdom&bounds=55.0185948%2C-1.55876489%2C54.92848372%2C-1.69000364&mapSearch=true'
        )}
        {minilocationLink(
          'Sheffield',
          sfImage,
          '?address=Sheffield%2C%20South%20Yorkshire%2C%20England%2C%20United%20Kingdom&bounds=53.436943%2C-1.3952634%2C53.31965449%2C-1.5596194&mapSearch=true'
        )}
        {minilocationLink(
          'Sunderland',
          sfImage,
          '?address=Sunderland%2C%20Tyne%20and%20Wear%2C%20England%2C%20United%20Kingdom&bounds=54.94024938%2C-1.35527126%2C54.87360538%2C-1.45217161&mapSearch=true'
        )}
        {minilocationLink(
          'More...',
          sfImage,
          '?address=United%20Kingdom&bounds=60.9093537990869%2C1.86276379960989%2C49.802416901086%2C-8.74974065661991'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
