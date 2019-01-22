import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <h1 className="text-center restaurant-title restaurant-wrapper">
            Mali Thai Bistro
          </h1>
        </div>
      </div>

      <div className="jumbotron paral paralsec">
        <h1 className="display-3 text-center restaurant-title restaurant-wrapper">
          Mali Thai Bistro
        </h1>

        <p className="lead">
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
      <div className="row">
        <div className="col-12 ">
          <p className="p-article restaurant-wrapper">
            Founded in 2015, Mali Thai Bistro is family-owned restaurant and
            offers a variety of Thai dishes from several regions of Thailand
            prepared with traditional ingredients. We features a full service
            bar that offers craft beer, cocktails and other libations. Mali Thai
            Bistro caters private events and provides carry-out for individuals
            wanting their meals to go.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
