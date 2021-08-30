import React from "react";

import Header from "components/Header";
import Breadcrumbs from "components/Breadcrumbs";
import Carts from "parts/Carts";
import Sitelink from "components/Sitelink";

export default function Cart(props) {
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
            {
              url: "/checkout",
              name: "Cart",
            },
          ]}
        />
      </section>
      <Carts />
      <Sitelink />
    </>
  );
}
