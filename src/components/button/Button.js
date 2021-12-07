import React from "react";
import "./button.css";
import { CircularLoader } from "../CircluarLoader/CircularLoader";

export const Button = ({
  onClick = () => {},
  type ="submit",
  label = "button",
  variant = "primary",
  disabled="",
  className = "",
  loading
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn_main btn_${variant} ${className}`}
      type={type}
    >
      {  loading ? <CircularLoader /> : label }
    </button>
  );
};
