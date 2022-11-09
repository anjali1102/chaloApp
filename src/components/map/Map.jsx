import React from "react";
import { Marker, Popup, MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "./Map.css";

const Map = (props) => {
  const latitude = 12;
  const longitude = 13;
  const position = [51.505, -0.09];
  const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

  return (
    <div>
      <MapContainer
        id="mapId"
        center={position}
        zoom={6}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customMarker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export { Map };
