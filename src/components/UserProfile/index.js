import React from "react";
import { useSelector } from "react-redux";

import { ReactComponent as IconCartHeader } from "assets/images/icons/icon-cart-header.svg";
import { formatTime } from "helpers/formatTime";

import Button from "components/Button";

import "./user-profile.scss";

export default function UserLink() {
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <div className="line">|</div>
      <Button type="link" className="btn p-0" href="/account">
        <h5 className="auth-user">
          {formatTime()},{" "}
          <span className="text-capitalize">{auth?.user?.name}!</span>
        </h5>
      </Button>
      <Button type="link" className="btn p-0" href="/account">
        <div className="auth-image rounded-circle d-flex justify-content-center align-items-center">
          <span className="fw-bold">
            {" "}
            {auth?.user?.name?.slice(0, 1).toUpperCase()}
          </span>
        </div>
      </Button>
      <Button type="link" className="btn" href="/cart">
        <IconCartHeader />
      </Button>
    </>
  );
}
