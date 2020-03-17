import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 ">
          <h1 className="text-center restaurant-title restaurant-wrapper">
            Mali Thai Bistro
          </h1>
        </div>
      </div>

      <div className="jumbotron paral paralsec">
        <h1 className="paral__text display-3 text-center restaurant-title restaurant-wrapper">
          Thai restaurant in Lee's Summit
        </h1>

        <p className="paral__text lead">
          <a
            href="tel:+1-816-944-4119"
            role="button"
            className="btn btn-rounded btn-outline-dark"
          >
            <span className="icon">
              <i className="fas fa-phone" />
            </span>
            <span> Reserve Your Table</span>
          </a>
        </p>
      </div>
      <div className="row paral-wrapper">
        <div className="col-12 ">
          <img
            className="image-h-250 image-rounded centered-and-cropped"
            src="https://i.imgur.com/HVDB9dRl.jpg"
            alt="Thai restaurant in Kansas City area"
          />
          <p className="p-article ">
            Founded in 2015, Mali Thai Bistro is family-owned restaurant and
            offers a variety of Thai dishes from several regions of Thailand
            prepared with traditional ingredients. We features a full service
            bar that offers craft beer, cocktails and other libations. Mali Thai
            Bistro caters private events and provides carry-out for individuals
            wanting their meals to go.
          </p>
        </div>
      </div>

      <div className="jumbotron paral paralsec1">
        <h1 className="paral__text display-3 text-center restaurant-title restaurant-wrapper">
          Authentic Thai Cuisine
        </h1>

        <p className="paral__text lead">
          <Link className="footer__link" to="/menu">
            <button className="btn btn-rounded btn-outline-dark">
              {" "}
              See Our Menu{" "}
            </button>
          </Link>
        </p>
      </div>
      <div className="row paral-wrapper">
        <div className="col-12">
          <img
            className="image-h-250 image-rounded centered-and-cropped"
            src="https://i.imgur.com/KtymcFGl.jpg"
            alt="Thai restaurant in Kansas City area"
          />
          <p className="p-article ">
            Dine on authentic flavorful cuisine at Mali Thai Bistro, guests can
            start with popular appetizers like tiger cry beef, Mali Thai wings
            and Mali Thai rolls, which are spring rolls packed with colorful
            vegetables and cream cheese. A selection of traditional Thai soups,
            salads, and vegetarian options are also available with the rest of
            the menu flavorful fried rice dishes, stir-frys, noodles and curries
            all available in four levels: mild * , medium ** , hot *** , and
            Thai hot ****.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
