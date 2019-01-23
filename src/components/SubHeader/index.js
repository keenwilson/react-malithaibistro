import React from "react";
import "./style.css";

const NavBar = () => {
  return (
    <aside className="promo-bar sub-header has-background-gradients w-100 d-flex justify-content-center align-items-center">
      <div className="align-middle text-center">
        <div className="sub-header__text mx-auto text-center">
          <span>
            Reserve Your Table at{" "}
            <a className="sub_header__link" href="tel:+1-816-944-4119">
              (816) 944-4119
            </a>
          </span>
        </div>
      </div>
    </aside>
  );
};

export default NavBar;
