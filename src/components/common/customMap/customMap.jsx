import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./customMap.css";

const CustomMap = ({ coordinates, remove }) => {
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

  useEffect(() => {
    const L = require("leaflet");
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  return (
    <MapContainer center={coordinates} zoom={10} style={{ height: "785px" }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapUpdater coordinates={coordinates} />
    </MapContainer>
  );
};

export default CustomMap;
