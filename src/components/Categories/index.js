import React, { useState } from "react";

import Button from "components/Button";

import "./categories.scss";

export default function Categories({ button, onTabChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnClick = (index) => setActiveIndex(index);

  return (
    <section className="categories">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <h1 className="fw-bold">Product Selection</h1>
          </div>
          <div className="col-12 col-md-7">
            <div className="categories-select text-center">
              {button?.map((cat, index) => {
                return (
                  <Button
                    key={index}
                    className="btn p-0"
                    onClick={() => onTabChange(cat)}
                  >
                    <p
                      className={[
                        "paragraph",
                        activeIndex === index ? "fw-bold" : "fw-light",
                      ].join(" ")}
                      onClick={() => handleOnClick(index)}
                    >
                      {cat}
                    </p>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
