import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="heading-title text-center">Contact & Hours</h1>
          <h2 className="heading-subtitle text-center">
            Mali Thai Bistro in Lee's Summit, MO
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <h1 className="text-center">
            <a className="contact-title__link" href="tel:+1-816-944-4119">
              <i className="fas fa-phone" /> (816) 944-4119
            </a>
          </h1>
          <p className="text-center contact-title__link">
            <i className="fas fa-map-marker-alt" /> 579 SE Melody Ln, Lee's
            Summit, MO 64063
          </p>
          <a
            className="contact-title__link "
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/dir//38.9076608,-94.3618176/@38.9076608,-94.3618176,16z&key=AIzaSyCBgzttPuckRdtrY2a5pDtYLuGgbZH1kUw"
          >
            <p className="text-center contact-title__link">
              <i className="fas fa-directions" /> Get Directions on Google Maps
            </p>
          </a>
          <div className="text-center google-maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.713727647188!2d-94.36400138493715!3d38.90766127956916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c11f86d983b907%3A0x3bd9180212768102!2sMali+Thai+Bistro!5e0!3m2!1sen!2sus!4v1539913871180"
              width="518"
              height="350"
              frameborder="0"
              allowfullscreen
              title="google"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img
            id="mali-thai-bistro-front"
            className="image-75 image-rounded centered-and-cropped my-3"
            src="/images/img-restaurant-front.jpg"
            alt="Mali Thai Bistro - Lee's Summit"
          />
          <h2 className="heading-subtitle text-center">Opens</h2>
          <p className="text-center contact-title__link">
            Monday - Thursday : 11 AM - 9 PM
          </p>
          <p className=" text-center contact-title__link">
            Friday - Saturday : 11 AM - 10 PM
          </p>
          <p className="text-center contact-title__link">
            Sunday : 12 PM - 8 PM
          </p>
          <p className="heading-subtitle text-center">
            We are closed for the following days:
          </p>
          <p className=" text-center contact-title__link">
            Thursday 11/28/2019 (Thanksgiving Day)
          </p>
          <p className="text-center contact-title__link">
            Wednesday 12/25/2019 (Christmas Day)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;