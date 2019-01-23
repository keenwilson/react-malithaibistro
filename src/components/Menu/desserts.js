import React from "react";

const Desserts = () => {
  return (
    <div className="container">
      <h2 className="heading-title text-center underline-60">Desserts</h2>
      <div className="row">
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">Sweet Mango Sticky Rice</h2>
          <p className="menu-item__price ">$7.00</p>
          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/BrFaCVHl.jpg"
              alt="Mali Thai Bistro - Mango Sticky Rice"
            />
          </figure>
          <p className="menu-item__caption">Sweet Mango Sticky Rice</p>
        </div>
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">Coconut Ice Cream</h2>
          <p className="menu-item__price ">$3.50</p>
          <h2 className="menu-item__title">Mango Ice Cream</h2>
          <p className="menu-item__price ">$3.50</p>
          <h2 className="menu-item__title">Taro Ice Cream</h2>
          <p className="menu-item__price ">$3.50</p>
          <h2 className="menu-item__title">Fried Banana With Ice Cream</h2>
          <p className="menu-item__price ">$5.50</p>
        </div>
      </div>
    </div>
  );
};

export default Desserts;
