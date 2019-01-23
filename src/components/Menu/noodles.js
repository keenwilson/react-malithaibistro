import React from "react";

const Noodles = () => {
  return (
    <div className="container">
      <h2 className="heading-title text-center underline-60">Noodles</h2>
      <div className="row">
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">31. Pad Sew Eaew</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $9.95 Chicken, Pork, or Tofu |
            $12.95 Beef or Shrimp | $13.95 Seafood
          </p>
          <p className="menu-item__price lunch-dinner">
            <span className="dinner">Dinner</span> $11.95 Chicken, Pork, or Tofu
            | $14.95 Beef or Shrimp | $18.95 Seafood
          </p>
          <p className="menu-item__description">
            Stir-fried flat noodles in dark, rich and sweet soy sauce with
            broccoli and Gai lan.
          </p>

          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/QHoMNLol.jpg"
              alt="Mali Thai Bistro - Pad See Ew"
            />
          </figure>
          <p className="menu-item__caption">Pad See Ew</p>

          <h2 className="menu-item__title">32. Pad Key Maw</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $9.95 Chicken, Pork, or Tofu |
            $12.95 Beef or Shrimp | $13.95 Seafood
          </p>
          <p className="menu-item__price lunch-dinner">
            <span className="dinner">Dinner</span> $11.95 Chicken, Pork, or Tofu
            | $14.95 Beef or Shrimp | $18.95 Seafood
          </p>

          <p className="menu-item__description">
            A spicy noodle dish, stir-fried flat noodles with fresh chili,
            garlic, bell pepper, and basil leaves.
          </p>
        </div>
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">33. Pad Woon Sen</h2>

          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $9.95 Chicken, Pork, or Tofu |
            $12.95 Beef or Shrimp | $13.95 Seafood
          </p>
          <p className="menu-item__price lunch-dinner">
            <span className="dinner">Dinner</span> $13.95 Chicken, Pork, or Tofu
            | $14.95 Beef or Shrimp | $18.95 Seafood
          </p>
          <p className="menu-item__description">
            Stir-fried glass noodle with meats or tofu, bean sprouts, spring
            onion and cabbage.
          </p>
          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/X46B00Ml.jpg"
              alt="Mali Thai Bistro - Pad Woon Sen"
            />
          </figure>
          <p className="menu-item__caption">Pad Woon Sen with Chicken</p>
        </div>
      </div>
    </div>
  );
};

export default Noodles;
