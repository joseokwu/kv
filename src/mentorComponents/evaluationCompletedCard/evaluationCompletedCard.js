/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./evaluationCompletedCard.css";
import logo from "../../assets/images/yeLogo.svg";
import { Tag } from "../../mentorComponents";

export const EvaluationCompletedCard = ({ data = {} }) => {
  return (
    <div className="opp-card">
  
      <section className="d-flex align-items-center justify-content-between mb-2">
        <img src={logo} alt="logo" />
        <span className="completed-tag">Completed</span>
      </section>

      <section className="mb-2 d-flex align-items-center justify-content-between">
        <h4 className="opp-company">{data?.name}</h4>
        {/* <span className="active-dot"></span> */}
      </section>

      <section className="d-flex align-items-center" style={{ columnGap: 10 }}>
        <Tag name={data?.category} />
      </section>

      <section className="opp-content mt-3">
        <p>
          {data?.productDescription}
          elit. <span>More Details</span>
        </p>
      </section>

      <section className="d-flex align-items-center justify-content-between opp-footer-text">
        <div>
          <button disabled={true} className="completed_evaluation">
            Evaluated
          </button>
        </div>
      </section>
    </div>
  );
};
