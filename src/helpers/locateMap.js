import { v4 as uuidv4 } from "uuid";
 
const locateMapHelpers = (state, action) => {
  switch (action.type) {
    case "ADD_ROUTE_ID":
      return { ...state, route: { ...state.route, route_ID: uuidv4() } };
    case "ADD_ROUTE_NAME":
      return {
        ...state,
        route: { ...state.route, route_Name: action.payload.value },
      };
    case "ADD_ROUTE_DIRECTION":
      return {
        ...state,
        route: { ...state.route, route_Direction: action.payload.value },
      };
    case "ADD_ROUTE_STATUS":
      return {
        ...state,
        route: { ...state.route, route_Status: action.payload.value },
      };
    case "ADD_NEW_STOP":
      return {
        ...state,
        route: {
          ...state.route,
          stops: [
            ...state.route.stops,
            {
              stopId: uuidv4(),
              stopName: "",
              latitude: "",
              longitude: "",
            },
          ],
        },
      };
    case "REMOVE_STOP":
      return {
        ...state, 
        route:{
        ...state.route, stops: state.route.stops.filter(({stopId})=>stopId!==action.payload.stopId )
      }};
    case "ADD_STOP_NAME":
      return {
        ...state,
        route: {
          ...state.route,
          stops: state.route.stops.map((stop) =>
            stop.stopId !== action.payload.stopId
              ? stop
              : { ...stop, stopName: action.payload.stopName }
          ),
        },
      };
    case "ADD_LATITUDE":
      return {
        ...state,
        route: {
          ...state.route,
          stops: state.route.stops.map((stop, index) =>
            stop.stopId !== action.payload.stopId
              ? stop
              : { ...stop, latitude: action.payload.latitude }
          ),
        },
      };
    case "ADD_LONGITUTE":
      return {
        ...state,
        route: {
          ...state.route,
          stops: state.route.stops.map((stop, index) =>
            stop.stopId !== action.payload.stopId
              ? stop
              : { ...stop, longitude: action.payload.longitude }
          ),
        },
      };
    case "DISPLAY_ERROR":
      return {
        ...state,
        routeObjErrors: {
          route_Name: "",
          route_Direction: "",
          stops: [],
        },
      };

    case "RESET_ERROR":
      return {
        ...state,
        routeObjErrors: {
          route_Name: "",
          route_Direction: "",
          stops: [],
        },
      };
    case "ADD_ROUTE_DETAILS":
      return { ...state, route: action.payload.route };

    case "RESET_TO_INITIAL_STATE":
      return {
        routeObj: {
          route_ID: "",
          route_Name: "",
          route_Status: "ACTIVE",
          route_Direction: "UP",
          stops: [],
        },
        routeObjErrors: {
          route_Name: "",
          route_Direction: "",
          stops: [],
        },
      };

    case "UPDATE_STOP_ORDER":
      return {
        ...state,
        routeObj: { ...state.route, stops: action.payload.stops },
      };
    default:
      return state;
  }
};

export { locateMapHelpers };
