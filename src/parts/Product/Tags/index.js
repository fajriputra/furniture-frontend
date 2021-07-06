import React from "react";

import Button from "components/Button";

import "./tags.scss";

export default function Tags(props) {
  return (
    <section className="tags">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto mb-4">
            <Button className="btn btn-tags">Tag</Button>
          </div>
          <div className="col-auto mb-4">
            <Button className="btn btn-tags">Tag</Button>
          </div>
          <div className="col-auto mb-4">
            <Button className="btn btn-tags">Tag</Button>
          </div>
          <div className="col-auto mb-4">
            <Button className="btn btn-tags">Tag</Button>
          </div>
          <div className="col-auto mb-4">
            <Button className="btn btn-tags">Tag</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
