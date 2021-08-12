import React from "react";
import propTypes from "prop-types";

import Button from "components/Button";

export default function Card(props) {
  const {
    children,
    className,
    imgWrapperClass,
    imgUrl,
    imgClass,
    metaClass,
    btnClass,
    type,
    href,
    onClick,
  } = props;

  return (
    <div className={["card", className].join(" ")}>
      <figure className={["img-wrapper", imgWrapperClass].join(" ")}>
        <img
          src={imgUrl}
          alt=""
          className={["img-cover", imgClass].join(" ")}
        />
      </figure>
      <div className={["meta-wrapper", metaClass].join(" ")}>
        <Button
          className={["btn", btnClass].join(" ")}
          type={type}
          href={href}
          onClick={onClick}
        >
          {children}
        </Button>
      </div>
    </div>
  );
}

Card.propTypes = {
  className: propTypes.string,
  onClick: propTypes.func,
  imgWrapperClass: propTypes.string,
  imgUrl: propTypes.any,
  imgClass: propTypes.string,
  metaClass: propTypes.string,
  btnClass: propTypes.string,
  type: propTypes.string,
  href: propTypes.string,
};
