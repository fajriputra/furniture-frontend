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

export default function Sitelink(props) {
  return (
    <section className="sitelink">
      <div className="container">
        <div className="row">
          <div className="col-auto col-md-auto sitelink-logo">
            <IconLogoWhite />
          </div>
          <div className="col-5 col-md-2 list-wrapper">
            <h5>Information</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-transparent">
                <Button className="btn p-0" type="link" href="/about">
                  About
                </Button>
              </li>
              <li className="list-group-item bg-transparent">
                <Button className="btn p-0" type="link" href="/product">
                  Product
                </Button>
              </li>
              <li className="list-group-item bg-transparent">
                <Button className="btn p-0" type="link" href="/promotion">
                  Promotion
                </Button>
              </li>
              <li className="list-group-item bg-transparent">
                <Button className="btn p-0" type="link" href="/career">
                  Career
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto col-md-2 list-wrapper">
            <h5>Useful Links</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-transparent">
                <Button className="btn p-0" type="link" href="/catalog">
                  Catalog
                </Button>
              </li>
              <li className="list-group-item bg-transparent">
                <Button className="btn p-0" type="link" href="/plan">
                  Planning Program
                </Button>
              </li>
              <li className="list-group-item bg-transparent">
                <Button
                  className="btn p-0"
                  type="link"
                  href="/customer-service"
                >
                  Customer Service
                </Button>
              </li>
              <li className="list-group-item bg-transparent">
                <Button className="btn p-0 m-0" type="link" href="/policy">
                  Privacy Policy
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto col-md-auto list-wrapper">
            <h5>Contact</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-transparent">
                <Button
                  className="btn p-0 m-0"
                  type="link"
                  href="tel:+622128992988"
                >
                  <IconPhone />
                  <span className="ms-3">021 - 2899 - 2988</span>
                </Button>
              </li>
              <li className="list-group-item bg-transparent">
                <Button
                  className="btn p-0 m-0"
                  isExternal
                  type="link"
                  target="_blank"
                  href="mailto:support@lakecoast.com"
                >
                  <IconMessage />
                  <span className="ms-3">lakecoast@gmail.com</span>
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
