import { createContext, useContext, useState } from "react";

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [routes, setRoutes] = useState([]);
  const addRoute = (route) => setRoutes((routes) => [...routes, { ...route }]);

  return (
    <RouteContext.Provider value={{ routes, setRoutes, addRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = () => useContext(RouteContext);
