import React from "react";

import ImageAbout from "assets/images/about-image.jpg";

import Button from "components/Button";

import "./about.scss";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="wrapper-image-about">
              <figure className="img wrapper image-about">
                <img
                  src={ImageAbout}
                  alt="About Section"
                  className="img-cover"
                />
              </figure>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="about-info">
              <h1 className="about-info-heading fw-bold">Why LakeCoast ?</h1>
              <p className="paragraph">
                We offer a wide range of well designed and functional home
                furnishing products at very low prices, so that as many people
                as possible will be able to buy them, and we will always provide
                the best experience for the home furnishing we create .
              </p>
              <div className="read-more">
                <div className="line"></div>
                <Button className="btn read-more-btn" type="link" href="/about">
                  Read more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
