import React from "react";

const Error = ({ error }) => {
  return (
    <div className="route_error">
      <p>{error}</p>;
    </div>
  );
};

export { Error };
