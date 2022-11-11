import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = ({ stops }) => {
  const routeLatLong = stops.map(({ latitude, longitude }) =>
    L.latLng(Number(latitude), Number(longitude))
  );
  const instance = L.Routing.control({
    waypoints: routeLatLong,
    lineOptions: {
      styles: [{ color: "#6fec6f", weight: 7 }],
    },
    show: true,
    addWaypoints: true,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    createMarker: function () {
      return null;
    },
    showAlternatives: false,
  });

  return instance;
};

const Routing = createControlComponent(createRoutineMachineLayer);

export { Routing };
