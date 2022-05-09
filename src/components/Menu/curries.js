import React from 'react'

const Curries = () => {
  return (
    <div className="container">
      <h2 className="heading-title text-center underline-60">Curries</h2>
      <div className="row">
        <div className="col-12 col-md-6 menu-list__description">
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

          <h2 className="menu-item__title">Green Curry</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $12.99 Chicken, Pork, or Tofu |
            $15.99 Beef or Shrimp | 17.99 Seafood
          </p>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="dinner">Dinner</span> $13.99 Chicken, Pork, or Tofu
            | $7.99 Beef or Shrimp | $19.99 Seafood
          </p>
          <p className="menu-item__description">
            A well know medium hot Thai curry with meat or Tofu, egg plant,
            cooked in green curry paste and coconut milk, garnished with Thai
            basil leaves.{' '}
          </p>
          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/OSvtFzwl.jpg"
              alt="Mali Thai Bistro - Green Curry"
            />
          </figure>
          <p className="menu-item__caption">Green Curry</p>
        </div>
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">Red Curry</h2>

          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $12.99 Chicken, Pork, or Tofu |
            $15.99 Beef or Shrimp | 17.99 Seafood
          </p>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="dinner">Dinner</span> $13.99 Chicken, Pork, or Tofu
            | $7.99 Beef or Shrimp | $19.99 Seafood
          </p>
          <p className="menu-item__description">
            A medium hot Thai red curry dish with meat or Tofu and young bamboo
            shoot and bell pepper cooked in red curry paste and coconut milk,
            flavored with Thai basil leaves.
          </p>
          <figure className="image">
            <img
              className="image-50 image-rounded centered-and-cropped"
              src="https://i.imgur.com/v1n3t8Il.jpg"
              alt="Mali Thai Bistro - Red Curry"
            />
          </figure>
          <p className="menu-item__caption">Red Curry</p>
          <h2 className="menu-item__title">Gang Ka Ree</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $12.99 Chicken, Pork, or Tofu |
            $15.99 Beef or Shrimp | 17.99 Seafood
          </p>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="dinner">Dinner</span> $13.99 Chicken, Pork, or Tofu
            | $7.99 Beef or Shrimp | $19.99 Seafood
          </p>
          <p className="menu-item__description">
            Yellow curry powder with chunk potatoes, carrots, yellow onion, and
            topped with dry garlic.
          </p>

          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/s6SrDuwl.jpg"
              alt="Mali Thai Bistro - Gang Ka Ree Chicken"
            />
          </figure>
          <p className="menu-item__caption">Gang Ka Ree with Chicken</p>

          <h2 className="menu-item__title">Gang Massaman</h2>

          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $12.99 Chicken, Pork, or Tofu |
            $15.99 Beef or Shrimp | 17.99 Seafood
          </p>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="dinner">Dinner</span> $13.99 Chicken, Pork, or Tofu
            | $7.99 Beef or Shrimp | $19.99 Seafood
          </p>
          <p className="menu-item__description">
            Traditional mild curry dish, meat or TOFU cooked slowly with
            potatoes, yellow onions and roasted peanuts.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Curries
