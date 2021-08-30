import React from "react";
import { useSelector } from "react-redux";

import CardItem from "./CardItem";
import CheckoutForm from "./CheckoutForm";

export default function Carts() {
  const cart = useSelector((state) => state.cart);

  return (
    <section className="container h-100">
      <div className="cart-title mb-5">
        <h1>Shopping Cart</h1>
      </div>

      <div className="row">
        <div className="col-md-8">
          <CardItem items={cart} />
        </div>
        <div className="col-md-4">
          <CheckoutForm items={cart} />
        </div>
      </div>
    </section>
  );
}
