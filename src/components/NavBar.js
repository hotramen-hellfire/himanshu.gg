import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

  return (
    <nav className="navbar">
      <div class="blob-2"></div>
      <h3 className="logo">
        HIMANSHU
      </h3>
      <div class="blob-2"></div>
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active">
            "Home"
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            "About"
          </NavLink>
        </li>
        <li>
          <NavLink to="/Resources" activeClassName="active">
            "Resources"
          </NavLink>
        </li>
        <li>
          <NavLink to="/stuff" activeClassName="active">
            "stuffIlike"
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
