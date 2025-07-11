import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./customMap.css";

const CustomMap = ({ coordinates, remove, controls }) => {
  const MapUpdater = ({ coordinates }) => {
    const map = useMap();

    useEffect(() => {
      if (coordinates) {
        map.setView(coordinates, map.getZoom());
        remove();
      }
    }, [coordinates]);

    return null;
  };

  const MapSettingsUpdater = ({ isDoubleClick, maxZoom, isScrollZoom }) => {
    const map = useMap();

    useEffect(() => {
      if (map) {
        if (isDoubleClick) {
          map.doubleClickZoom.enable();
        } else {
          map.doubleClickZoom.disable();
        }

        if (isScrollZoom) {
          map.scrollWheelZoom.enable();
        } else {
          map.scrollWheelZoom.disable();
        }

        map.options.scrollWheelZoom = isScrollZoom;
        map.options.maxZoom = maxZoom;
      }
    }, [map, isDoubleClick, maxZoom, isScrollZoom]);

    return null;
  };

  useEffect(() => {
    const L = require("leaflet");
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  const isdoubleClickControlsChecked = controls.includes("1");
  const isStreetViewChecked = controls.includes("2");
  const isScrollWheelZoom = controls.includes("3");

  return (
    <MapContainer center={coordinates} zoom={10} style={{ height: "785px" }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapSettingsUpdater
        isDoubleClick={isdoubleClickControlsChecked}
        maxZoom={isStreetViewChecked ? 18 : 16}
        isScrollZoom={isScrollWheelZoom}
      />
      <MapUpdater coordinates={coordinates} />
    </MapContainer>
  );
};

export default CustomMap;
