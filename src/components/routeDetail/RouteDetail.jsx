import React from "react";
import { FcFullTrash } from "react-icons/fc";
import { GrEdit } from "react-icons/gr";

const RouteDetail = ({ route }) => {
  console.log("route in routeDetail file", { route }, route.route_Name);
  return (
    <div>
      <div className="route_info">
        <p>{route.route_Name}</p>
        <p>{route.route_Direction}</p>
        <p className="route_status">{route.route_Status}</p>
      </div>
      <div className="edit_remove_btns">
        <FcFullTrash route={route} />
        <GrEdit route={route} />
      </div>
    </div>
  );
};

export { RouteDetail };
