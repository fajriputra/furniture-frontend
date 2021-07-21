import React from "react";

import Button from "components/Button";

import "./tags.scss";

export default function Tags({ children, onClick, isActive }) {
  return (
    <section className="tags">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto mb-4">
            <Button
              className="btn btn-tags rounded-pill"
              onClick={onClick}
              isActive={isActive}
            >
              {children}
            </Button>
          </div>
          ;
        </div>
      </div>
    </section>
  );
}
