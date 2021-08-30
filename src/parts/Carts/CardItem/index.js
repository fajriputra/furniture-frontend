import React from "react";
import propTypes from "prop-types";
import { apiHost } from "config";
import { useDispatch } from "react-redux";
import { addItem, removeItem, trashItem } from "store/Cart/actions";
import { formatRupiah } from "helpers/formatRupiah";

import { ReactComponent as IconTrash } from "assets/images/icons/icon-trash.svg";

import Button from "components/Button";
import Card from "components/Card";

import "./card-item.scss";

export default function CardItem({ items }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart-item">
        {!items.length ? (
          <div className="text-center">
            <h5 style={{ textTransform: "uppercase", letterSpacing: 2 }}>
              you don't have item yet
            </h5>
          </div>
        ) : (
          items?.map((item) => {
            return (
              <div className="row mb-4" key={item._id}>
                <div className="col-auto col-md-8 ">
                  <Card
                    imgUrl={`${apiHost}/images/${item?.image_url}`}
                    metaClass="pe-none cart-text"
                    className="card-cart"
                  >
                    <div className="text">
                      <h5 className="cart-name">{item?.name}</h5>
                      <p className="cart-category">{item?.category?.name}</p>
                      <p className="cart-price">{formatRupiah(item?.price)}</p>
                    </div>
                  </Card>
                </div>
                <div className="col-auto col-md-4">
                  <div className="cart-action">
                    <Button
                      className="btn p-0 trash"
                      onClick={() => dispatch(trashItem(item))}
                    >
                      <IconTrash />
                    </Button>
                    <div className="btn-action">
                      <Button
                        className="btn minus"
                        onClick={() => dispatch(removeItem(item))}
                      >
                        -
                      </Button>
                      <div className="qty">{item?.qty}</div>
                      <Button
                        className="btn plus"
                        onClick={() => dispatch(addItem(item))}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

CardItem.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      _id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      qty: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    })
  ),
};
