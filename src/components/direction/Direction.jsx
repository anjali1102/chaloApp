import { Select, Stack } from "@chakra-ui/react";
import React from "react";

const Direction = () => {
  return (
    <div>
      <Select value="" onChange="">
        <option value="UP">UP</option>
        <option value="DOWN">DOWN</option>
      </Select>
      <div className="error-messages"></div>
    </div>
  );
};

export { Direction };
