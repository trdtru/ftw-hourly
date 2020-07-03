import React from 'react';
import { string, shape, number, object } from 'prop-types';
import polyline from '@mapbox/polyline';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';
import { circlePolyline } from '../../util/maps';
import config from '../../config';

const formatColor = color => {
  return color.replace(/^#/, '');
};

// center - coordinates,
// mapsConfig - configs
// radius - radius in km
const fuzzyCircleOverlay = (center, mapsConfig, radius) => {
  const strokeWeight = 1;
  const strokeColor = mapsConfig.fuzzy.circleColor;
  const strokeOpacity = 0.5;
  const fillColor = mapsConfig.fuzzy.circleColor;
  const fillOpacity = 0.2;

  const path = circlePolyline(center, radius ? (radius * 1000) :  mapsConfig.fuzzy.offset);
  const styles = `-${strokeWeight}+${formatColor(strokeColor)}-${strokeOpacity}+${formatColor(
    fillColor
  )}-${fillOpacity}`;
  return `path${styles}(${encodeURIComponent(polyline.encode(path))})`;
};

const customMarkerOverlay = (center, mapsConfig) => {
  const { url } = mapsConfig.customMarker;
  return `url-${encodeURIComponent(url)}(${center.lng},${center.lat})`;
};

const markerOverlay = center => {
  return `pin-s(${center.lng},${center.lat})`;
};

const mapOverlay = (center, mapsConfig, radius) => {
  if (mapsConfig.fuzzy.enabled) {
    return fuzzyCircleOverlay(center, mapsConfig, radius);
  }
  if (mapsConfig.customMarker.enabled) {
    return customMarkerOverlay(center, mapsConfig);
  }
  return markerOverlay(center);
};

const StaticMapboxMap = props => {
  const { address, center, zoom, mapsConfig, dimensions, radius } = props;
  const { width, height } = dimensions;

  const libLoaded = typeof window !== 'undefined' && window.mapboxgl;
  if (!libLoaded) {
    return null;
  }

  const overlay = mapOverlay(center, mapsConfig, radius);
  const src =
    'https://api.mapbox.com/styles/v1/mapbox/streets-v10/static' +
    (overlay ? `/${overlay}` : '') +
    `/${center.lng},${center.lat},${zoom}` +
    `/${width}x${height}` +
    `?access_token=${config.maps.mapboxAccessToken}`;

  return <img src={src} alt={address} />;
};

StaticMapboxMap.defaultProps = {
  address: '',
  center: null,
  zoom: config.maps.fuzzy.enabled ? config.maps.fuzzy.defaultZoomLevel : 11,
  mapsConfig: config.maps,
};

StaticMapboxMap.propTypes = {
  address: string,
  center: shape({
    lat: number.isRequired,
    lng: number.isRequired,
  }).isRequired,
  zoom: number,
  mapsConfig: object,

  // from withDimensions
  dimensions: shape({
    width: number.isRequired,
    height: number.isRequired,
  }).isRequired,
};

export default lazyLoadWithDimensions(StaticMapboxMap, { maxWidth: '640px' });
