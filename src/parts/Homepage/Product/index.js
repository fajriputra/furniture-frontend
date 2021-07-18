import React from "react";

import { ReactComponent as IconArrSee } from "assets/images/icons/icon-arrow-right.svg";
import Feature1 from "assets/images/feature-1.jpg";
import Feature2 from "assets/images/feature-2.jpg";
import Feature3 from "assets/images/feature-3.jpg";

import Button from "components/Button";

import "./product.scss";

export default function Product(props) {
  return (
    <section className="product" id="product" ref={props.refProduct}>
      <div className="container">
        <div className="product-wrapper">
          <div className="product-wrapper-title">
            <h1 className="fw-bold">Featured Product</h1>
            <p className="paragraph">One of our superior products</p>
            <div className="see-all">
              <Button
                className="btn see-all-btn p-0"
                type="link"
                href="/products"
              >
                See all <IconArrSee />
              </Button>
            </div>
          </div>
          <div className="row justify-content-center pt-5">
            <div className="col-auto">
              <div className="card">
                <figure
                  className="img-wrapper"
                  style={{ width: 300, height: 370 }}
                >
                  <img src={Feature1} alt="" className="img-cover" />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    className="btn stretched-link mt-1"
                    type="link"
                    href="/products"
                  >
                    <h5>Gray Wardrobe</h5>
                    <p>IDR 300000</p>
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="card">
                <figure
                  className="img-wrapper"
                  style={{ width: 300, height: 370 }}
                >
                  <img src={Feature2} alt="" className="img-cover" />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    className="btn stretched-link mt-1"
                    type="link"
                    href="/products"
                  >
                    <h5>Relaxy Table</h5>
                    <p>IDR 400000</p>
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="card">
                <figure
                  className="img-wrapper"
                  style={{ width: 300, height: 370 }}
                >
                  <img src={Feature3} alt="" className="img-cover" />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    className="btn stretched-link mt-1"
                    type="link"
                    href="/products"
                  >
                    <h5>Minimalize Table</h5>
                    <p>IDR 350000</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
