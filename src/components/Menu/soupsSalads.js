import React from 'react'

const SoupsSalads = () => {
  return (
    <div className="container">
      <h2 className="heading-title text-center underline-60">Soups & Salads</h2>
      <div className="row">
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">Thai Noodle Soup</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $12.99 Chicken, Pork, or Tofu |
            $14.99 Beef or Shrimp | $7.99 Seafood
          </p>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="dinner">Dinner</span> $13.99 Chicken, Pork, or Tofu
            | $15.99 Beef or Shrimp | $19.99 Seafood
          </p>
          <p className="menu-item__description">
            Rice noodles and vegetables in a savory broth.
          </p>

          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/T06AlIul.jpg"
              alt="Mali Thai Bistro - Thai Noodle Soup Shrimp"
            />
          </figure>
          <p className="menu-item__caption">Thai Noodle Soup with Shrimp</p>

          <h2 className="menu-item__title">Tom Yum Soup</h2>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="bowl">Bowl</span> $10.99 Chicken, Pork, or Tofu |
            $13.99 Beef or Shrimp | $16.99 Seafood |{' '}
            <span className="pot">Pot</span> $15.99 Chicken, Pork, or Tofu |
            $17.99 Beef or Shrimp | $19.99 Seafood
          </p>

          <p className="menu-item__description">
            A signature Thai soup of straw mushrooms, fresh chilies, kaffir
            leaves, lemongrass, galangal, and a splash of lime juice. Served in
            a spicy broth and topped with a hint of cilantro and spring onions.
          </p>

          <figure className="image">
            <img
              className="image-50 image-rounded centered-and-cropped"
              src="https://i.imgur.com/1ezdXZZl.jpg"
              alt="Mali Thai Bistro - Tom Yum (Pot)"
            />
          </figure>
          <p className="menu-item__caption">Tom Yum (Pot)</p>
          <h2 className="menu-item__title">Tom Kha Soup</h2>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="bowl">Bowl</span> $10.99 Chicken, Pork, or Tofu |
            $13.99 Beef or Shrimp | $16.99 Seafood |{' '}
            <span className="pot">Pot</span> $15.99 Chicken, Pork, or Tofu |
            $17.99 Beef or Shrimp | $19.99 Seafood
          </p>
          <p className="menu-item__description">
            A rich coconut milk broth flavored with lemongrass, kaffir leaves,
            fresh chilies, galangal, and sprinkled with cilantro and spring
            onions.
          </p>

          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/2VZDiCml.jpg"
              alt="Mali Thai Bistro - Tom Kha Soup"
            />
          </figure>
          <p className="menu-item__caption">Tom Kha Soup (Pot)</p>
        </div>
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">Koh Samui Salad</h2>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="lunch">Lunch</span>/
            <span className="dinner">Dinner</span>
            $17.99
          </p>
          <p className="menu-item__description">
            Deep fried green papaya, carrot and prawn mixed with homemade sweet
            and sour sauce, tomatoes and peanuts. Served with sticky rice.
          </p>

          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/BALDIRAl.jpg"
              alt="Mali Thai Bistro - Koh Samui Salad"
            />
          </figure>
          <p className="menu-item__caption">Koh Samui Salad</p>
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
          <h2 className="menu-item__title">Yum Woon Sen</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span>/
            <span className="dinner">Dinner</span> $13.99 Chicken, Pork, or Tofu
            | $15.99 Beef or Shrimp | $19.99 Seafood
          </p>

          <p className="menu-item__description">
            A traditional spicy Thai salad where the meat or Tofu are first
            cooked then tossed together with glass noodles, shallots, tomatoes,
            celery and cilantro.
          </p>

          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/XRG0wjbl.jpg"
              alt="Mali Thai Bistro - Yum Woon Sen Shrimp"
            />
          </figure>
          <p className="menu-item__caption">Yum Woon Sen with Shrimp</p>
        </div>
      </div>
    </div>
  )
}

export default SoupsSalads
