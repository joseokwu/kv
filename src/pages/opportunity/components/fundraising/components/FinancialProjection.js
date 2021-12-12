import React from "react";
import doc from "../../../../../assets/icons/greenDoc.svg";
import docIcon from "../../../../../assets/icons/docIcon.svg";

const FinancialProjection = () => {
  return (
    <div className="mb-4">
      <h4 className="mb-5 fundraisingSubTitle">Financial Projection</h4>

      <section className="row">
        <div className="col-xl-4 col-lg-4 mb-4">
          <article className="deck-card" style={{ width: 302 }}>
            <div className="deck-card-img" style={{ maxWidth: 302 }}>
              <img src={doc} alt="document" />
            </div>
            <div className="d-flex align-items-start p-3">
              <img src={docIcon} alt="document icon" className="mr-2" />
              <span>
                <p>Financial Statements Projection</p>
                <small>21MB</small>
              </span>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default FinancialProjection;
