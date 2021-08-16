import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";

import { ReactComponent as BtnCart } from "assets/images/icons/icon-cart-header.svg";
import { apiHost } from "config.js";
import {
  fetchProducts,
  setKeyword,
  setCategory,
  toggleTag,
  setPage,
} from "store/Products/actions";

import { tags } from "helpers/tags";
import Categories from "components/Categories";
import Search from "components/Search";
import Tags from "components/Tags";
import Card from "components/Card";
import Pagination from "components/Pagination";

import "./products.scss";

export default function Products() {
  const dispatch = useDispatch();
  const [active, setIsActive] = useState(null);

  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [
    dispatch,
    products.currentPage,
    products.keyword,
    products.category,
    products.tags,
  ]);

  return (
    <section className="products">
      <div className="container">
        <Categories
          setActive={setIsActive}
          isActive={active === products.category}
          onChange={(category) => dispatch(setCategory(category))}
        />

        <Search
          value={products.keyword}
          onChange={(e) => dispatch(setKeyword(e.target.value))}
        />

        {tags[products.category]?.map((item, index) => {
          return (
            <div key={index}>
              <Tags
                onClick={() => dispatch(toggleTag(item))}
                isActive={products.tags.includes(item)}
              >
                {item}
              </Tags>
            </div>
          );
        })}

        <div className="row mobile">
          {products.status === "process" ? (
            <div className="text-center mb-5">
              <SyncLoader color="#d8d8d8" />
            </div>
          ) : products?.data?.length === 0 ? (
            <div className="text-center mb-5">
              <p className="paragraph mb-0">
                Oopss🙊, Product you are looking for cannot be found...
              </p>
            </div>
          ) : (
            products?.data?.map((product) => {
              return (
                <div className="col-12 col-md-6 col-lg-auto" key={product._id}>
                  <Card
                    className="cards"
                    btnClass="mt-1 px-0 mx-0"
                    imgUrl={`${apiHost}/images/${product.image_url}`}
                    metaClass="pe-none"
                  >
                    <div className="text">
                      <h5>{product.name}</h5>
                      <p>IDR {product.price}</p>
                    </div>
                    <BtnCart
                      onClick={(_) => alert("fungsi ini belum dibuat ya")}
                      className="pe-auto"
                    />
                  </Card>
                </div>
              );
            })
          )}
        </div>

        <Pagination
          totalItems={products.totalItems}
          perPage={products.perPage}
          currentPage={products.currentPage}
          onPageChange={(page) => dispatch(setPage(page))}
        />
      </div>
    </section>
  );
}
