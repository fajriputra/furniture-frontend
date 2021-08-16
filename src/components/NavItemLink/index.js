import React from "react";

import propTypes from "prop-types";
import Button from "components/Button";

export default function NavItemLink({
  className,
  href,
  children,
  linkClass,
  onClick,
}) {
  return (
    <li className={className} onClick={onClick}>
      <Button type="link" className={linkClass} href={href}>
        {children}
      </Button>
    </li>
  );
}

NavItemLink.propTypes = {
  className: propTypes.string,
  href: propTypes.string,
  linkClass: propTypes.string,
  onClick: propTypes.func,
};
