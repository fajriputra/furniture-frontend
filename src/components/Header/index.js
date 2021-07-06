import React from "react";

import Logo from "assets/images/icons/icon-logo.svg";
import { ReactComponent as IconSearchHeader } from "assets/images/icons/icon-search-header.svg";
import { ReactComponent as IconCartHeader } from "assets/images/icons/icon-cart-header.svg";

import Button from "components/Button";

import "./header.scss";

export default function Header(props) {
  const getNavLinksClass = (path) => {
    return props.location.pathname === path ? " active" : "";
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

            <Button type="button" className="nav-link ms-4 btn-type-button">
              <IconSearchHeader />
            </Button>
            <Button type="link" className="nav-link btn-cart" href="/cart">
              <IconCartHeader />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
