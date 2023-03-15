import Navbar from "./components/Navbar";
import Home from "../src/pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
