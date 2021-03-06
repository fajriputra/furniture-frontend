import React, { useRef } from "react";

import Header from "components/Header";
import Hero from "parts/Homepage/Hero";
import About from "parts/Homepage/About";
import OrderWay from "parts/Homepage/Orderway";
import Product from "parts/Homepage/Product";
import Decoration from "parts/Homepage/Decoration";
import Subscribe from "parts/Homepage/Subscribe";
import Sitelink from "components/Sitelink";
import useScrollToTop from "hooks/useScrollToTop";

export default function Homepage(props) {
  const refProduct = useRef(null);

  useScrollToTop();

  return (
    <>
      <Header {...props} />
      <Hero refProduct={refProduct} />
      <About />
      <OrderWay />
      <Product refProduct={refProduct} />
      <Decoration />
      <Subscribe />
      <Sitelink />
    </>
  );
}
