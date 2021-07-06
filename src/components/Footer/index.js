import React from "react";

export default function Footer() {
  const year = new Date();

  let newYears = year.getFullYear();

  return (
    <footer className="py-4">
      <p className="text-white text-center mb-0">
        @ {newYears} LakeCoast. All Right Reserved
      </p>
    </footer>
  );
}
