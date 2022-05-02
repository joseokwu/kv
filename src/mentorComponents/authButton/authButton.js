import React from "react";
import "./authButton.css";
import { CircularLoader } from "../CircluarLoader/CircularLoader";

export const AuthButton = ({
  onClick = () => {},
  type = "submit",
  label = "button",
  variant = "secondary",
  className = "",
  disabled,
  loading,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn_main btn_${variant} ${className}`}
      type={type}
    >
      {loading ? <CircularLoader /> : label}
    </button>
  );
};
