import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="hero-body">
      <div className="container">
        <div className="columns is-multiline is-mobile">
          <div className="column is-12-mobile is-6-tablet is-offset-3-tablet center">
            <h1 className="heading-title has-text-centered">Our Story</h1>
          </div>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-vertical is-6">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child">
                  <p classNames="heading-subtitle">
                    Mali Thai Bistro is family-owned. Chef Nutnisa,pronounced
                    "Nut-Neesa", Hoffman is from northeast Thailand. She grew up
                    in a family where cooking was a passion. Her brothers and
                    sisters all learned to cook from their mother and father.
                    They learned recipes handed down from
                    generation-to-generation. This passion for cooking led each
                    of Chef Nutnisa's older sisters to open restaurants in
                    Thailand, one in Bangkok and one on the island Koh Samui.
                  </p>
                </article>
                <article class="tile is-child">
                  <figure className="image">
                    <img
                      className="image-rounded centered-and-cropped"
                      src="/images/img-staff-sawasdee.jpg"
                      alt="Mali Thai Bistro - Servers offer extraordinary hospitality"
                    />
                  </figure>
                </article>
              </div>
            </div>
          </div>

          <div class="tile is-parent">
            <article class="tile is-child">
              <figure className="image is-4by3">
                <img
                  className="image-rounded centered-and-cropped"
                  src="/images/img-teammembers.jpg"
                  alt="Mali Thai Bistro - Dressing up in Thai traditional costume"
                />
              </figure>
              <p className="heading-subtitle">
                Dream of owning her own restaurant came true in June 2015 when
                Doug and Nutnisa Hoffman opened the Mali Thai Bistro, located
                right off Highway 291 North, just north of Lee's Summit
                HighSchool. Mali Thai Bistro was named in honor of Chef
                Nutnisa’s mother, with Mali being the name of a jasmine flower
                that she loved.
              </p>
            </article>
          </div>
        </div>

        <div className="columns">
          <div className="column is-12-mobile is-8-tablet is-offset-2-tablet center">
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child" />
              </div>

              <div className="tile is-parent">
                <article className="tile is-child" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
