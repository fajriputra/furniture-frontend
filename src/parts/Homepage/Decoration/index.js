import React from "react";

import Decoration1 from "assets/images/decor1.jpg";
import Decoration2 from "assets/images/decor2.jpg";
import Decoration3 from "assets/images/decor3.jpg";

import "./decoration.scss";

export default function Decoration(props) {
  return (
    <section className="decoration">
      <div className="container">
        <div className="decoration-wrapper">
          <div className="decoration-wrapper-title text-center">
            <h1 className="fw-bold">Accessories & Decorations</h1>
            <p className="paragraph">
              The room now looks more beautiful and stylish
            </p>
          </div>
        </div>

        <div className="row justify-content-center pt-5">
          <div className="col-md-7">
            <div className="card">
              <figure className="img-wrapper" style={{ height: 232 }}>
                <img src={Decoration1} alt="" className="img-cover" />
              </figure>
            </div>
            <div className="row mobile">
              <div className="col-md-12">
                <div className="card">
                  <figure className="img-wrapper" style={{ height: 232 }}>
                    <img src={Decoration2} alt="" className="img-cover" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card">
              <figure className="img-wrapper" style={{ height: 564 }}>
                <img src={Decoration3} alt="" className="img-cover" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
