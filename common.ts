import type {YMapLocationRequest} from '@yandex/ymaps3-types';

ymaps3.ready.then(() => {
  ymaps3.import.registerCdn('https://cdn.jsdelivr.net/npm/{package}', '@yandex/ymaps3-default-ui-theme@0.0');
});

export const LOCATION: YMapLocationRequest = {
  center: [0, 0],
  zoom: 2
};
