import React from "react";

import Header from "components/Header";
import Breadcrumbs from "components/Breadcrumbs";
import Products from "parts/Products";
import Sitelink from "components/Sitelink";
import useScrollToTop from "hooks/useScrollToTop";

export default function Product(props) {
  useScrollToTop();
  return (
    <>
      <Header {...props} />
      <section>
        <Breadcrumbs
          list={[
            {
              url: "/",
              name: "Home",
            },
            {
              url: "/products",
              name: "Products",
            },
          ]}
        />
      </section>
      <Products />
      <Sitelink />
    </>
  );
}
