import React from "react";

const FormCard = ({ children, title = "", className = "" }) => {
  return (
    <div className={`form-card ${className}`}>
      {title?.length > 0 && (
        <div className="contact-title">
          <h4>{title}</h4>
        </div>
      )}
      {children}
    </div>
  );
};

export default FormCard;
