import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [routes, setRoutes] = useState([]);

  const addRoute = (route) =>
    setRoutes((routes) => [...routes, { ...route, route_ID: uuidv4() }]);

  const removeRouteDetail = (routeDetailGiven) => {
    const newRoutes = routes.filter(
      (eachRoute) => eachRoute.route_ID !== routeDetailGiven.route_ID
    );
    setRoutes(newRoutes);
  };

  return (
    <RouteContext.Provider
      value={{ routes, setRoutes, addRoute, removeRouteDetail }}
    >
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = () => useContext(RouteContext);
