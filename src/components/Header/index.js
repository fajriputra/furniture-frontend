import React from "react";

import { useSelector } from "react-redux";

import { dataLink } from "./datalink";

import Logo from "assets/images/icons/icon-logo.svg";
import Button from "components/Button";

import "./header.scss";
import NavItemLink from "components/NavItemLink";
import UserLink from "components/UserProfile";

export default function Header(props) {
  const auth = useSelector((state) => state.auth);

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
              <UserLink />
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
