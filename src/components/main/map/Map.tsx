import { useEffect, useRef } from "react";
import getResponse from "../../utils/getResponse";
import {YMapDefaultMarker} from '@yandex/ymaps3-default-ui-theme';
import type {LngLat} from '@yandex/ymaps3-types';

type MapProps = { city: string };
declare const ymaps3: any;

function Map({ city }: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  useEffect(() => {
    let destroyed = false;

    async function initMap() {
      await ymaps3.ready;
      const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapLayer,
        YMapDefaultFeaturesLayer
      } = ymaps3;

      const coord = await getResponse(city, "map");
      const content = document.createElement('section');

      if (!mapRef.current || destroyed) return;

      // Удаляем старую карту, если есть
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }

      // Создаём карту
      const map = new YMap(mapRef.current, {
        location: {
          center: coord,
          zoom: 12,
          duration: 300,
          easing: "ease-in-out",
        },
      });

      // Добавляем схему и слои
      const schemeSource = new YMapDefaultSchemeLayer({
        theme: "light",
        visible: false,
        source: "scheme",
      });

      map.addChild(schemeSource);
      map.addChild(new YMapLayer({ zIndex: 1, source: "scheme", type: "ground" }));
      map.addChild(new YMapLayer({ zIndex: 2, source: "scheme", type: "labels" }));
      map.addChild(new YMapLayer({ zIndex: 3, source: "scheme", type: "buildings" }));
      map.addChild(new YMapLayer({ zIndex: 4, source: "scheme", type: "icons" }));
      map.addChild(new YMapDefaultFeaturesLayer());
      const marker = new YMapDefaultMarker(
      {
        coordinates: coord as LngLat,
        title: 'North America',
        subtitle: 'The biggest amount of islands',
        color: 'lavender',
        size: 'normal',
        iconName: 'fallback'
        }
      );
     

      map.addChild(marker)
      


      mapInstanceRef.current = map;



    }

    initMap();

    return () => {
      destroyed = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, [city]);

  return (
    <div
      ref={mapRef}
      id="map"
      style={{
        width: "600px",
        height: "400px",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    />
  );
}

export default Map;
