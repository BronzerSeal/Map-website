import React, { useEffect, useRef, useState } from "react";
import "./YandexMap.css";

const YandexMap = ({ searchQuery }) => {
  const mapRef = useRef(null);
  const ymapsRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      if (window.ymaps && !mapInstanceRef.current) {
        window.ymaps.ready(() => {
          mapInstanceRef.current = new window.ymaps.Map(mapRef.current, {
            center: [55.76, 37.64],
            zoom: 10,
          });
          ymapsRef.current = window.ymaps;

          // Удаление ненужных контролов
          mapInstanceRef.current.controls.remove("geolocationControl");
          mapInstanceRef.current.controls.remove("searchControl");
          mapInstanceRef.current.controls.remove("trafficControl");
          mapInstanceRef.current.controls.remove("typeSelector");
          mapInstanceRef.current.controls.remove("fullscreenControl");
          mapInstanceRef.current.controls.remove("zoomControl");
          mapInstanceRef.current.controls.remove("rulerControl");
        });
      }
    };

    const loadScriptOnce = () => {
      if (window.ymaps) {
        initMap();
      } else if (!window._yandexMapsLoading) {
        window._yandexMapsLoading = true;
        const script = document.createElement("script");
        script.src =
          "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=<YOUR API KEY>";
        script.type = "text/javascript";
        script.onload = () => {
          window._yandexMapsLoading = false;
          initMap();
        };
        script.onerror = () => {
          console.error("Ошибка загрузки Яндекс.Карт");
          window._yandexMapsLoading = false;
        };
        document.head.appendChild(script);
      }
    };

    loadScriptOnce();
  }, []);

  return <div ref={mapRef} style={{ width: "900px", height: "790px" }} />;
};

export default YandexMap;
