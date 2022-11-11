import React, { useState } from "react";
import { Marker, Popup, MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "./Map.css";
// import { Marker, Popup, MapContainer, TileLayer, useMap } from "react-leaflet";
import leafRed from "../../img/leaf-red.png";
import leafOrange from "../../img/leaf-orange.png";
import leafShadow from "../../img/leaf-shadow.png";
// import L from "leaflet";

const Map = ({ stops }) => {
  // const latitude = 12;
  // const longitude = 13;
  const position = [51.505, -0.09];
  const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

  // const redIconCoord = {
  //   lat: 35.774416,
  //   lng: -78.633271,
  // };

  // const orangeIconCoord = {
  //   lat: 35.77279,
  //   lng: -78.652305,
  // };

  // const [lat, setLat] = useState(redIconCoord);
  // const [lon, setLon] = useState(orangeIconCoord);

  // const positionRedIcon = [
  //   stops[stops?.length - 1].latitude,
  //   stops[stops?.length - 1].longitude,
  // ];

  // const positionOrangeIcon = [stops[1].longitude, stops[1].longitude];

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
  // const [lat1, long1] = positionRedIcon;
  // const [lat2, long2] = positionOrangeIcon;

  // const position = [51.505, -0.09];
  // const customMarker = new L.icon({
  //   iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  //   iconSize: [25, 41],
  //   iconAnchor: [10, 41],
  //   popupAnchor: [2, -40],
  // });

  // const positionRedIcon = [redIconCoord.lat, redIconCoord.lng];

  // const positionOrangeIcon = [orangeIconCoord.lat, orangeIconCoord.lng];

  return (
    <div id="map">
      <MapContainer
        id="mapId"
        center={[40, -80]}
        zoom={13}
        // center={positionRedIcon}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[
            Number(stops[0].latitude),
            Number(stops[0].longitude),
          ]}
          icon={redIcon}
        >
          <Popup>{`coordinates : ${Number(stops[0].latitude)}, ${Number(stops[0].longitude)}`}</Popup>
        </Marker>
        <Marker
          position={[
            Number(stops[stops?.length - 1].latitude),
            Number(stops[stops?.length - 1].longitude),
          ]}
          icon={orangeIcon}
        >
          <Popup>{`coordinates : ${Number(stops[stops?.length - 1].latitude)}, ${Number(stops[stops?.length - 1].longitude)}`}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export { Map };
