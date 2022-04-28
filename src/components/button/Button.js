import React from "react";
import "./button.css";
import { CircularLoader } from "../CircluarLoader/CircularLoader";

export const Button = ({
  onClick = () => {},
  label = "button",
  variant = "primary",
  className = "",
  disabled,
  type,
  loading,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={loading}
      className={`btn-main btn-${variant} ${className}`}
      {...rest}
    >
      {loading ? <CircularLoader /> : label}
    </button>
  );
};
