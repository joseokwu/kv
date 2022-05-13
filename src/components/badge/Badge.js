import React from "react";
import "./badge.css";

export const Badge = ({
  name = "badge",
  color = "",
  className = "",
  ...rest
}) => {
  return (
    <span
      className={`badge-main ${className}`}
      style={{ color: color, backgroundColor: `${color}20` }}
      {...rest}
    >
      {name}
    </span>
  );
};
