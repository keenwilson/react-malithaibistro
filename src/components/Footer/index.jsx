import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer has-background-gradients text-center text-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <figure className="image">
                <img
                  className="site-logo centered-and-cropped"
                  src="https://i.imgur.com/nq9WN1J.png"
                  alt="Mali Thai Bistro logo"
                />
              </figure>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="footer__link">
                    Tuesday - Thursday : 11 AM - 9 PM
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="footer__link">
                    Friday - Saturday : 11 AM - 10 PM
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="footer__link">Sunday : 12 PM - 8 PM</span>
                </li>
                <li className="list-group-item">
                  <span className="footer__link">Monday : closed</span>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Link className="footer__link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="footer__link" to="/menu">
                    Menu
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="footer__link" to="/contact">
                    Contact & Hours
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="footer__link" to="/community">
                    Community
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="footer__link" to="/about">
                    About
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="footer__link" to="/wisdom">
                    Thai Wisdom
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-left">
                  <span className="footer__link">
                    <i className="fas fa-map-marker-alt" /> Address
                  </span>
                </li>
                <li className="list-group-item  text-left">
                  <span className="footer__link pl-3">579 SE Melody Ln,</span>
                </li>
                <li className="list-group-item  text-left">
                  <span className="footer__link pl-3">
                    Lee's Summit, MO 64063
                  </span>
                </li>
                <li className="list-group-item  text-left">
                  <span className="footer__link">
                    <i className="fas fa-phone" /> Phone
                  </span>
                </li>
                <li className="list-group-item  text-left">
                  <a className="contact__link" href="tel:+1-816-944-4119">
                    <span className="footer__link pl-3">(816) 944-4119</span>
                  </a>
                </li>
                <li className="list-group-item  text-left">
                  <span className="footer__link">
                    Copyright© 2019 Mali Thai Bistro
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
