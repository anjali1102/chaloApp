import React, { useState } from "react";
import { Marker, Popup, MapContainer, TileLayer, useMap } from "react-leaflet";
import leafRed from "../../img/leaf-red.png";
import leafOrange from "../../img/leaf-orange.png";
import leafShadow from "../../img/leaf-shadow.png";
import L from "leaflet";
import "./LocateMap.css";

const LocateMap = () => {
  const redIconCoord = {
    lat: 35.774416,
    lng: -78.633271,
  };

  const orangeIconCoord = {
    lat: 35.77279,
    lng: -78.652305,
  };

  const [lat, setLat] = useState(redIconCoord);
  const [lon, setLon] = useState(orangeIconCoord);

  const redIcon = L.icon({
    iconUrl: leafRed,
    shadowUrl: leafShadow,
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -86],
  });

  const orangeIcon = L.icon({
    iconUrl: leafOrange,
    shadowUrl: leafShadow,
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -86],
  });

  const position = [51.505, -0.09];
  const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

  const positionRedIcon = [redIconCoord.lat, redIconCoord.lng];

  const positionOrangeIcon = [orangeIconCoord.lat, orangeIconCoord.lng];

  return (
    <div>
      <div id="map">
        <MapContainer
          id="mapId"
          // center={position}
          zoom={13}
          center={positionRedIcon}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={positionRedIcon} icon={redIcon}>
            <Popup>{`coordinates : ${redIconCoord.lat}, ${redIconCoord.lng}`}</Popup>
          </Marker>
          <Marker position={positionOrangeIcon} icon={orangeIcon}>
            <Popup>{`coordinates : ${orangeIconCoord.lat}, ${orangeIconCoord.lng}`}</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="formBlock">
        <form id="form">
          <input
            type="text"
            name="start"
            className="input"
            id="start"
            // value={start}
            // onChange={(e) => {
            //   e.target.value;
            // }}
            placeholder="Choose starting point"
          />
          <input
            type="text"
            name="end"
            className="input"
            id="destination"
            // value={end}
            // onChange={(e) => {
            //   e.target.value;
            // }}
            placeholder="Choose starting point"
          />
          <button type="submit">Get Directions</button>
        </form>
      </div>
    </div>
  );
};

export { LocateMap };
