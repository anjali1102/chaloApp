import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LocateMap } from "./Routes/LocateMap/LocateMap";
import { MapData } from "./Routes/ImportData/MapData";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LocateMap />} />
        {/* <Route path="/data" element={<MapData />} /> */}
      </Routes>
      {/* <RoutingMachine /> */}
    </div>
  );
}

export default App;
