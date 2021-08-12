import React from "react";

import InputText from "components/Form/InputText";

import "./index.scss";

export default function Search({ value, onChange }) {
  return (
    <div className="container search">
      <form className="form-class">
        <div className="form-group position-relative">
          <InputText
            inputClassName="search-input rounded-pill"
            placeholder="Find something here..."
            value={value}
            onChange={onChange}
            name="keyword"
            type="text"
          />
        </div>
      </form>
    </div>
  );
}
