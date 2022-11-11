import React from "react";
import { FcFullTrash } from "react-icons/fc";
import { GrEdit } from "react-icons/gr";
import { Link } from "react-router-dom";

const RouteDetail = ({ route }) => {
  return (
    <div>
      <Link to={`/route/${route.route_ID}`}>
        <div className="route_info">
          <p>{route.route_Name}</p>
          <p>{route.route_Direction}</p>
          <p className="route_status">{route.route_Status}</p>
        </div>
      </Link>
      <div className="edit_remove_btns">
        <FcFullTrash route={route} />
        <GrEdit route={route} />
      </div>
    </div>
  );
};

export { RouteDetail };
