import React from "react";

import { dataDecor } from "./datadecor";
import Card from "components/Card";

import "./decoration.scss";

export default function Decoration(props) {
  return (
    <section className="decoration">
      <div className="container">
        <div className="decoration-wrapper text-center">
          <h1 className="fw-bold">Accessories & Decorations</h1>
          <p className="paragraph">
            The room now looks more beautiful and stylish
          </p>
        </div>

        <div className="card-padding">
          <div className="container-grid">
            {dataDecor?.map((item) => {
              return (
                <div
                  className={`item ${item.id !== 3 ? "column-8" : "column-4"}${
                    item.id !== 3 ? " row-1" : " row-2"
                  }`}
                  key={item.id}
                >
                  <Card
                    imgUrl={item.image_url}
                    metaClass="d-none"
                    className={item.id === 2 ? "mobile" : ""}
                    imgWrapperClass={item.id === 3 ? "outing-row" : ""}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// <div className="row mobile">
//         <div className="col-md-12">
//           <div className="card">
//             <figure className="img-wrapper">
//               <img src={Decoration2} alt="" className="img-cover" />
//             </figure>
//           </div>
//         </div>
//       </div>

/* <div className="col-md-5">
            <div className="card">
              <figure className="img-wrapper outing-row">
                <img src={Decoration3} alt="" className="img-cover" />
              </figure>
            </div>
          </div> */
