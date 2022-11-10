import { Select } from "@chakra-ui/react";
import React from "react";

const RouteStatus = () => {
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
