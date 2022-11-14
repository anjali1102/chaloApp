import React from "react";
import { Input } from "@chakra-ui/react";
import { useCreateRoute } from "../../context/createroute-context";
import { IoMdCloseCircle } from "react-icons/io";

const ShowStopDetails = ({ stopId, latitude, longitude }) => {
  const {
    createLocate: { route, stopName },
    dispatch,
  } = useCreateRoute();

  const stopNameHandler = (e) => {
    dispatch({
      type: "ADD_STOP_NAME",
      payload: { stopId, stopName: e.target.value },
    });
  };
  const latitudeHandler = (e) => {
    dispatch({
      type: "ADD_LATITUDE",
      payload: { stopId, latitude: e.target.value },
    });
  };

  const longitudeHandler = (e) => {
    dispatch({
      type: "ADD_LONGITUTE",
      payload: { stopId, longitude: e.target.value },
    });
  };

  return (
    <div className="stop_details">
      <div>
        <Input
          type="text"
          placeholder="Enter Stop Name"
          onChange={stopNameHandler}
          value={stopName}
        />
      </div>
      <div className="lat">
        <Input
          type="number"
          placeholder="latitude (numbers allowed)"
          className="lat_input"
          value={latitude}
          onChange={latitudeHandler}
        />
      </div>
      <div className="long">
        <Input
          type="number"
          placeholder="Longitude (numbers allowed)"
          className="long_input"
          value={longitude}
          onChange={longitudeHandler}
        />
      </div>

      <span className="delete-icon" onClick={()=> dispatch({ type: "REMOVE_STOP", payload: { stopId } })}>
        <IoMdCloseCircle />
      </span>
    </div>
  );
};

export { ShowStopDetails };

