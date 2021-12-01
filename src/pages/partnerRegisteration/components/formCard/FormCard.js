import React from "react";

const FormCard = ({ children, title = "" }) => {
  return (
    <div className="form-card">
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
