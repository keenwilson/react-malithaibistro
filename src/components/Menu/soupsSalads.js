import React from "react";

const SoupsSalads = () => {
  return (
    <div className="container">
      <h2 className="heading-title text-center underline-60">Soups & Salads</h2>
      <div className="row">
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">22. Thai Noodle Soup</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $9.95 Chicken, Pork, or Tofu |
            $12.95 Beef or Shrimp | $13.95 Seafood
          </p>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="dinner">Dinner</span> $11.95 Chicken, Pork, or Tofu
            | $14.95 Beef or Shrimp | $18.95 Seafood
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

          <h2 className="menu-item__title">23. Tom Yum Soup</h2>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="bowl">Bowl</span> $6.95 (Seafood $8.95) |{" "}
            <span className="pot">Pot</span> $10.95 (Seafood $18.95)
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
          <h2 className="menu-item__title">24. Tom Kha Soup</h2>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="bowl">Bowl</span> $6.95 (Seafood $8.95) |{" "}
            <span className="pot">Pot</span> $10.95 (Seafood $18.95)
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
          <h2 className="menu-item__title">25. Yum Woon Sen</h2>
          <p className="menu-item__price lunch-dinner">
            <span className="lunch">Lunch</span> $9.95 Chicken, Pork, or Tofu |
            $12.95 Beef or Shrimp | $13.95 Seafood
          </p>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="dinner">Dinner</span> $11.95 Chicken, Pork, or Tofu
            | $14.95 Beef or Shrimp | $18.95 Seafood
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
          <h2 className="menu-item__title">27. Koh Samui Salad</h2>
          <p className="menu-item__price lunch-dinner end-menu-item">
            <span className="lunch">Lunch</span>/
            <span className="dinner">Dinner</span>
            $12.95
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
        </div>
      </div>
    </div>
  );
};

export default SoupsSalads;
