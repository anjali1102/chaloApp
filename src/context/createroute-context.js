import { createContext, useContext, useReducer } from "react";
import { locateMapHelpers } from "../helpers/locateMap";

const CreateLocateContext = createContext();

export const CreateLocateProvider = ({ children }) => {
  
  const initialState = {
    route: {
      route_ID: "",
      route_Name: "",
      route_Status: "ACTIVE",
      route_Direction: "UP",
      stops: [],
    }
  };
  

  const [createLocate, dispatch] = useReducer(locateMapHelpers, initialState);
  const addStops = () => {
    dispatch({ type: "ADD_NEW_STOP" });
  };

  return (
    <CreateLocateContext.Provider value={{ createLocate, dispatch, addStops }}>
      {children}
    </CreateLocateContext.Provider>
  );
};

export const useCreateRoute = () => useContext(CreateLocateContext);
