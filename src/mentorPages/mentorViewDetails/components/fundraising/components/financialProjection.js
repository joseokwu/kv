import React from "react";
import docIcon from "../../../../../assets/icons/doc.svg";
import findoc from "../../../../../assets/images/finDoc.svg";

const FinancialProjection = ({ data = [] }) => {
  return (
    <div className="mb-4">
      {/* <h4 className="mb-5 fundraisingSubTitle">Financial Projection</h4> */}

      <section className="row">
        <div className="col-xl-4 col-lg-4 mb-4">
          <article className="deck-card" style={{ width: 302 }}>
            <div className="deck-card-img" style={{ maxWidth: 302 }}>
              <img src={findoc} alt="document" />
            </div>
            <div className="d-flex align-items-start p-3">
              <img src={docIcon} alt="document icon" className="mr-2" />
              <span>
                <p>{data?.fileName}</p>
                <small>{data?.fileSize}</small>
              </span>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default FinancialProjection;
