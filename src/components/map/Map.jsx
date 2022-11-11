import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Routing } from "./Routing";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const redIcon = new Icon({
  iconUrl: "/img/leafRed.png",
  shadowUrl: "/img/leafShadow.png",
  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -86],
});

const orangeIcon = new Icon({
  iconUrl: "/img/leafOrange.png",
  shadowUrl: "/img/leafShadow.png",
  iconSize: [38, 95],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -86],
});
const Map = ({ stops }) => {
  return (
    <div id="map">
      <MapContainer
        className="MapContainer"
        center={[40, -80]}
        zoom={18}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "80vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[Number(stops[0].latitude), Number(stops[0].longitude)]}
          icon={redIcon}
        >
          <Popup>{`coordinates : ${Number(stops[0].latitude)}, ${Number(
            stops[0].longitude
          )}`}</Popup>
        </Marker>
        <Marker
          position={[
            Number(stops[stops?.length - 1].latitude),
            Number(stops[stops?.length - 1].longitude),
          ]}
          icon={orangeIcon}
        >
          <Popup>{`coordinates : ${Number(
            stops[stops?.length - 1].latitude
          )}, ${Number(stops[stops?.length - 1].longitude)}`}</Popup>
        </Marker>
        <Routing stops={stops} />
      </MapContainer>
    </div>
  );
};

export { Map };
