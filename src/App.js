import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./component/Welcome";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
