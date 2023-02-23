import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>Hike BC</h1>
      <h3>Find your next adventure</h3>
      <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"} to="/">Home</NavLink>
      <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"} to="/hikes">Hikes</NavLink>
      <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"} to="/about">Contact</NavLink>
      <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"} to="/about">About</NavLink>
    </header>
  );
}

export default Header;
