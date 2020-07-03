import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-new-york',
    predictionPlace: {
      address: 'London, United Kingdom',
      bounds: new LatLngBounds(
        new LatLng(51.7963684, 0.27388115),
 new LatLng(51.2120139, -0.51087702),
      ),
    },
  },
  {
    id: 'default-los-angeles',
    predictionPlace: {
      address: 'Manchester, United Kingdom',
      bounds: new LatLngBounds(
        new LatLng(53.59171533, -2.09167594),
        new LatLng(53.36957445, -2.4037123)
      ),
    },
  },
  {
    id: 'default-san-francisco',
    predictionPlace: {
      address: 'Leeds, United Kingdom',
      bounds: new LatLngBounds(
        new LatLng(53.87085933, -1.43711007),
        new LatLng(53.71451261, -1.65835702)
      ),
    },
  },
  {
    id: 'default-seattle',
    predictionPlace: {
      address: 'Birmingham, United Kingdom',
      bounds: new LatLngBounds(
        new LatLng(52.64800113, -1.70506471),
        new LatLng(52.32565627, -2.14755863)
      ),
    },
  },
  {
    id: 'default-portland',
    predictionPlace: {
      address: 'Glasgow, United Kingdom',
      bounds: new LatLngBounds(
        new LatLng(55.93209271, -4.13580413),
        new LatLng(55.78305529, -4.35777671)
      ),
    },
  },
];
