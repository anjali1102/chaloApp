import React from "react";
import { useParams } from "react-router-dom";
import { useRoute } from "../../context/routeContext";
import { Map } from "../map/Map";
import "./SingleRoute.css";

const SingleRoute = () => {
  const { routes } = useRoute();
  const { route_ID } = useParams();
  const route = routes.find((route) => route.route_ID === route_ID);


  return (
    <>
      {route?.stops[0].latitude && <Map stops={route?.stops} />}
      <div className="meta_data">
        <p>
          <span className="bold">Bus Number: </span>
          {route?.route_Name}
        </p>
        <p>
          <span className="bold">Bus Direction: </span>
          {route?.route_Direction}
        </p>
        <p>
          <span className="bold">Bus Status: </span>
          {route?.route_Status}
        </p>
      </div>
      <div className="stop_detail">
        <p className="column_header">Location Name</p>
        <p className="column_header">Latitude</p>
        <p className="column_header">Longitude</p>
      </div>
      <div>
        {route?.stops?.map((stop) => (
          <div className="stop_detail">
            {console.log(stop)}
            <p className="column_data">{stop.stopName}</p>
            <p className="column_data">{stop.latitude}</p>
            <p className="column_data">{stop.longitude}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export { SingleRoute };
