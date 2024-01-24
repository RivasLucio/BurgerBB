import React from "react";
import "./Navbar.css";
import logo from "../../assets/img/bbblogo.png";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="menu">
        <NavLink to="/" activeClassName="active">
          INICIO
        </NavLink>
        <NavLink to="/menu" activeClassName="active">
          MENU
        </NavLink>
        <NavLink to="/sobre-nosotros" activeClassName="active">
          SOBRE NOSOTROS
        </NavLink>
        <NavLink to="/promociones" activeClassName="active">
          PROMOCIONES
        </NavLink>
      </div>
    </div>
  );
};

