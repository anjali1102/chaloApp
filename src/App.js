import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LocateMap } from "./Routes/LocateMap/LocateMap";
import { SingleRoute } from "./components/SingleRoute/SingleRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LocateMap />} />
        <Route path="/route/:route_ID" element={<SingleRoute />} />
      </Routes>
    </div>
  );
}

export default App;
