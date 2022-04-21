import React from "react";

export const TextArea = ({
  label = "",
  id = "",
  className = "",
  rows = "8",
  cols = "",
  name,
  placeholder = "",
  onChange = () => {},
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={id} className="d-block form-label">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        cols={cols}
        className={`w-100 form-textarea ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      ></textarea>
    </div>
  );
};
