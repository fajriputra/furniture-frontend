import React from "react";
import propTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { sumPrice } from "helpers/sum-price";
import { sumQty } from "helpers/sum-qty";
import Button from "components/Button";
import { ongkir } from "config.js";

import "./checkout-form.scss";
import { formatRupiah } from "helpers/formatRupiah";

export default function CheckoutForm({ items }) {
  const history = useHistory();

  let total = sumPrice(items);

  let totalQty = sumQty(items);

  return (
    <>
      <div className="checkout-form">
        <div className="wrap-content">
          <div className="content">
            <h5>Total orders</h5>
            <strong>{totalQty}</strong>
          </div>
          <div className="content">
            <h5>Total postage</h5>
            <strong>{formatRupiah(ongkir)}</strong>
          </div>
          <div className="content">
            <h5>Total paid</h5>
            <strong>{formatRupiah(total)}</strong>
          </div>
        </div>
        <Button
          className="btn btn-checkout"
          onClick={() => history.push("/")}
          isDisabled={!items.length}
        >
          Checkout
        </Button>
      </div>
    </>
  );
}

CheckoutForm.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      _id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      qty: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    })
  ),
};
