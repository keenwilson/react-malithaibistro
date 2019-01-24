import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row paral-wrapper">
        <div className="col-md-12">
          <h1 className="heading-title text-center">
            Oops. Something went wrong
          </h1>
          <h2 className="heading-subtitle text-center">Error 404</h2>
          <p className="p-article text-center">
            We can't seem to find the page you are looking for.
            <br />
            Here are some helpful links instead:
          </p>
          <div class="d-flex justify-content-center">
            {" "}
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Link className="notFound__link" to="/home">
                  Home
                </Link>
              </li>
              <li className="list-group-item">
                <Link className="notFound__link" to="/menu">
                  Menu
                </Link>
              </li>
              <li className="list-group-item">
                <Link className="notFound__link" to="/contact">
                  Contact & Hours
                </Link>
              </li>
              <li className="list-group-item">
                <Link className="notFound__link" to="/community">
                  Community
                </Link>
              </li>
              <li className="list-group-item">
                <Link className="notFound__link" to="/about">
                  About
                </Link>
              </li>
              <li className="list-group-item">
                <Link className="notFound__link" to="/wisdom">
                  Thai Wisdom
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
