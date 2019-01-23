import React from "react";

const Wisdom = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="heading-title text-center">Thai Wisdom</h1>
          <h2 className="heading-subtitle text-center">Herbs & Spices</h2>
          <p className="p-article text-center">
            Many herbs and spices used in Thai cuisine have beneficial medicinal
            properties.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <h3 className="menu-item__title">Chilli</h3>
          <p className="menu-item__price">"Phrik" in Thai</p>
          <p className="menu-item__description">
            Chilli is an erect, branched, shrub-like herb with fruits used as
            garnishing and flavouring in Thai dishes. There are many different
            species. All contain capsaicin, a biologically active ingredient
            beneficial to the respiratory system, blood pressure and heart.
            Other therapeutic uses include being a stomachic, carminative and
            antiflatulence agent, and digest.
          </p>
          <h3 className="menu-item__title pl-2 text-center">
            Locally Grown with Love
          </h3>
          <div class="d-flex flex-wrap justify-content-center">
            {" "}
            <img
              className="image-128x128 image-rounded centered-and-cropped"
              src="https://i.imgur.com/ABxCHrVm.jpg"
              alt="Thai Chilli"
            />
            <img
              className="image-128x128 image-rounded centered-and-cropped"
              src="https://i.imgur.com/ClPHP90m.jpg"
              alt="Thai Chilli"
            />
            <img
              className="image-128x128 image-rounded centered-and-cropped"
              src="https://i.imgur.com/mrbCxpdm.jpg"
              alt="Thai Chilli"
            />
            <img
              className="image-128x128 image-rounded centered-and-cropped"
              src="https://i.imgur.com/oXE3n7vm.jpg"
              alt="Thai Chilli"
            />
            <img
              className="image-128x128 image-rounded centered-and-cropped"
              src="https://i.imgur.com/kELzYLxm.jpg"
              alt="Thai Chilli"
            />
            <img
              className="image-128x128 image-rounded centered-and-cropped"
              src="https://i.imgur.com/LnYEjfMm.jpg"
              alt="Thai Chilli"
            />
          </div>
          <p className="menu-item__description">
            Chef Nutnisa and her parents plant and harvest Thai Chilli Peppers
            at the family's garden in Lee's Summit, Missouri where the chilli
            receives plenty of light and heat.
          </p>

          <h3 className="menu-item__title">Lemon Grass</h3>
          <p className="menu-item__price">"Ta-khrai" in Thai</p>
          <p className="menu-item__description">
            A common ingredient in Thai cooking, lemongrass provides a zesty
            lemon flavor and aroma to many Thai dishes. This erect annual plant
            resembles a coarse grey-green grass. Fresh leaves and grass are used
            as a flavouring. Lemongrass contains 0.2-0.4 % volatile oil.
            Therapeutic properties are as a diuretic, emmanagogue,
            antiflatulence, antiflu and antimicrobial agent.
          </p>
          <div className="card-content mb-5">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/gIuf7PDm.jpg"
              alt="Chopped lemongrass"
            />
            <p className="p-caption mt-2">
              Lemongrass gives a zesty lemon flavor and aroma to many Thai
              dishes.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h3 className="menu-item__title">Kaffir Lime</h3>
          <p className="menu-item__price">"Ma-krut" in Thai</p>
          <p className="menu-item__description">
            The leaves, peel and juice of the Kaffir Lime are used as a
            flavouring in Thai cuisine. The leaves and peel contain volatile
            oil. The major therapeutic benefit of the juice is as an appetizer.
            Think of kaffir lime leaves as the Asian equivalent to bay leaves.
            They can be added whole to Thai curries, soups, and stir-fries (and
            removed before eating the dish), and can also be cut up into very
            thin slivers and added to spice pastes, or used as a topping for
            many recipes.
          </p>
          <div className="card-content mb-5">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/gntejibm.jpg"
              alt="Kaffir lime leaves"
            />
            <p className="p-caption mt-2">
              Kaffir Lime is the Asian eqivalent to bay leaves.
            </p>
          </div>
          <h3 className="menu-item__title">Thai Holy Basil</h3>
          <p className="menu-item__price">"Ka Prao" in Thai</p>
          <p className="menu-item__description">
            Holy Basil or Sacred Basil is an annual herbaceous plant that
            resembles Sweet Basil but has narrower and oftentimes reddish-purple
            leaves. The fresh leaves, which are used as a flavouring, contain
            approximately 0.5 % volatile oil, which exhibits antimicrobial
            activity, specifically as a carminative, diaphoretic, expectorant
            and stomachic.
          </p>
          <div className="card-content mb-5">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/zhNqxVYm.jpg"
              alt="Bai Ka Prao (Thai Holy Basil)"
            />
            <p className="p-caption mt-2">
              Bai Ka Prao (Thai Holy Basil) is used in "Pad Ka Prao", one of
              staple dishes in Thailand.
            </p>
          </div>
          <h3 className="menu-item__title">Garlic</h3>
          <p className="menu-item__price">"Kra Thiam" in Thai</p>
          <p className="menu-item__description">
            Garlic is an annual herbaceous plant with underground bulbs
            comprising several cloves. Dried mature bulbs are used as
            aflavouring and condiment in Thai cuisine. The bulbs contain 0.1 to
            0.36 % garlic oil and organic sulfur compounds. Therapeutic use are
            as antimicrobial, diaphoretic, diuretic, expectorant, antiflatulence
            and cholesterol lowering agents.
          </p>
          <div className="card-content mb-5">
            <img
              className="image-75 image-rounded centered-and-cropped"
              src="https://i.imgur.com/Sdf4Q81m.jpg"
              alt="Garlic"
            />
            <p className="p-caption mt-2">
              Garlic is one of main ingredients in our "From the Wok" menu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wisdom;
