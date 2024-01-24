import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Menu } from "./Menu/Menu";
import { Footer } from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sobre-nosotros" element={<AboutUs/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
