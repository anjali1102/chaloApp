import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("routeData"));
    if (items) {
      setRoutes(items);
    }
  }, []);

  const addRoute = (route) => {
    let newRoutes = [...routes, { ...route, route_ID: uuidv4() }];
    setRoutes(newRoutes);
    localStorage.setItem("routeData", JSON.stringify(newRoutes));
  };

  const removeRouteDetail = (routeDetailGiven) => {
    const newRoutes = routes.filter(
      (eachRoute) => eachRoute.route_ID !== routeDetailGiven.route_ID
    );
    setRoutes(newRoutes);

    localStorage.setItem("routeData", JSON.stringify(newRoutes));
  };

  const updateRouteDetail = (routeDetailGiven, updatedRouteDetail) => {
    let newRoutes = routes.map((eachRoute) =>
      eachRoute.route_ID === routeDetailGiven.route_ID
        ? updatedRouteDetail
        : eachRoute
    );

    setRoutes(newRoutes);
    localStorage.setItem("routeData", JSON.stringify(newRoutes));
  };

  return (
    <RouteContext.Provider
      value={{
        routes,
        setRoutes,
        addRoute,
        removeRouteDetail,
        updateRouteDetail,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = () => useContext(RouteContext);
