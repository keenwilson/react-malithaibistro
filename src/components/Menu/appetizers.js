import React from "react";

const Appetizers = () => {
  return (
    <div className="container">
      <h2 className="heading-title text-center underline-60">Appetizers</h2>
      <div className="row">
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">1. Crab Rangoon (8 Pcs)</h2>
          <p className="menu-item__price">$6.95</p>
          <p className="menu-item__description">
            Fried wonton wrapped and filled with blend of cream-cheese,
            imitation crab meat and garlic flavored seasoning served with
            homemade sweet chili sauce.
          </p>

          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/UtML05Rl.jpg"
              alt="Mali Thai Bistro - Crab Rangoon"
            />
          </figure>
          <p className="menu-item__caption">Crab Rangoon</p>

          <h2 className="menu-item__title">2. Chicken Satay (4 Skewers)</h2>
          <p className="menu-item__price">$8.95</p>
          <p className="menu-item__description">
            Skewers of tender marinated chicken barbecued over charcoal and
            served with peanut sauce and cucumber dip.
          </p>

          <h2 className="menu-item__title">3. Crispy Sping Roll (3 Pcs)</h2>
          <p className="menu-item__price">$6.95</p>
          <p className="menu-item__description">
            Deep fried spring rolls stuff with minced chicken or only
            vegetables, egg, glass noodle and mixed vegetable, served with
            homemade sweet chili sauce.
          </p>

          <h2 className="menu-item__title">4. Soft Sping Roll (3 Pcs)</h2>
          <p className="menu-item__price">$6.95</p>
          <p className="menu-item__description">
            Fresh spring rolls made with chicken or only vegetables, noodles,
            bean sprouts, and lettuce wrapped in rice paper. Served with sweet
            chili sauce and crushed roasted peanuts.
          </p>

          <h2 className="menu-item__title">5. Mali Thai Roll (3 Pcs)</h2>
          <p className="menu-item__price">$8.95</p>
          <p className="menu-item__description">
            Crab meat, cream-cheese, cucumber, green leaf lettuce, bean sprout,
            and carrot wrapped in rice paper served with sweet chili sauce and
            crushed roasted peanuts.
          </p>

          <h2 className="menu-item__title">6. Tiger Cry Beef</h2>
          <p className="menu-item__price">$8.95</p>
          <p className="menu-item__description">
            Spicy dish of grilled sirloin of beef, thinly sliced and marinated
            with a hint of garlic, black pepper, garnished with cabbage and
            served with spicy chili homemade sauce.{" "}
          </p>
        </div>
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">7. Crispy Tofu</h2>
          <p className="menu-item__price">$7.95</p>
          <p className="menu-item__description">
            Delicately fried, and complemented with a homemade chili sauce.{" "}
          </p>

          <figure className="image">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/JtCgH8Zl.jpg"
              alt="Mali Thai Bistro - Crispy Tofu"
            />
          </figure>
          <p className="menu-item__caption">Crispy Tofu</p>

          <h2 className="menu-item__title">8. Golden Calamari</h2>
          <p className="menu-item__price">$8.95</p>
          <p className="menu-item__description">
            Crispy tempura style calamari with a hint of spices and green
            onions. Served with sriracha dipping sauce.{" "}
          </p>

          <figure className="image">
            <img
              className="image-50 image-rounded centered-and-cropped"
              src="https://i.imgur.com/56W8Md4l.jpg"
              alt="Mali Thai Bistro - Golden Calamari"
            />
          </figure>
          <p className="menu-item__caption">Golden Calamari</p>
          <h2 className="menu-item__title">9. Mali Thai Wings</h2>
          <p className="menu-item__price">$8.95</p>

          <p className="menu-item__description">
            Marinated in a spicy garlic sauce with fresh basil. Deep fried to
            perfection.
          </p>

          <h2 className="menu-item__title">10. Spring Roll Deluxe</h2>
          <p className="menu-item__price">$8.95</p>
          <p className="menu-item__description">
            Two of our soft spring rolls and two of our crispy spring rolls.
          </p>

          <h2 className="menu-item__title">11. Mali Thai Platter</h2>
          <p className="menu-item__price">$10.95</p>
          <p className="menu-item__description">
            A delicious of Thai mixed appetizers with Crab Rangoon (4 Pcs), Soft
            Spring Roll (2 Pcs) and Crispy Spring roll (2 Pcs)
          </p>

          <h2 className="menu-item__title">12. Edamame</h2>
          <p className="menu-item__price">$5.95</p>
          <p className="menu-item__description">
            Lightly salted and steamed soy beans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appetizers;
