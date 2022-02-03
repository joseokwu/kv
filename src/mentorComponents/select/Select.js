import React from "react";
import "./select.css";

export const Select = ({
  id = "",
  className = "",
  options = [],
  label = "",
  disabled = false,
  required = false,
  onChange = () => {},
  displayOption = [],
  placeholder = "Choose option",
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
      >
        <option disabled selected hidden value="">
          {placeholder}
        </option>
        {options.length > 0 &&
          options.map((option, i) => {
            return <option value={option}>{displayOption[i] ?? option}</option>;
          })}
      </select>
    </div>
  );
};
