import React from "react";
import "./button.css";
import { CircularLoader } from "../CircluarLoader/CircularLoader";

export const Button = ({
  onClick = () => {},
  // type ="submit",
  label = "button",
  variant = "primary",
  // disabled="",
  className = "",
  loading,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`btn_main btn_${variant} ${className}`}
      {...rest}
      // type={type}
    >
      {  loading ? <CircularLoader /> : label }
    </button>
  );
};
