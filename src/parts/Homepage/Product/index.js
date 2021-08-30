import React from "react";

import { ReactComponent as IconArrSee } from "assets/images/icons/icon-arrow-right.svg";
import { dataProduct } from "./dataproduct";

import Button from "components/Button";

import "./product.scss";
import Card from "components/Card";
import { formatRupiah } from "helpers/formatRupiah";

export default function Product(props) {
  return (
    <section className="product" id="product" ref={props.refProduct}>
      <div className="container">
        <div className="product-wrapper">
          <h1 className="fw-bold title-product">Featured Product</h1>
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

          <div className="row justify-content-center pt-5">
            {dataProduct?.map((item) => {
              return (
                <div className="col-auto col-md-4" key={item.id}>
                  <Card
                    imgUrl={item.image_url}
                    btnClass="stretched-link mt-1"
                    type="link"
                    href="/products"
                  >
                    <h5>{item.name}</h5>
                    <p>{formatRupiah(item.price)}</p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
