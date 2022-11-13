import React from "react";
import { FcFullTrash } from "react-icons/fc";
import { GrEdit } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useRoute } from "../../context/routeContext";
import "./RouteDetail.css";

const RouteDetail = ({ stopId, route }) => {
  const { removeRouteDetail } = useRoute();

  return (
    <div className="route_detail">
      <Link to={`/route/${route.route_ID}`} className="route_info_wrapper">
        <div className="route_info">
          <p>{route.route_Name}</p>
          <p>{route.route_Direction}</p>
          <p className="route_status">{route.route_Status}</p>
        </div>
      </Link>
      <div className="edit_remove_btns">
        <FcFullTrash
          route={route}
          className="remove_btn"
          // onClick={() => dispatch({ type: "REMOVE_STOP", payload: { stopId } })}
          onClick={() => {
            removeRouteDetail(route);
          }}
        />
        <GrEdit route={route} className="edit_btn" />
      </div>
    </div>
  );
};

export { RouteDetail };
