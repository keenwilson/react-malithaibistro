import React from 'react'

const ChefsRecommendations = () => {
  return (
    <div className="container">
      <h2 className="heading-title text-center underline-60">
        Chef's Recommendations
      </h2>
      <div className="row">
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">Fresh Shrimp Roll</h2>
          <p className="menu-item__price ">$9.99</p>

          <h2 className="menu-item__title">Lemongrass Beef</h2>
          <p className="menu-item__price">$12.99</p>
          <h2 className="menu-item__title">Pot Sticker (steam and pan fry)</h2>
          <p className="menu-item__price">$8.99</p>
        </div>
        <div className="col-12 col-md-6 menu-list__description">
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

export default ChefsRecommendations
