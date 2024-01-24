import React from "react";
import { BurgerParallax } from "../BurgerParallax/BurgerParallax";
import burger from "../../assets/img/burgerDraw.png";
import "./Home.css";
import { NavLink } from "react-router-dom";
import imgHome from "../../assets/img/home1.png";
import imgHome2 from "../../assets/img/home2.png";
import imgHome3 from "../../assets/img/home3.jpg";
import imgHome4 from "../../assets/img/home4.jpg";




const Home = () => {
  return (
    <>
      <BurgerParallax />
      <div className="home2">
        <div className="home2-img">
          <img src={burger} alt="" />
        </div>
        <div className="home2-texto">
          <h2>EL SABOR QUE MARCA LA DIFERENCIA</h2>
          <p>
            En nuestro local, creamos hamburguesas excepcionales con
            ingredientes de calidad. Cada mordisco es una experiencia única.
            ¡Descubre la perfección en cada hamburguesa que servimos!
          </p>
          <NavLink to="/menu">
            Ver menu
          </NavLink>
        </div>
      </div>
      <div className="home3">
        <h3> Conocenos</h3>
        <img className="imgHome" src={imgHome} alt="" />
        <img className="imgHome2" src={imgHome2} alt="" />
        <img className="imgHome3" src={imgHome3} alt="" />
        <h2>Un Sitio</h2>
        <h1>Unico</h1>
        <img className="imgHome4" src={imgHome4} alt="" />
      </div>
      
    </>
  );
};

export default Home;
