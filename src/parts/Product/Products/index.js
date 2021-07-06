import React from "react";

import { ReactComponent as BtnCart } from "assets/images/icons/icon-cart-header.svg";
import Featuree from "assets/images/feature-1.jpg";

import Button from "components/Button";

import "./products.scss";

export default function Products() {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="rounded-circle cart">
              <Button
                className="btn btn-cart"
                onClick={() => alert("test event")}
              >
                <BtnCart />
              </Button>
            </div>
            <div className="card">
              <figure
                className="img-wrapper"
                style={{ width: 300, height: 370 }}
              >
                <img src={Featuree} alt="" className="img-cover" />
              </figure>
              <div className="product-title">
                <Button className="btn mt-1">
                  <div>
                    <h5>Lemari Baja</h5>
                    <p>$23.99</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
