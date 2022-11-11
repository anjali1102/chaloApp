import React from "react";
import { FcFullTrash } from "react-icons/fc";
import { GrEdit } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./RouteDetail.css";

const RouteDetail = ({ route }) => {
  return (
    <div className="route_detail">
      <Link to={`/route/${route.route_ID}`}  className="route_info_wrapper">
        <div className="route_info">
          <p>{route.route_Name}</p>
          <p>{route.route_Direction}</p>
          <p className="route_status">{route.route_Status}</p>
        </div>
      </Link>
      <div className="edit_remove_btns">
        <FcFullTrash route={route} className="remove_btn" />
        <GrEdit route={route} className="edit_btn" />
      </div>
    </div>
  );
};

export { RouteDetail };
