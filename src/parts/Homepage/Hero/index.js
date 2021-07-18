import React from "react";

import { ReactComponent as IconSurface } from "assets/images/icons/icon-surface.svg";
import { ReactComponent as IconLike } from "assets/images/icons/icon-like.svg";
import ImageHero from "assets/images/hero-image.jpg";

import Button from "components/Button";

import "./hero.scss";

export default function Hero(props) {
  const showProduct = () => {
    window.scrollTo({
      top: props.refProduct.current.offsetTop - 30,
      behavior: "smooth",
    });
  };
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <div className="hero-info">
              <h1 className="hero-info-heading">
                Find your <span className="span-text">best</span> <br />
                furniture design
              </h1>
              <p className="paragraph">
                We provide the best and modern <br />
                furniture that you dream of today
              </p>
            </div>
            <Button
              className="btn btn-shop"
              href="#product"
              onClick={showProduct}
            >
              Shop Now
            </Button>
          </div>
          <div className="col-sm-12 col-md-7">
            <div className="wrapper-image-hero">
              <img src={ImageHero} alt="Hero" className="img-cover" />
            </div>
            <div className="icon-elipse1">
              <IconSurface className="icon-surface" />
            </div>
            <div className="icon-elipse2">
              <IconLike className="icon-like" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
