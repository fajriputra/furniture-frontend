import React from "react";

import Header from "components/Header";
import Breadcrumbs from "components/Breadcrumbs";
import Categories from "parts/Product/Categories";
import Tags from "parts/Product/Tags";
import Products from "parts/Product/Products";
import Pagination from "parts/Product/Pagination";
import Sitelink from "components/Sitelink";

export default function Product(props) {
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
      <Categories />
      <Tags />
      <Products />
      <section>
        <Pagination />
      </section>
      <Sitelink />
    </>
  );
}
