import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import { Pagination } from "@material-ui/lab";
import { Box } from "@material-ui/core";

import { ReactComponent as BtnCart } from "assets/images/icons/icon-cart-header.svg";
import { apiHost } from "config.js";
import {
  fetchProducts,
  setKeyword,
  setCategory,
  toggleTag,
  nextPage,
  prevPage,
} from "store/Products/actions";

import { tags } from "helpers/tags";
import Button from "components/Button";
import Categories from "components/Categories";
import Tags from "components/Tags";
import Search from "components/Search";

import "./products.scss";

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

  const handleChange = (nextPage, prevPage) => {
    if (nextPage) {
      dispatch(nextPage());
    } else {
      dispatch(prevPage());
    }
  };

  return (
    <section className="products">
      <div className="container">
        <Categories
          isActive={[products.category ? " active" : ""].join(" ")}
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
          {products.status === "process" || !products?.data?.length ? (
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
          <Box display="flex" justifyContent="center">
            <Pagination
              count={10}
              page={products.currentPage}
              onChange={handleChange}
              siblingCount={1}
              boundaryCount={1}
            />
          </Box>
        </div>
      </div>
    </section>
  );
}
