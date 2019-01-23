import React from "react";

const Community = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="heading-title text-center">Our Community</h1>
          <h2 className="heading-subtitle text-center">
            Mali Thai Bistro in Lee's Summit, MO
          </h2>
          <p className="p-article text-center">
            We are proud to be a contributing member of Kansas City metropolitan
            area.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <h3 className="menu-item__title">We're Hair for Hope House</h3>

          <p className="menu-item__description">
            We are so grateful for the sponsors supporting "We're Hair for Hope
            House" hosted by Foundation4 Domestic Violence Prevention.
          </p>
          <p className="menu-item__description">
            Hope House's Mission is to break the cycle of domestic violence by
            providing safe refuge and supportive services that educate and
            empower those impacted by domestic violence.
          </p>
          <div className="card-content mb-5">
            <img
              className="image-212 image-rounded centered-and-cropped"
              src="/images/img-community-hope-house-1.jpg"
              alt="Hope House Donation"
            />
            <img
              className="image-212 image-rounded centered-and-cropped"
              src="/images/img-community-hope-house-3.jpg"
              alt="Hope House Donation"
            />
            <img
              className="image-212 image-rounded centered-and-cropped"
              src="/images/img-community-hope-house-4.jpg"
              alt="Hope House Donation"
            />
            <img
              className="image-212 image-rounded centered-and-cropped"
              src="/images/img-community-hope-house-5.jpg"
              alt="Hope House Donation"
            />
            <p className="p-caption mt-2">
              Mali Thai Bistro is proud to co-sponsor a local charity.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h3 className="menu-item__title">Asian Cultural Festival</h3>

          <p className="menu-item__description">
            Mali Thai Bistro is very proud to be selected to represent Thailand
            for the third year in the row at the Asian Cultural Festival
            organized by Mid-America Asian Cultural Association (MACAA).
          </p>

          <div className="card-content mb-5">
            <img
              className="image-212 image-rounded centered-and-cropped"
              src="/images/img-community-asian-fest-2.jpg"
              alt="Asian Cultural Festival"
            />
            <img
              className="image-212 image-rounded centered-and-cropped"
              src="/images/img-community-asian-fest-8.jpg"
              alt="Asian Cultural Festival"
            />
            <img
              className="image-212 image-rounded centered-and-cropped"
              src="/images/img-community-asian-fest-5.jpg"
              alt="Asian Cultural Festival"
            />
            <img
              className="image-212 image-rounded centered-and-cropped"
              src="/images/img-community-asian-fest-9.jpg"
              alt="Asian Cultural Festival"
            />
            <p className="p-caption mt-2">
              We love sharing our food and culture with everyone who attended.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
