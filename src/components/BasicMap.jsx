import React, { useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../node_modules/leaflet/dist/leaflet.css";
import osmProvider from "./leaflet-config/osm-provider";
import "./css/map.css";
import L from "leaflet";
const markerIcon = new L.Icon({
  iconUrl: "../../src/assets/images/marker.png",
  iconSize: [35, 45],
});
const BasicMap = () => {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();
  return (
    <div className="flex">
      <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
        <TileLayer
          url={osmProvider.maptiler.url}
          attribution={osmProvider.maptiler.attribution}
        />
        <Marker position={[26.65373, 84.92049]} icon={markerIcon}>
          <Popup>
            <b>First Marker</b>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default BasicMap;
