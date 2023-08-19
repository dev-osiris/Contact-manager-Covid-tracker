import Heading from "./components/Heading";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Map from "./components/Map";

function App() {
  return (
    <BrowserRouter>
      <Heading title="hello man"/>
      
      
    <div className="side-by-side">
      <Sidebar />

      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="map" element={ <Map /> } />
      </Routes>
    </div>  

    </BrowserRouter>
  );
}

export default App;
