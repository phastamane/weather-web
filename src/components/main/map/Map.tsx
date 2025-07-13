import { useEffect, useRef } from "react";
import getResponse from "../../utils/getResponse";

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
        YMapMarker,
      } = ymaps3;

      const coord = await getResponse(city, "map");

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
        theme: "dark",
        visible: false,
        source: "scheme",
      });

      map.addChild(schemeSource);
      map.addChild(new YMapLayer({ zIndex: 1, source: "scheme", type: "ground" }));
      map.addChild(new YMapLayer({ zIndex: 2, source: "scheme", type: "labels" }));
      map.addChild(new YMapLayer({ zIndex: 3, source: "scheme", type: "buildings" }));
      map.addChild(new YMapLayer({ zIndex: 4, source: "scheme", type: "icons" }));

      mapInstanceRef.current = map;

      // Удаляем старый маркер
      if (markerRef.current) {
        map.removeChild(markerRef.current);
        markerRef.current = null;
      }
      const markerEl = document.createElement("div");
      markerEl.className = "marker";
      markerEl.style.width = "20px";
      markerEl.style.height = "20px";
      markerEl.style.border = "2px solid #fff";
      markerEl.style.borderRadius = "50%";
      markerEl.style.backgroundColor = "transparent";
      markerEl.style.boxShadow = "0 0 5px rgba(255,255,255,0.5)";


      const marker = new YMapMarker({ coordinates: coord }, markerEl);
      map.addChild(marker);
      markerRef.current = marker;
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
