import React from "react";

import { ReactComponent as IconSearch } from "assets/images/icons/icon-search.svg";
import { ReactComponent as IconCart } from "assets/images/icons/icon-cart-white.svg";
import { ReactComponent as IconGraph } from "assets/images/icons/icon-graph.svg";
import { ReactComponent as IconWallet } from "assets/images/icons/icon-wallet.svg";
import { ReactComponent as IconArrow } from "assets/images/icons/icon-arrow.svg";

import "./stepper.scss";

export default function Stepper(props) {
  return (
    <section className="stepper">
      <div className="container">
        <div className="stepper-info text-center">
          <h1 className="stepper-info-heading">
            4 Easy <span className="span-text">ways</span> to order
          </h1>
          <p className="paragraph">These are the steps for order</p>
        </div>
        <div className="row justify-content-center pt-4">
          <div className="col-6 col-md-3 column">
            <div className="stepper-wrapper">
              <IconSearch />
            </div>
            <div className="stepper-content text-center">
              <h4>Find</h4>
              <p>
                Select and view <br />
                product information
              </p>
            </div>
            <div className="icon">
              <IconArrow />
            </div>
          </div>

          <div className="col-6 col-md-3 column">
            <div className="stepper-wrapper">
              <IconCart />
            </div>
            <div className="stepper-content text-center">
              <h4>Checkout</h4>
              <p>
                Adding your <br />
                items to the cart
              </p>
            </div>
            <div className="icon">
              <IconArrow />
            </div>
          </div>

          <div className="col-6 col-md-3 column">
            <div className="stepper-wrapper">
              <IconGraph />
            </div>
            <div className="stepper-content text-center">
              <h4>Process</h4>
              <p>
                Complete your <br />
                order process
              </p>
            </div>
            <div className="icon">
              <IconArrow />
            </div>
          </div>

          <div className="col-6 col-md-3 column">
            <div className="stepper-wrapper">
              <IconWallet />
            </div>
            <div className="stepper-content text-center">
              <h4>Payment</h4>
              <p>
                Choose your <br />
                payment method
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
