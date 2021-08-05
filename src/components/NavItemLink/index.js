import React from "react";

import Button from "components/Button";

export default function NavItemLink({
  className,
  type,
  href,
  isExternal,
  target,
  children,
  linkClass,
}) {
  return (
    <li className={className}>
      <Button
        type={type}
        className={linkClass}
        href={href}
        isExternal={isExternal}
        target={target}
      >
        {children}
      </Button>
    </li>
  );
}

// page
