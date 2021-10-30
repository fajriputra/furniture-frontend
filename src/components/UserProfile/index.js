import React from "react";
import { useSelector } from "react-redux";

import { ReactComponent as IconCartHeader } from "assets/images/icons/icon-cart-header.svg";
import { ReactComponent as IconArrowDown } from "assets/images/icons/icon-arrow-down.svg";
import { formatTime } from "helpers/formatTime";
import { sumQty } from "helpers/sum-qty";

import useClicked from "hooks/useClicked";
import Button from "components/Button";
import NavItemLink from "components/NavItemLink";

import "./user-profile.scss";

export default function UserLink(props) {
  const { handleClick, click, refClick } = useClicked();
  const auth = useSelector((state) => state.auth);

  const getNavLinksClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  let totalCart = sumQty(props.items);

  return (
    <>
      <div className="line">|</div>
      <Button className="btn p-0 pe-none">
        <h5 className="auth-user">
          {formatTime()},{" "}
          <span className="text-capitalize">{auth?.user?.name}!</span>
        </h5>
      </Button>

      <Button className="btn p-0">
        <li
          className="drop-nav d-flex align-items-center"
          style={{ listStyle: "none" }}
          onClick={handleClick}
          ref={refClick}
        >
          <div className="auth-image rounded-circle d-flex justify-content-center align-items-center">
            <span className="fw-bold">
              {auth?.user?.name?.slice(0, 1).toUpperCase()}
            </span>
          </div>
          <ul className={click ? "dropdown clicked" : "dropdown m-0 p-0"}>
            <NavItemLink
              className={`nav-item${getNavLinksClass("/address")} fw-light`}
              type="link"
              href="/address"
              linkClass="nav-link"
            >
              Address
            </NavItemLink>
            <NavItemLink
              className={`nav-item${getNavLinksClass("/orders")} fw-light`}
              type="link"
              href="/orders"
              linkClass="nav-link"
            >
              My Orders
            </NavItemLink>
            <NavItemLink
              className="nav-item fw-light"
              type="link"
              href="/logout"
              linkClass="nav-link"
            >
              Logout
            </NavItemLink>
          </ul>
          <IconArrowDown
            className={click ? "arrow clicked ms-2" : "arrow not-clicked ms-2"}
          />
        </li>
      </Button>

      <Button type="link" className="btn position-relative" href="/cart">
        <IconCartHeader />
        <div className="ui-qty rounded-circle position-absolute">
          {totalCart}
        </div>
      </Button>
    </>
  );
}
