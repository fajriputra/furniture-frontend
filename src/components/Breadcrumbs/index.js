import React from "react";

import Button from "components/Button";

import "./breadcrumbs.scss";

export default function Breadcrumbs({ list, className }) {
  return (
    <nav>
      <ol className={["breadcrumb", className].join(" ")}>
        {list?.map?.((item, index) => {
          return (
            <li
              className={`breadcrumb-item${
                index === list.length - 1 ? " active" : ""
              }`}
              key={`breadcrumb-${index}`}
            >
              {index === item.length ? (
                item.name
              ) : (
                <Button className="btn" type="link" href={item.url}>
                  {item.name}
                </Button>
              )}
            </li>
          );
        })}
      </ol>
      ;
    </nav>
  );
}
