import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";

import { ReactComponent as BtnCart } from "assets/images/icons/icon-cart-header.svg";
import { apiHost } from "config.js";
import {
  fetchProducts,
  setPage,
  nextPage,
  prevPage,
  setKeyword,
  setCategory,
  toggleTag,
} from "store/Products/actions";

import Button from "components/Button";
import Categories from "components/Categories";
import Tags from "components/Tags";
import Pagination from "components/Pagination";
import Search from "components/Search";

import "./products.scss";
import { tags } from "helpers/tags";

export default function Products() {
  const dispatch = useDispatch();
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
          onClick={(category) => dispatch(setCategory(category))}
          isActive={products.category}
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
          {!products?.data?.length ? (
            <div className="text-center mb-5">
              <SyncLoader color="#d8d8d8" />
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
          <Pagination
            totalItems={products.totalItems}
            page={products.currentPage}
            perPage={products.perPage}
            onChange={(page) => dispatch(setPage(page))}
            onNext={() => dispatch(nextPage())}
            onPrev={() => dispatch(prevPage())}
          />
        </div>
      </div>
    </section>
  );
}
