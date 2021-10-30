import React from "react";

import { ReactComponent as IconLogoWhite } from "assets/images/icons/icon-logo-white.svg";
import { ReactComponent as IconPhone } from "assets/images/icons/icon-phone.svg";
import { ReactComponent as IconMessage } from "assets/images/icons/icon-message.svg";
import { ReactComponent as IconFacebook } from "assets/images/icons/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "assets/images/icons/icon-twitter.svg";
import { ReactComponent as IconInstagram } from "assets/images/icons/icon-instagram.svg";
import { ReactComponent as IconGoogle } from "assets/images/icons/icon-google.svg";

import Button from "components/Button";
import Footer from "components/Footer";

import "./sitelink.scss";
import NavItemLink from "components/NavItemLink";

export default function Sitelink() {
  return (
    <section className="sitelink text-white">
      <div className="container">
        <div className="row">
          <div className="col-auto col-md-auto sitelink-logo">
            <IconLogoWhite />
          </div>
          <div className="col-5 col-md-2 list-wrapper">
            <h5>Information</h5>
            <ul className="list-group list-group-flush">
              <NavItemLink
                className="list-group-item bg-transparent"
                linkClass="btn p-0 text-white"
                type="link"
                href="/about"
              >
                About
              </NavItemLink>
              <NavItemLink
                className="list-group-item bg-transparent"
                linkClass="btn p-0 text-white"
                type="link"
                href="/products"
              >
                Products
              </NavItemLink>
              <NavItemLink
                className="list-group-item bg-transparent"
                linkClass="btn p-0 text-white"
                type="link"
                href="/promotion"
              >
                Promotion
              </NavItemLink>
              <NavItemLink
                className="list-group-item bg-transparent"
                linkClass="btn p-0 text-white"
                type="link"
                href="/career"
              >
                Career
              </NavItemLink>
            </ul>
          </div>
          <div className="col-auto col-md-2 list-wrapper">
            <h5>Useful Links</h5>
            <ul className="list-group list-group-flush">
              <NavItemLink
                className="list-group-item bg-transparent"
                linkClass="btn p-0 text-white"
                type="link"
                href="/catalog"
              >
                Catalog
              </NavItemLink>
              <NavItemLink
                className="list-group-item bg-transparent"
                linkClass="btn p-0 text-white"
                type="link"
                href="/plan"
              >
                Planning Program
              </NavItemLink>
              <NavItemLink
                className="list-group-item bg-transparent"
                linkClass="btn p-0 text-white"
                type="link"
                href="/service"
              >
                Customer Service
              </NavItemLink>
              <NavItemLink
                className="list-group-item bg-transparent"
                linkClass="btn p-0 text-white"
                type="link"
                href="/terms"
              >
                Privacy Policy
              </NavItemLink>
            </ul>
          </div>
          <div className="col-auto col-md-auto list-wrapper">
            <h5>Contact</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-transparent">
                <Button
                  className="btn p-0 m-0"
                  type="link"
                  isExternal
                  target="_blank"
                  href="tel:+622128992988"
                >
                  <IconPhone className="me-3" />
                  <span className="text-white">021 - 2899 - 2988</span>
                </Button>
              </li>
              <li className="list-group-item bg-transparent">
                <Button
                  className="btn p-0 m-0"
                  type="link"
                  isExternal
                  target="_blank"
                  href="mailto:support@lakecoast.com"
                >
                  <IconMessage className="me-3" />
                  <span className="text-white">lakecoast@gmail.com</span>
                </Button>
              </li>
            </ul>
            <div className="sitelink-icon-image d-flex align-items-center">
              <Button
                className="btn p-0"
                isExternal
                target="_blank"
                type="link"
                href="https://web.facebook.com"
              >
                <div className="rounded-circle">
                  <IconFacebook />
                </div>
              </Button>
              <Button
                className="btn p-0"
                isExternal
                target="_blank"
                type="link"
                href="https://twitter.com"
              >
                <div className="rounded-circle">
                  <IconTwitter />
                </div>
              </Button>
              <Button
                className="btn p-0"
                isExternal
                target="_blank"
                type="link"
                href="https://www.instagram.com"
              >
                <div className="rounded-circle">
                  <IconInstagram />
                </div>
              </Button>
              <Button
                className="btn p-0"
                isExternal
                target="_blank"
                type="link"
                href="https://www.google.com"
              >
                <div className="rounded-circle">
                  <IconGoogle />
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <Footer />
      </div>
    </section>
  );
}
