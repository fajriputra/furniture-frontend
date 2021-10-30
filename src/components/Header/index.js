import React from "react";

import { useSelector } from "react-redux";
import { dataLink } from "./datalink";
import { ReactComponent as Logo } from "assets/images/icons/icon-logo.svg";
import { ReactComponent as Close } from "assets/images/icons/icon-close.svg";

import useClicked from "hooks/useClicked";
import Button from "components/Button";
import NavItemLink from "components/NavItemLink";
import UserLink from "components/UserProfile";

import "./header.scss";

export default function Header(props) {
  const { handleClick, click, refClick } = useClicked();
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  const getNavLinksClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <header className="mx-auto pt-4" ref={refClick}>
      <div className="container-fluid header">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <Button className="logo-brand" type="link" href="/">
            <Logo className="img-cover" />
          </Button>
          <Button
            className="navbar-toggler"
            type="button"
            onClick={handleClick}
          >
            {click ? (
              <Close width={30} height={20} className="close" />
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </Button>
          <div
            className={`${!click ? "collapse" : ""} navbar-collapse`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto fw-light">
              {dataLink?.map((item) => {
                return (
                  <NavItemLink
                    className={`nav-item${getNavLinksClass(item.url)}`}
                    type="link"
                    href={item.url}
                    key={item.id}
                    linkClass="nav-link"
                  >
                    {item.name}
                  </NavItemLink>
                );
              })}
            </ul>
            {auth?.user ? (
              <UserLink items={cart} {...props} />
            ) : (
              <>
                <Button type="link" className="btn btn-login" href="/login">
                  Sign in
                </Button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
