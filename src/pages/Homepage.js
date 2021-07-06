import React from "react";

import Header from "components/Header";
import Hero from "parts/Homepage/Hero";
import About from "parts/Homepage/About";
import Stepper from "parts/Homepage/Stepper";
import Somefood from "parts/Homepage/Somefoods";
import Decoration from "parts/Homepage/Decoration";
import Subscribe from "parts/Homepage/Subscribe";
import Sitelink from "components/Sitelink";
import useScroolAnchor from "hooks/useScrollAnchor";

export default function Homepage(props) {
  useScroolAnchor();

  return (
    <>
      <Header {...props} />
      <Hero />
      <About />
      <Stepper />
      <Somefood />
      <Decoration />
      <Subscribe />
      <Sitelink />
    </>
  );
}
