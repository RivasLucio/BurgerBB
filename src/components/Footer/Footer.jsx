import React from "react";
import "./Footer.css";
import logo from "../../assets/img/bbblogo.png";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <NavLink to="/" activeClassName="active">
        INICIO
      </NavLink>
      <NavLink to="/menu" activeClassName="active">
        MENU
      </NavLink>
      <div className="logo2">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <NavLink to="/sobre-nosotros" activeClassName="active">
        SOBRE NOSOTROS
      </NavLink>
      <NavLink to="/promociones" activeClassName="active">
        PROMOCIONES
      </NavLink>
    </div>
  );
};
