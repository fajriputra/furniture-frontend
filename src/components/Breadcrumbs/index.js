import React from "react";

import Button from "components/Button";

import "./breadcrumbs.scss";

export default function Breadcrumbs({ list, className }) {
  return (
    <nav>
      <ol className={["breadcrumb", className].join(" ")}>
        {list?.map?.((item, i) => {
          return (
            <li className="breadcrumb-item" key={`breadcrumb-${i}`}>
              <Button
                className={`btn${
                  i === list.length - 1 ? " fw-bold pe-none" : ""
                }`}
                type={i !== list.length - 1 ? "link" : "button"}
                href={item.url}
              >
                {item.name}
              </Button>
            </li>
          );
        })}
      </ol>
      ;
    </nav>
  );
}
