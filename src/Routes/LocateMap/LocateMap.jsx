import React, { useEffect } from "react";
import { MdDirectionsWalk } from "react-icons/md";
import "./LocateMap.css";
import { Button, FormControl, Heading, Input, Select } from "@chakra-ui/react";
import { useCreateRoute } from "../../context/createroute-context";
import {
  ShowStopDetails,
  RouteDetail,
  SubmitForm,
} from "../../components/index";
import { useParams } from "react-router-dom";
import { useRoute } from "../../context/routeContext";

const LocateMap = () => {
  const { route_ID } = useParams();
  const {
    createLocate: { route, route_Name, route_Direction, route_Status, errors },
    dispatch,
  } = useCreateRoute();

  const { routes } = useRoute();

  console.log("routes", routes);

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
      <Heading as="h3" size="xl">
        Create Route
      </Heading>
      <div className="create_form">
        <div className="route_details">
          {/* <Route /> */}
          <div className="route">
            <Input
              className="route_name"
              type="text"
              placeholder="Enter Route/Bus Number  (eg 001)"
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
      {route?.stops.length > 1 && (
        <SubmitForm
          width={60}
          colorScheme="green"
          edit={route_ID ? true : false}
        />
      )}

      {/* view routes */}
      <Heading as="h3" size="xl">
        View The Routes
      </Heading>
      <div className="view_routes_wrapper">
        <div className="routes_list_header">
          <div className="routes_list_detail_header">
            <p>Bus No.</p>
            <p>Direction</p>
            <p>Status</p>
          </div>
          <div className="routes_list_btn_header">
            <p className="edit_btn">Edit</p>
            <p className="edit_btn">Remove</p>
          </div>
        </div>

        {console.log("route", route)}
        {routes.map((route, index) => (
          <RouteDetail
            key={route.route_ID}
            route={route}
            remove={true}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export { LocateMap };
