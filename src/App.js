import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./component/Welcome";
import Home from "./component/Home";
import Planner from "./component/Planner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </Router>
  );
}

export default App;
