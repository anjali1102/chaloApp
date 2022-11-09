import { Select } from "@chakra-ui/react";
import React from "react";
// import { useCreateRoute } from "../../context/locateContext";

const RouteStatus = () => {
  // const {
  //   createLocate: {
  //     routeObj: { route_Status },
  //   },
  //   dispatch,
  // } = useCreateRoute();

  // const routeNumber = (e) => {
  //   dispatch({ type: "ADD_ROUTE_STATUS", payload: { value: e.target.value } });
  // };
  return (
    <div>
      <Select value="" onChange="">
        <option value="active" colorScheme="green">
          Active
        </option>
        <option value="active" colorScheme="green">
          Inactive
        </option>
      </Select>
    </div>
  );
};

export { RouteStatus };
