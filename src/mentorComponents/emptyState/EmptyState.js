import React from "react";
import "./emptyState.css";

export const EmptyState = ({ message = "Nothing to see here yet" }) => {
  return <div className="empty-space">{message}</div>;
};
