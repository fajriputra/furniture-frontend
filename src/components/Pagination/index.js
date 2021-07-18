import React from "react";

import Button from "components/Button";

export default function Pagination({
  totalItems,
  page,
  perPage,
  onChange,
  onNext,
  onPrev,
}) {
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <Button
            className="page-link"
            totalItems={totalItems}
            page={page}
            perPage={perPage}
            onChange={onChange}
            onNext={onNext}
            onPrev={onPrev}
          >
            Previous
          </Button>
        </li>
        <li className="page-item">
          <Button
            className="page-link"
            totalItems={totalItems}
            page={page}
            perPage={perPage}
            onChange={onChange}
            onNext={onNext}
            onPrev={onPrev}
          >
            1
          </Button>
        </li>
        <li className="page-item">
          <Button
            className="page-link"
            totalItems={totalItems}
            page={page}
            perPage={perPage}
            onChange={onChange}
            onNext={onNext}
            onPrev={onPrev}
          >
            2
          </Button>
        </li>
        <li className="page-item">
          <Button
            className="page-link"
            totalItems={totalItems}
            page={page}
            perPage={perPage}
            onChange={onChange}
            onNext={onNext}
            onPrev={onPrev}
          >
            3
          </Button>
        </li>
        <li className="page-item">
          <Button
            className="page-link"
            totalItems={totalItems}
            page={page}
            perPage={perPage}
            onChange={onChange}
            onNext={onNext}
            onPrev={onPrev}
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
}
