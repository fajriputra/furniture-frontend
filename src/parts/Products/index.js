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
import Button from "components/Button";
import Categories from "components/Categories";
import Search from "components/Search";
import Tags from "components/Tags";
import Paginations from "components/Pagination";

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

        <div className="row justify-content-center">
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
                <div className="col-auto" key={product._id}>
                  <div className="card">
                    <figure
                      className="img-wrapper"
                      style={{ width: 300, height: 370 }}
                    >
                      <img
                        src={`${apiHost}/images/${product.image_url}`}
                        alt={product.name}
                        className="img-contain"
                      />
                    </figure>
                    <Button
                      className="btn mt-1"
                      onClick={(_) => alert("fungsi cart belum jalan")}
                    >
                      <div className="product-title">
                        <div className="text">
                          <h5>{product.name}</h5>
                          <p>IDR {product.price}</p>
                        </div>
                        <BtnCart />
                      </div>
                    </Button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <Paginations
          total={products.totalItems}
          itemPerPage={products.perPage}
          currentPage={products.currentPage}
          onPageChange={(page) => dispatch(setPage(page))}
        />
      </div>
    </section>
  );
}
