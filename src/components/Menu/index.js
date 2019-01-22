import React from "react";
import { Route, Link } from "react-router-dom";
import Drinks from "./drinks";
import Appetizers from "./appetizers";
import HouseFavorites from "./houseFavorites";
import ChefsRecommendations from "./chefsRecommendations";
import FromTheWok from "./fromTheWok";
import SoupsSalads from "./soupsSalads";
import Noodles from "./noodles";
import Curries from "./curries";
import Desserts from "./desserts";
import "./style.css";

const Menu = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="heading-title text-center">Menu</h1>
          <h2 className="heading-subtitle text-center">
            Mali Thai Bistro in Lee's Summit, MO
          </h2>
          <div className="d-flex justify-content-center">
            <ul className="list-inline">
              <li className="list-inline-item menu-list__item">
                <Link to="/menu/drinks" className="menu-list__link">
                  Drinks
                </Link>
              </li>
              <li className="list-inline-item menu-list__item">
                <Link to="/menu/appetizers" className="menu-list__link">
                  Appetizers
                </Link>
              </li>
              <li className="list-inline-item menu-list__item">
                <Link to="/menu/housefavorites" className="menu-list__link">
                  House Favorites
                </Link>
              </li>
              <li className="list-inline-item menu-list__item">
                <Link
                  to="/menu/chefsrecommendations"
                  className="menu-list__link"
                >
                  Chef's Recommendations
                </Link>
              </li>
              <li className="list-inline-item menu-list__item">
                <Link to="/menu/fromthewok" className="menu-list__link">
                  From The Wok
                </Link>
              </li>
              <li className="list-inline-item menu-list__item">
                <Link to="/menu/soupssalads" className="menu-list__link">
                  Soups & Salads
                </Link>
              </li>
              <li className="list-inline-item menu-list__item">
                <Link to="/menu/noodles" className="menu-list__link">
                  Noodles
                </Link>
              </li>
              <li className="list-inline-item menu-list__item">
                <Link to="/menu/curries" className="menu-list__link">
                  Curries
                </Link>
              </li>
              <li className="list-inline-item menu-list__item">
                <Link to="/menu/desserts" className="menu-list__link">
                  Desserts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <Route path={"/menu/drinks"} component={Drinks} />
        <Route path={"/menu/appetizers"} component={Appetizers} />
        <Route path={"/menu/housefavorites"} component={HouseFavorites} />
        <Route
          path={"/menu/chefsrecommendations"}
          component={ChefsRecommendations}
        />
        <Route path={"/menu/fromthewok"} component={FromTheWok} />
        <Route path={"/menu/soupssalads"} component={SoupsSalads} />
        <Route path={"/menu/noodles"} component={Noodles} />
        <Route path={"/menu/curries"} component={Curries} />
        <Route path={"/menu/desserts"} component={Desserts} />
      </div>
    </div>
  );
};

export default Menu;
