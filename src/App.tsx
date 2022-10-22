import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Donation from "./Pages/Donation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/donation" element={<Donation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
