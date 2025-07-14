// lib/ymaps.ts
declare const ymaps3: any;
import React from 'react';
import ReactDOM from 'react-dom';

// Загружаем одновременно:
// 1. Модуль reactify из Яндекс.Карт
// 2. Глобальный ymaps3 API
const [ymaps3React] = await Promise.all([
  // @ts-ignore — глобальный ymaps3 создаётся при загрузке JS API через <script>
  ymaps3.import('@yandex/ymaps3-reactify'),
  // @ts-ignore
  ymaps3.ready
]);

// Привязываем reactify к React и ReactDOM
export const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);

// Извлекаем готовые компоненты
export const {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapMarker,
  YMapControls,
  YMapControlButton
} = reactify.module(ymaps3);
