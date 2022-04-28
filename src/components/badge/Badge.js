import React from "react";
import "./badge.css";

export const Badge = ({ name = "badge", color = "" }) => {
  return (
    <span
      className="badge-main"
      style={{ color: color, backgroundColor: `${color}20` }}
    >
      {name}
    </span>
  );
};
