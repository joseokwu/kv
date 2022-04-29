import React from "react";
import "./select.css";

export const Select = ({
  id = "",
  className = "",
  options = [],
  label = "",
  disabled = false,
  required = false,
  value,
  onChange = () => {},
  displayOption = [],
  placeholder = "Choose option",
  ...rest
}) => {
  return (
    <div className="select-field">
      {label.length > 0 && (
        <label htmlFor={id}>
          {label}
          {required && "*"}
        </label>
      )}
      <select
        id={id}
        disabled={disabled}
        required={required}
        className={className}
        onChange={onChange}
        initialValue={value}
        {...rest}
      >
        <option disabled selected hidden value="">
          {placeholder}
        </option>
        {options.length > 0 &&
          options.map((option, i) => {
            return <option key={i} value={option}>{displayOption[i] ?? option}</option>;
          })}
      </select>
    </div>
  );
};
