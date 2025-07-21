import { useEffect, useRef, useState } from "react";
import getResponse from "../../utils/getResponse";
import {YMapDefaultMarker} from '@yandex/ymaps3-default-ui-theme';
import type {LngLat} from '@yandex/ymaps3-types';

type MapProps = { city: string};
declare const ymaps3: any;

function Map({ city}: MapProps) {
  
  
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const closeBanner = () => {
    setIsVisible(false);
    setTimeout(() => setError(null), 800);
    };


useEffect(() => {
  let destroyed = false;

  async function initMap() {
    try {
      await ymaps3.ready;

      const data = await getResponse(city, 'weather');
      const coord = await getResponse(city, 'map');

      const cityName = data?.city?.name;
      const template = Math.round(data.list[0].main.temp);
      const weatherDescription: string = data.list[0].weather[0].description;
      const wind: number = data.list[0].wind.speed;

      const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapLayer,
        YMapDefaultFeaturesLayer
      } = ymaps3;

      if (!mapRef.current || destroyed) return;

      // Удаляем старую карту
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

      map.addChild(new YMapDefaultSchemeLayer({ theme: "dark", visible: false, source: "scheme" }));
      map.addChild(new YMapDefaultFeaturesLayer());
      map.addChild(new YMapLayer({ zIndex: 1, source: "scheme", type: "ground" }));
      map.addChild(new YMapLayer({ zIndex: 2, source: "scheme", type: "labels" }));
      map.addChild(new YMapLayer({ zIndex: 3, source: "scheme", type: "buildings" }));
      map.addChild(new YMapLayer({ zIndex: 4, source: "scheme", type: "icons" }));

      map.addChild(new YMapDefaultMarker({
        coordinates: coord as LngLat,
        color: "red",
        size: "micro",
        staticHint: false,
        popup: {
          content: () => {
            const container = document.createElement('div');
            container.className = 'popup-div';
            container.innerHTML = `
              <strong>${cityName}</strong><br/>
              ${template}<strong>°С</strong>
              ${weatherDescription}<br/>
              ${Math.round(wind)} <strong>м/с</strong>
            `;
            return container;
          }
        }
      }));

      mapInstanceRef.current = map;

    } 
    catch (error) {

      setError("не удалось загрузить данные для указанного города");
      setIsVisible(true);

       setTimeout(() => {
         setIsVisible(false)
         setTimeout(() => setError(null), 800);
      }, 4000);
    }

  }

  initMap();

  return () => {
    destroyed = true;

  };
}, [city]);

  return (
    <>
      {error && (
        <div className={`error-banner ${isVisible ? "show" : "hide"}`} onClick={closeBanner}>
          {error}
        </div>
)}
  
      <div
        ref={mapRef}
        id="map"
        style={{
          width: "600px",
          height: "400px",
          borderRadius: "40px",
          overflow: "hidden",
        }}
      />
    </>
  );
}

export default Map;

