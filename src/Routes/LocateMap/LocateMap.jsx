import React, { useEffect, useState } from "react";
import { Marker, Popup, MapContainer, TileLayer, useMap } from "react-leaflet";
import leafRed from "../../img/leaf-red.png";
import leafOrange from "../../img/leaf-orange.png";
import leafShadow from "../../img/leaf-shadow.png";
import L from "leaflet";
import { MdDirectionsWalk } from "react-icons/md";
import { FcFullTrash } from "react-icons/fc";
import { GrEdit } from "react-icons/gr";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./LocateMap.css";
import {
  Button,
  ButtonSpinner,
  IconButton,
  Input,
  Select,
} from "@chakra-ui/react";
import { useCreateRoute } from "../../context/createroute-context";
import { ShowStopDetails } from "../../components/showStopDetails/ShowStopDetails";
import { useParams } from "react-router-dom";

const LocateMap = () => {
  // const [routes, setRoutes] = useState();
  const { route_ID } = useParams();
  const {
    createLocate: { route, route_Name, route_Direction, route_Status, errors },
    dispatch,
  } = useCreateRoute();

  useEffect(() => {
    // setRoutes()
    // setRoutes((routes) => [...routes, { ...route }]);
    if (!route.route_ID) {
      dispatch({ type: "ADD_ROUTE_ID" });
    }
  }, []);

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

  const enterRouteNumber = (e) => {
    dispatch({ type: "ADD_ROUTE_NAME", payload: { value: e.target.value } });
  };

  const selectRouteDirection = (e) => {
    dispatch({
      type: "ADD_ROUTE_DIRECTION",
      payload: { value: e.target.value },
    });
  };

  const selectRouteStatus = (e) => {
    dispatch({ type: "ADD_ROUTE_STATUS", payload: { value: e.target.value } });
  };

  const addStopsHandler = () => {
    dispatch({ type: "ADD_NEW_STOP" });
  };
  return (
    <div>
      <h1>Create Routes</h1>
      <div className="create_form">
        <div className="route_details">
          {/* <Route /> */}
          <div className="route">
            <Input
              className="route_name"
              type="text"
              placeholder="Enter Route/Bus Number"
              value={route_Name}
              onChange={enterRouteNumber}
            />
          </div>

          <div className="route_dir_status">
            {/* <RouteDirection /> */}
            <div>
              <Select value={route_Direction} onChange={selectRouteDirection}>
                <option value="UP">Up</option>
                <option value="DOWN">Down</option>
              </Select>
            </div>
            {/* <RouteStatus /> */}
            <div>
              <Select value={route_Status} onChange={selectRouteStatus}>
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
              </Select>
            </div>
            {/* <AddStop />  */}
            <div className="add_stop_btn" onClick={addStopsHandler}>
              <Button
                leftIcon={<MdDirectionsWalk />}
                colorScheme="green"
                variant="outline"
                size="md"
                height="48px"
                width="200px"
                border="2px"
              >
                Add Stops
              </Button>
            </div>
          </div>
          <span className="add-2stops-message">
            <i style={{ color: "red" }}>add atleast 2 stops *</i>
          </span>

          {route?.stops.map((stop, index) => (
            <ShowStopDetails
              key={stop.stopId}
              stop={stop}
              stopId={stop.stopId}
              position={index}
            />
          ))}
        </div>
      </div>
      {route?.stops.length > 0 && (
        <IconButton
          width={60}
          colorScheme="green"
          icon={<BsFillArrowRightCircleFill />}
          edit={route_ID ? true : false}
        />
      )}
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
    </div>
  );
};

export { LocateMap };

// for later use, form
{
  /* <div className="formBlock">
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
      </div> */
}
