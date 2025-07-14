import type {LngLat} from '@yandex/ymaps3-types';
import type {YMapDefaultMarkerProps} from '@yandex/ymaps3-default-ui-theme';

// Array containing GeoJSON data for markers
export const markersGeoJsonSource: Omit<YMapDefaultMarkerProps, 'popup'>[] = [
  {
    coordinates: [-100.3, 50.5] as LngLat,
    title: 'North America',
    subtitle: 'The biggest amount of islands',
    color: 'lavender',
    size: 'normal',
    iconName: 'fallback'
  },
  {
    coordinates: [-60.3, -10.5] as LngLat,
    title: 'South America',
    subtitle: 'Has the longest mountain range',
    color: 'tulip',
    size: 'normal',
    iconName: 'fallback'
  },
  {
    coordinates: [25.5, 12.5] as LngLat,
    title: 'Africa',
    subtitle: 'It is a home to the longest river',
    color: 'orange',
    size: 'normal',
    iconName: 'fallback'
  },
  {
    coordinates: [88.5, 50.6] as LngLat,
    color: 'green',
    title: 'Asia',
    subtitle: 'Has the highest mountain',
    size: 'normal',
    iconName: 'fallback'
  },
  {
    coordinates: [22.2, 52.9] as LngLat,
    color: 'lightgreen',
    title: 'Europe',
    subtitle: 'Has the smallest country',
    size: 'normal',
    iconName: 'fallback'
  },
  {
    coordinates: [135.5, -25.5] as LngLat,
    color: 'blue',
    title: 'Australia',
    subtitle: 'A lot of unique animals',
    size: 'normal',
    iconName: 'fallback'
  },
  {
    coordinates: [25.5, -79.5] as LngLat,
    color: 'darkblue',
    title: 'Antarctica',
    subtitle: 'Covered in ice about 98% of it',
    size: 'normal',
    iconName: 'fallback'
  }
];
