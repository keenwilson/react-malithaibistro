import React from "react";
import { Link } from "react-router-dom";
const MenuHome = () => {
  return (
    <div className="container">
      <div className="row paral-wrapper">
        <div className="col-12 col-md-8">
          <img
            className="image-128x128 image-rounded centered-and-cropped"
            src="/images/img-food-tomyum-pot.jpg"
            alt="Mali Thai Bistro - Tom Yum (Pot)"
          />
          <img
            className="image-128x128 image-rounded centered-and-cropped"
            src="/images/img-food-crispy-tofu.jpg"
            alt="Mali Thai Bistro - Crispy Tofu"
          />
          <img
            className="image-128x128 image-rounded centered-and-cropped"
            src="/images/img-food-crab-fried-rice.jpg"
            alt="Mali Thai Bistro - Crab Fried Rice"
          />
          <img
            className="image-128x128 image-rounded centered-and-cropped"
            src="/images/img-food-tomkha-soup-pot.jpg"
            alt="Mali Thai Bistro - Tom Kha Soup"
          />
          <img
            className="image-128x128 image-rounded centered-and-cropped"
            src="/images/img-food-pad-see-ew.jpg"
            alt="Mali Thai Bistro - Pad See Ew"
          />
          <p className="p-article ">
            Dine on authentic flavorful cuisine at Mali Thai Bistro, guests can
            start with popular appetizers like tiger cry beef, Mali Thai wings
            and Mali Thai rolls, which are spring rolls packed with colorful
            vegetables and cream cheese. A selection of traditional Thai soups,
            salads, and vegetarian options are also available with the rest of
            the menu flavorful fried rice dishes, stir-frys, noodles and curries
            all available in mild * , medium ** , hot *** , and Thai hot **** .
          </p>
        </div>
        <div className="col-12 col-md-4">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p className="menu-list__subtitle">Category</p>
            </li>
            <li className="list-group-item">
              <Link to="/menu/drinks" className="menu-list__link">
                Drinks
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/menu/appetizers" className="menu-list__link">
                Appetizers
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/menu/housefavorites" className="menu-list__link">
                House Favorites
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/menu/chefsrecommendations" className="menu-list__link">
                Chef's Recommendations
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/menu/fromthewok" className="menu-list__link">
                From The Wok
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/menu/soupssalads" className="menu-list__link">
                Soups & Salads
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/menu/noodles" className="menu-list__link">
                Noodles
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/menu/curries" className="menu-list__link">
                Curries
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/menu/desserts" className="menu-list__link">
                Desserts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuHome;
