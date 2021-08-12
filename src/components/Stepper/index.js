import React from "react";
import propTypes from "prop-types";

import "./stepper.scss";

export default function Stepper(props) {
  const { className, children, imgWrapperClass, imgUrl, imgClass, textClass } =
    props;

  return (
    <>
      <div className={["stepper", className].join(" ")}>
        <figure className={["img-wrapper", imgWrapperClass].join(" ")}>
          <img src={imgUrl} alt="" className={imgClass} />
        </figure>
      </div>
      <div className={["stepper-content text-center", textClass].join(" ")}>
        {children}
      </div>
    </>
  );
}

Stepper.propTypes = {
  className: propTypes.string,
  imgWrapperClass: propTypes.string,
  imgUrl: propTypes.string,
  textClass: propTypes.string,
};
