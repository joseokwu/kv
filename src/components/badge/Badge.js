import React from "react";
import "./badge.css";

export const Badge = ({ name = "badge" }) => {
  return <span className="badge-main">{name}</span>;
};
