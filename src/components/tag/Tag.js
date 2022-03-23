import React from "react";
import "./tag.css";

export const Tag = ({ name = "tag", color = "#058DC1", className = "" }) => {
  return (
    <span
      className={`tag-main ${className}`}
      style={{ backgroundColor: `${color}20`, color: color }}
    >
      {name}
    </span>
  );
};
