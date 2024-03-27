import React, { useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../node_modules/leaflet/dist/leaflet.css";
import osmProvider from "./leaflet-config/osm-provider";
import "./css/map.css";
import L from "leaflet";
import useGeolocation from "./CustomHooks/useGeolocation";

const markerIcon = new L.Icon({
  iconUrl: "../../src/assets/images/marker.png",
  iconSize: [35, 45],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});
const BasicMap = () => {
  const [center, setCenter] = useState({
    lat: 26.653953149627977,
    lng: 84.92049405068072,
  });
  const ZOOM_LEVEL = 9;
  const [map, setMap] = useState(null);
  const location = useGeolocation();
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      map.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center mb-5">
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={setMap}>
          <TileLayer
            url={osmProvider.maptiler.url}
            attribution={osmProvider.maptiler.attribution}
          />

          <Marker
            position={[26.653953149627977, 84.92049405068072]}
            icon={markerIcon}
          >
            <Popup>
              <b>Sogdo Tech Pvt</b>
            </Popup>
          </Marker>

          {location.loaded && !location.error && (
            <Marker
              position={[location.coordinates.lat, location.coordinates.lng]}
              icon={markerIcon}
            >
              <Popup>
                <b>My Location</b>
              </Popup>
            </Marker>
          )}
        </MapContainer>

        <div>
          <button className="btn btn-primary" onClick={showMyLocation}>
            Locate Me
          </button>
        </div>
      </div>
    </>
  );
};

export default BasicMap;
