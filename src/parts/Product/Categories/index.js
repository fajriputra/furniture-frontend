import React from "react";

import Button from "components/Button";

import "./categories.scss";

export default function Categories(props) {
  return (
    <section className="categories">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1 className="fw-bold">Product Selection</h1>
          </div>
          <div className="col-auto col-md-7">
            <div className="categories-select text-center">
              <Button className="btn p-0">
                <p className="paragraph fw-light">Category</p>
              </Button>
              <Button className="btn p-0">
                <p className="paragraph fw-light">Category</p>
              </Button>
              <Button className="btn p-0">
                <p className="paragraph fw-light">Category</p>
              </Button>
              <Button className="btn p-0">
                <p className="paragraph fw-light">Category</p>
              </Button>
              <Button className="btn p-0">
                <p className="paragraph fw-light">Category</p>
              </Button>
              <Button className="btn p-0">
                <p className="paragraph fw-light">Category</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
