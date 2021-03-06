import React from "react";
import "./button.css";
import { CircularLoader } from "../CircluarLoader/CircularLoader";

export const Button = ({
  onClick = () => {},
  label = "button",
  variant = "primary",
  className = "",
  loading,
  disabled,
  background,
  type,
  ...rest
}) => {
  return (
    <button
      background={background}
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`btn_main btn_${variant} ${className}`}
      {...rest}
    >
      {  loading ? <CircularLoader /> : label }
    </button>
  );
};
