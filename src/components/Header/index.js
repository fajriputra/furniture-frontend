import React from "react";

import { useSelector } from "react-redux";

import { ReactComponent as IconCartHeader } from "assets/images/icons/icon-cart-header.svg";
import { formatTime } from "helpers/formatTime";

import Logo from "assets/images/icons/icon-logo.svg";
import Button from "components/Button";

import "./header.scss";

export default function Header(props) {
  const auth = useSelector((state) => state.auth);

  const getNavLinksClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  const userLink = () => {
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
  };

  return (
    <header className="mx-auto pt-4">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <Button className="logo-brand" type="link" href="/">
            <img src={Logo} alt="Lake Coast" className="img-cover" />
          </Button>
          <Button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fw-light">
              <li className={`nav-item${getNavLinksClass("/")}`}>
                <Button
                  type="link"
                  className="nav-link"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinksClass("/about")}`}>
                <Button type="link" className="nav-link" href="/about">
                  About
                </Button>
              </li>
              <li className={`nav-item${getNavLinksClass("/products")}`}>
                <Button type="link" className="nav-link" href="/products">
                  Products
                </Button>
              </li>
              <li className={`nav-item${getNavLinksClass("/contact")}`}>
                <Button type="link" className="nav-link" href="/contact">
                  Contact
                </Button>
              </li>
            </ul>
            {auth?.user ? (
              userLink()
            ) : (
              <>
                <Button
                  type="link"
                  className="btn btn-login mx-3"
                  href="/login"
                >
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
