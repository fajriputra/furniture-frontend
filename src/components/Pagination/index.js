import React from "react";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import { nextPage, prevPage } from "store/Products/actions";
import { usePagination, DOTS } from "hooks/usePagination";

import Button from "components/Button";

import "./pagination.scss";

export default function Pagination(props) {
  const {
    totalItems,
    siblingCount = 1,
    currentPage,
    onPageChange,
    perPage,
  } = props;

  const dispatch = useDispatch();

  const paginationRange = usePagination({
    currentPage,
    totalItems,
    siblingCount,
    perPage,
  });

  // jika page kurang dari 2page, skip render komponen
  if (currentPage === 0 || paginationRange < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <section className="container">
      <div className="row justify-content-center">
        <nav className="table-responsive">
          <ul className="pagination">
            <li
              className={[
                "page-item",
                currentPage === 1 ? "disabled" : "",
              ].join(" ")}
            >
              <Button
                className="page-link"
                onClick={() => onPageChange(dispatch(prevPage()))}
              >
                &lArr;
              </Button>
            </li>
            {paginationRange.map((item, index) => {
              if (item === DOTS) {
                return (
                  <li className="page-item">
                    <Button className="page-link pe-none">&hellip;</Button>
                  </li>
                );
              }

              return (
                <li
                  className={[
                    "page-item",
                    item === currentPage ? "active" : "",
                  ].join(" ")}
                  key={index}
                >
                  <Button
                    className="page-link"
                    onClick={() => onPageChange(item)}
                  >
                    {item}
                  </Button>
                </li>
              );
            })}
            <li
              className={[
                "page-item",
                currentPage === lastPage ? "disabled" : "",
              ].join(" ")}
            >
              <Button
                className="page-link"
                onClick={() => onPageChange(dispatch(nextPage()))}
              >
                &rArr;
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

Pagination.propTypes = {
  totalItems: propTypes.number,
  siblingCount: propTypes.number,
  currentPage: propTypes.number,
  onPageChange: propTypes.func,
  perPage: propTypes.number,
};
