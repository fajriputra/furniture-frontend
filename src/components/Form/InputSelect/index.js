import React from "react";
import propTypes from "prop-types";

export default function InputSelect({ isDisabled, onChange, options, value }) {
  return (
    <select
      className="form-select"
      disabled={isDisabled}
      onChange={onChange}
      value={value}
    >
      {options.map((item, index) => (
        <option {...item} key={index} />
      ))}
    </select>
  );
}

InputSelect.propTypes = {
  isDisabled: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  isLoading: propTypes.bool,
  onChange: propTypes.func,
  options: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    })
  ),
};
