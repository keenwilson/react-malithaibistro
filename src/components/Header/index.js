import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light main-menu">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <NavLink className="nav-link header-link" to="/home">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link header-link" to="/menu">
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link header-link" to="/contact">
              Contact & Hours
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link header-link" to="/community">
              Community
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link header-link" to="/about">
              Our Story
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link header-link" to="/wisdom">
              Thai Wisdom
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
