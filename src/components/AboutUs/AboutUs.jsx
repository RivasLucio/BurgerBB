import React from "react";
import "./AboutUs.css";
import img1 from "../../assets/img/about-us.jpg";
import img2 from "../../assets/img/about-us2.jpg";

const AboutUs = () => {
  return (
    <>
    <div className="nosotros-container">
      <div className="nosotros">
        <img src={img1} alt="" />
        <div className="nosotros-text">
          <h2>EL SABOR QUE MARCA LA DIFERENCIA</h2>
          <p>
            En nuestro local, creamos hamburguesas excepcionales con
            ingredientes de calidad. Cada mordisco es una experiencia única.
            ¡Descubre la perfección en cada hamburguesa que servimos!
          </p>
        </div>
      </div>
      <div className="nosotros2">
        <div className="nosotros-text2">
          <h2>EL SABOR QUE MARCA LA DIFERENCIA</h2>
          <p>
            En nuestro local, creamos hamburguesas excepcionales con
            ingredientes de calidad. Cada mordisco es una experiencia única.
            ¡Descubre la perfección en cada hamburguesa que servimos!
          </p>
        </div>
        <img src={img2} alt="" />
      </div>
    </div>
    </>
  );
};

export default AboutUs;
