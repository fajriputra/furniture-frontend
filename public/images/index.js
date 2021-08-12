import React from "react";

import IconSearch from "assets/images/icons/icon-search.svg";
import IconCart from "assets/images/icons/icon-cart-white.svg";
import IconGraph from "assets/images/icons/icon-graph.svg";
import IconWallet from "assets/images/icons/icon-wallet.svg";
import IconArrow from "assets/images/icons/icon-arrow.svg";

import "./orderway.scss";
import Stepper from "components/Stepper";

export default function OrderWay(props) {
  return (
    <section className="orderway">
      <div className="container">
        <div className="orderway-info text-center">
          <h1 className="orderway-info-heading">
            4 Easy <span className="span-text">ways</span> to order
          </h1>
          <p className="paragraph">These are the steps for order</p>
        </div>
        <div className="row justify-content-center pt-4">
          <div className="col-6 col-md-3 column">
            <Stepper>
              <h4>Find</h4>
              <p>
                Select and view <br />
                product information
              </p>
            </Stepper>

            <div className="icon">
              <IconArrow />
            </div>
          </div>

          <div className="col-6 col-md-3 column">
            <Stepper>
              <h4>Checkout</h4>
              <p>
                Adding your <br />
                items to the cart
              </p>
            </Stepper>

            <div className="icon">
              <IconArrow />
            </div>
          </div>

          <div className="col-6 col-md-3 column">
            <Stepper>
              <h4>Process</h4>
              <p>
                Complete your <br />
                order process
              </p>
            </Stepper>

            <div className="icon">
              <IconArrow />
            </div>
          </div>

          <div className="col-6 col-md-3 column">
            <Stepper>
              <h4>Payment</h4>
              <p>
                Choose your <br />
                payment method
              </p>
            </Stepper>

            <div className="icon">
              <IconArrow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
