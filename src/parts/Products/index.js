import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";

import { ReactComponent as BtnCart } from "assets/images/icons/icon-cart-header.svg";
import { apiHost } from "config.js";
import { fetchProducts, setKeyword, setPage } from "store/Products/actions";

import { useCategories } from "hooks/useCategories";
import Categories from "components/Categories";
import Search from "components/Search";

import Card from "components/Card";
import Pagination from "components/Pagination";

import "./products.scss";
import { addItem } from "store/Cart/actions";
import { formatRupiah } from "helpers/formatRupiah";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const { ctg } = useCategories();

  const allCategories = ["All", ...new Set(ctg?.map((item) => item.name))];

  const filter = (button) => {
    dispatch(fetchProducts(button));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [
    dispatch,
    products.category,
    products.currentPage,
    products.keyword,
    products.tags,
  ]);

  return (
    <section className="products">
      <div className="container">
        <Categories
          isActive={filter}
          button={allCategories}
          onTabChange={filter}
        />

        <Search
          value={products.keyword}
          onChange={(e) => dispatch(setKeyword(e.target.value))}
        />

        <div className="row mobile">
          {products?.status === "process" ? (
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
                      <p>{formatRupiah(product.price)}</p>
                    </div>
                    <BtnCart
                      onClick={() => dispatch(addItem(product))}
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
