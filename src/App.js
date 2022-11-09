import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LocateMap } from "./Routes/LocateMap/LocateMap";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LocateMap />} />
      </Routes>
    </div>
  );
}

export default App;
