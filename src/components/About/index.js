import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="heading-title text-center">Our Story</h1>
          <h2 className="heading-subtitle text-center">
            Mali Thai Bistro in Lee's Summit, MO
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p className="p-article">
            Mali Thai Bistro is family-owned. Chef Nutnisa,pronounced
            "Nut-Neesa", Hoffman is from northeast Thailand. She grew up in a
            family where cooking was a passion. Her brothers and sisters all
            learned to cook from their mother and father. They learned recipes
            handed down from generation-to-generation. This passion for cooking
            led each of Chef Nutnisa's older sisters to open restaurants in
            Thailand, one in Bangkok and one on the island Koh Samui.
          </p>
          <div className="card-content mb-5">
            <img
              className="card-image image-250  image-rounded centered-and-cropped"
              src="https://i.imgur.com/FgKpO0Vl.jpg"
              alt="Mali Thai Bistro is founded by the Hoffman family"
            />
            <p className="p-caption mt-2">
              Mali Thai Bistro in Lee's Summit is founded by Doug and Nutnisa
              Hoffman in 2015.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <p className="p-article">
            Dream of owning her own restaurant came true in June 2015 when Doug
            and Nutnisa Hoffman opened the Mali Thai Bistro, located right off
            Highway 291 North, just north of Lee's Summit HighSchool. Mali Thai
            Bistro was named in honor of Chef Nutnisa’s mother, with Mali being
            the name of a jasmine flower that she loved.
          </p>
          <div className="card-content mb-5">
            <img
              className="card-image image-250 image-rounded centered-and-cropped"
              src="https://i.imgur.com/FwZKFzIl.jpg"
              alt="Mali Thai Bistro - Dressing up in Thai traditional costume"
            />
            <p className="p-caption mt-2">
              Chef Nutnisa and her parents enjoy the beautiful fall hues of
              gold, orange and red in Lee's Summit. MO.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
