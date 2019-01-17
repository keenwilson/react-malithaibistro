import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg has-background-gradients">
      <Link className="navbar-brand" to="#">
        <figure className="image">
          <img
            className="site-logo centered-and-cropped"
            src="/images/logo-mali-thai-bistro-new.png"
            alt="Mali Thai Bistro logo"
          />
        </figure>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link has-background-clear" to="/menu">
              Menu
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link has-background-clear" to="/contact">
              Contact & Hours
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link has-background-clear" to="/community">
              Community
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link has-background-clear" to="/about">
              Our Story
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link has-background-clear" to="/herbs">
              Herbs & Spices in Thai Cuisine
            </NavLink>
          </li>
          <li className="navbar-end">
            <a href="tel:+1-816-944-4119">
              <button
                type="button"
                className="btn btn-rounded btn-outline-dark"
              >
                <span className="icon">
                  <i className="fas fa-phone" />
                </span>
                <span> Reserve Your Table</span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
