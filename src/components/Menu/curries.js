import React from "react";

const Curries = () => {
  return (
    <div className="container">
      <h2 className="heading-title text-center underline-60">Curries</h2>
      <div className="row">
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">34. Green Curry</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $9.95 Chicken, Pork, or Tofu |
            $12.95 Beef or Shrimp | $13.95 Seafood
          </p>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="dinner">Dinner</span> $11.95 Chicken, Pork, or Tofu
            | $14.95 Beef or Shrimp | $18.95 Seafood
          </p>
          <p className="menu-item__description">
            A well know medium hot Thai curry with meat or Tofu, egg plant,
            cooked in green curry paste and coconut milk, garnished with Thai
            basil leaves.{" "}
          </p>
          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="/images/img-food-green-curry.jpg"
              alt="Mali Thai Bistro - Green Curry"
            />
          </figure>
          <p className="menu-item__caption">Green Curry</p>
          <h2 className="menu-item__title">35. Red Curry</h2>

          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $9.95 Chicken, Pork, or Tofu |
            $12.95 Beef or Shrimp | $13.95 Seafood
          </p>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="dinner">Dinner</span> $11.95 Chicken, Pork, or Tofu
            | $14.95 Beef or Shrimp | $18.95 Seafood
          </p>
          <p className="menu-item__description">
            A medium hot Thai red curry dish with meat or Tofu and young bamboo
            shoot and bell pepper cooked in red curry paste and coconut milk,
            flavored with Thai basil leaves.
          </p>
        </div>
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">37. Gang Ka Ree</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $9.95 Chicken, Pork, or Tofu |
            $12.95 Beef or Shrimp | $13.95 Seafood
          </p>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="dinner">Dinner</span> $11.95 Chicken, Pork, or Tofu
            | $14.95 Beef or Shrimp | $18.95 Seafood
          </p>
          <p className="menu-item__description">
            Yellow curry powder with chunk potatoes, carrots, yellow onion, and
            topped with dry garlic.
          </p>

          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="/images/img-food-gang-ka-ree-chicken.jpg"
              alt="Mali Thai Bistro - Gang Ka Ree Chicken"
            />
          </figure>
          <p className="menu-item__caption">Gang Ka Ree with Chicken</p>

          <h2 className="menu-item__title">38. Gang Massaman</h2>

          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $9.95 Chicken, Pork, or Tofu |
            $12.95 Beef or Shrimp | $13.95 Seafood
          </p>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="dinner">Dinner</span> $11.95 Chicken, Pork, or Tofu
            | $14.95 Beef or Shrimp | $18.95 Seafood
          </p>
          <p className="menu-item__description">
            Traditional mild curry dish, meat or TOFU cooked slowly with
            potatoes, yellow onions and roasted peanuts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Curries;
