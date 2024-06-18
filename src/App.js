import Skills from "./containers/skills";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Portfolio from "./containers/portfolio";

import Navbar from "./components/navBar";


import ParticlesComponent from "./utils.js/particles";
function App() {
  const location = useLocation();
  const disppartjs = location.pathname === "/" ;
  return (
    <div className="App">
      <Navbar />
      {disppartjs && <ParticlesComponent id="particles" />}
      
      <div className="App_main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
