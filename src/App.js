import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WayBackHome from "./Pages/WayBackHome/WayBackHome";
import CourierBox from "./Pages/CourierBox/CourierBox";
import DangerousPlace from "./Pages/DangerousPlace/DangerousPlace";
import Report from "./Pages/Report/Report";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/wayBackHome" element={<WayBackHome />} />
          <Route path="/courierBox" element={<CourierBox />} />
          <Route path="/dangerousPlace" element={<DangerousPlace />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
