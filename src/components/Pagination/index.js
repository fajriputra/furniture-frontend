import React, { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "react-bootstrap";
import { nextPage, prevPage } from "store/Products/actions";
import SyncLoader from "react-spinners/SyncLoader";

import "./pagination.scss";

export default function Paginations({
  total = 0,
  itemPerPage = 0,
  currentPage = 1,
  onPageChange,
}) {
  const [totalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (total > 0 && itemPerPage > 0) {
      setTotalPages(Math.ceil(total / itemPerPage));
    }
  }, [total, itemPerPage]);

  const paginationItems = useMemo(() => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    return pages;
  }, [totalPages, currentPage, onPageChange]);

  if (totalPages === 0) return <SyncLoader color="#d8d8d8" />;

  return (
    <Pagination className="justify-content-center">
      <Pagination.Prev
        onChange={() => dispatch(prevPage())}
        disabled={currentPage === 1}
      />
      {paginationItems}
      <Pagination.Next
        onChange={() => dispatch(nextPage())}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
}
