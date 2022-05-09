import React from 'react'

const Noodles = () => {
  return (
    <div className="container">
      <h2 className="heading-title text-center underline-60">Noodles</h2>
      <div className="row">
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">Pad Thai</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $12.99 Chicken, Pork, or Tofu |
            $15.99 Beef or Shrimp | $17.99 Seafood
          </p>
          <p className="menu-item__price lunch-dinner">
            <span className="dinner">Dinner</span> $14.99 Chicken, Pork, or Tofu
            | $17.99 Beef or Shrimp | $19.99 Seafood
          </p>

          <p className="menu-item__description">
            Famous rice noodle dish stir-fried with meat or TOFU, egg, bean
            sprouts, spring onion and cabbages with added tamarind sauce for a
            tangy after taste. Served with ground peanuts.
          </p>

          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/FVJDGCXl.jpg"
              alt="Mali Thai Bistro - Pad Thai"
            />
          </figure>
          <p className="menu-item__caption">Pad Thai with Seafood</p>

          <h2 className="menu-item__title">Pad Sew Eaew</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $12.99 Chicken, Pork, or Tofu |
            $15.99 Beef or Shrimp | $17.99 Seafood
          </p>
          <p className="menu-item__price lunch-dinner">
            <span className="dinner">Dinner</span> $14.99 Chicken, Pork, or Tofu
            | $17.99 Beef or Shrimp | $19.99 Seafood
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

          <h2 className="menu-item__title">Pad Key Maw</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $12.99 Chicken, Pork, or Tofu |
            $15.99 Beef or Shrimp | $17.99 Seafood
          </p>
          <p className="menu-item__price lunch-dinner">
            <span className="dinner">Dinner</span> $14.99 Chicken, Pork, or Tofu
            | $17.99 Beef or Shrimp | $19.99 Seafood
          </p>

          <p className="menu-item__description">
            A spicy noodle dish, stir-fried flat noodles with fresh chili,
            garlic, bell pepper, and basil leaves.
          </p>
        </div>
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">Pad Woon Sen</h2>

          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $12.99 Chicken, Pork, or Tofu |
            $15.99 Beef or Shrimp | $17.99 Seafood
          </p>
          <p className="menu-item__price lunch-dinner">
            <span className="dinner">Dinner</span> $14.99 Chicken, Pork, or Tofu
            | $17.99 Beef or Shrimp | $19.99 Seafood
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
          <h2 className="menu-item__title">Rad Na Taley (House Favorite)</h2>
          <p className="menu-item__price">$19.99</p>
          <p className="menu-item__description">
            Wide rice noodles with vegetables and seafood, stir-fried in a dark
            soy sauce and covered with a thick, savory sauce. A favorite lunch
            item in Thailand.
          </p>
          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/HNcIaXFl.jpg"
              alt="Mali Thai Bistro - Rad Na Taley"
            />
          </figure>
          <p className="menu-item__caption">Mee Krob Rad Na Taley</p>
        </div>
      </div>
    </div>
  )
}

export default Noodles
