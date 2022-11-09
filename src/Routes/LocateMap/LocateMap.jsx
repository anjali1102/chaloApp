import { Box, Flex, HStack, IconButton, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { Map } from "../../components/map/Map";
import { AddRoute } from "../../components/modals/addRoute/AddRoute";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
// import { AddStop } from "../../components/addStop/AddStop";
// import { Direction } from "../../components/direction/Direction";
// import { RouteStatus } from "../../components/routeStatus/RouteStatus";
import { ShowStopDetails } from "../../components/showStopDetails/ShowStopDetails";
import { Marker, Popup, MapContainer, TileLayer, useMap } from "react-leaflet";
import leafRed from "../../img/leaf-red.png";
import leafOrange from "../../img/leaf-orange.png";
import leafShadow from "../../img/leaf-shadow.png";
import L from "leaflet";
import "./LocateMap.css";

const LocateMap = () => {
  // const latitude = 12;
  // const longitude = 13;

  // greenIcon: {
  //   lat: 35.787449,
  //   lng: -78.6438197,
  // },
  const redIconCoord = {
    lat: 35.774416,
    lng: -78.633271,
  };

  const orangeIconCoord = {
    lat: 35.77279,
    lng: -78.652305,
  };

  // const [state, setState] = useState(Intialstate);

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

  // default map layer
  // let map = L.map("map", {
  //   layers: MQ.mapLayer(),
  //   center: [35.791188, -78.636755],
  //   zoom: 12,
  // });

  // function runDirection(start, end) {
  // recreating new map layer after removal
  // map = L.map("map", {
  //   layers: MQ.mapLayer(),
  //   center: [35.791188, -78.636755],
  //   zoom: 12,
  // });

  //   var dir = MQ.routing.directions();

  //   dir.route({
  //     locations: [start, end],
  //   });

  //   CustomRouteLayer = MQ.Routing.RouteLayer.extend({
  //     createStartMarker: (location) => {
  //       var custom_icon;
  //       var marker;

  //       custom_icon = L.icon({
  //         iconUrl: "img/red.png",
  //         iconSize: [20, 29],
  //         iconAnchor: [10, 29],
  //         popupAnchor: [0, -29],
  //       });

  //       marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);

  //       return marker;
  //     },

  //     createEndMarker: (location) => {
  //       var custom_icon;
  //       var marker;

  //       custom_icon = L.icon({
  //         iconUrl: "img/blue.png",
  //         iconSize: [20, 29],
  //         iconAnchor: [10, 29],
  //         popupAnchor: [0, -29],
  //       });

  //       marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);

  //       return marker;
  //     },
  //   });

  //   map.addLayer(
  //     new CustomRouteLayer({
  //       directions: dir,
  //       fitBounds: true,
  //     })
  //   );
  // }

  // function that runs when form submitted
  function submitForm(event) {
    event.preventDefault();

    // delete current map layer
    // map.remove();

    // getting form data
    // start = document.getElementById("start").value;
    // end = document.getElementById("destination").value;

    // run directions function
    // runDirection(start, end);

    // reset form
    // document.getElementById("form").reset();
  }

  // asign the form to form variable
  // const form = document.getElementById("form");

  // call the submitForm() function when submitting the form
  // form.addEventListener("submit", submitForm);

  return (
    <div>
      {/* <Flex flexDirection="column" alignItems="center" w="100vw">
        <Box
          p={4}
          borderRadius="lg"
          m={4}
          bgColor="white"
          shadow="base"
          minW="container.md"
        >
        
          <AddRoute />
        </Box>
        <Box left={0} top={0} h="100%" w="100%">
          <Map />
        </Box>
      </Flex> */}

      <div id="map" onClick="">
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
          <button type="submit" onClick={submitForm}>
            Get Directions
          </button>
        </form>
      </div>
    </div>
  );
};

export { LocateMap };

{
  {
    /* <HStack alignItems="center" w="100vw"></HStack> */
  }
  /* <RouteStatus />
            <Direction />
            <AddStop /> */
}
