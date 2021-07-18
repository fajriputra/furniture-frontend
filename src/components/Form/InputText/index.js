import React from "react";
import propTypes from "prop-types";

import "./input.scss";

const InputText = React.forwardRef(
  (
    {
      name,
      type,
      value,
      placeholder,
      prepend,
      outerClassName,
      inputClassName,
      onChange,
      onKeyUp,
    },
    ref
  ) => (
    <>
      <div className={["input-text", outerClassName].join(" ")}>
        <div className="input-group">
          {prepend && (
            <div className="input-group-prepend">
              <span className="input-group-text">{prepend}</span>
            </div>
          )}
          <input
            type={type}
            name={name}
            value={value}
            className={["form-control", inputClassName].join(" ")}
            placeholder={placeholder}
            onChange={onChange}
            onKeyUp={onKeyUp}
            ref={ref}
          />
        </div>
      </div>
    </>
  )
);

export default InputText;

InputText.defaultProps = {
  type: "text",
};

InputText.propTypes = {
  name: propTypes.string.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
