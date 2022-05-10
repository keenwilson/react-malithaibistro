import React from 'react'

const HouseFavorites = () => {
  return (
    <div className="container">
      <h2 className="heading-title text-center underline-60">
        House Favorites
      </h2>
      <div className="row">
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">Pad Ka Prao</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> 12.99 Chicken, Pork, or Tofu |
            $15.99 Beef or Shrimp | $17.99 Seafood
          </p>
          <p className="menu-item__price lunch-dinner">
            <span className="dinner">Dinner</span> $13.99 Chicken, Pork, or Tofu
            | $17.99 Beef or Shrimp | $19.99 Seafood
          </p>
          <p className="menu-item__description">
            Stir-fried meat with sweet basil leaves, fresh chili and garlic.
            Served over rice with a pan fried egg.
          </p>

          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/V4oDBCbl.jpg"
              alt="Mali Thai Bistro - Pad Ka Prao"
            />
          </figure>
          <p className="menu-item__caption">Pad Ka Prao</p>

          <h2 className="menu-item__title">Labb Isaan</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span>/
            <span className="dinner">Dinner</span>
            $13.99 Chicken, Pork, or Tofu | $15.99 Beef or Shrimp | $19.99
            Seafood
          </p>
          <p className="menu-item__description">
            Traditional north eastern dish of finely chopped chicken, pork or
            beef mixed together with ground roasted rice, coriander and chili.
          </p>
          <figure className="image">
            <img
              id="pad-ka-pao"
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/DOFo6tHl.jpg"
              alt="Mali Thai Bistro - Laab Isaan"
            />
          </figure>
          <p className="menu-item__caption">Laab Isaan</p>
          <h2 className="menu-item__title">Papaya Salad</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span>/
            <span className="dinner">Dinner</span>
            $15.99
          </p>

          <p className="menu-item__description">
            Freshly shredded papaya complemented by tomatoes, garlic, chilies
            and roasted peanuts. Made in a tangy fish sauce or vegetarian sweet
            sauce. Served with sticky rice.
          </p>
        </div>
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

          <h2 className="menu-item__title">Panang Curry</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span>/
            <span className="dinner">Dinner</span> With mix vegetables $13.99 |
            With mix vegetables and tofu $14.99 | With mix vegetables, add
            Chicken or Pork $17.99 | With mix vegetables, add Beef or Shrimp
            $18.99 | With mix vegetables, add Seafood $22.99
          </p>
          <p className="menu-item__description">
            Our most popular curry. Our delicious coconut milk and peanut panang
            sauce garnished with kaffir lime leaves.
          </p>
          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/sd7p5Inl.jpg"
              alt="Mali Thai Bistro - Panang Curry with Tofu"
            />
          </figure>
          <p className="menu-item__caption">Panang Curry with Tofu</p>

          <h2 className="menu-item__title">Mali Thai Catfish</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $15.99 |{' '}
            <span className="dinner">Dinner</span>
            $19.99
          </p>
          <p className="menu-item__description">
            Two crispy catfish fillets served over a bed of steamed vegetables
            and covered in your choice of one of our three signature sauces.
            Sweet and spicy sam rod sauces, thai basil sauce or our stir-fried
            red curry sauce.
          </p>
          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/bCNNjlol.png"
              alt="Mali Thai Bistro - Mali Thai Catfish"
            />
          </figure>
          <p className="menu-item__caption">Mali Thai Catfish</p>
        </div>
      </div>
    </div>
  )
}

export default HouseFavorites
