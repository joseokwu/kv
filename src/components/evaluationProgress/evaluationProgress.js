/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./evaluationProgress.css";
import logo from "../../assets/images/yeLogo.svg";
import { Tag, ReadMore } from "../../mentorComponents";

export const EvaluationProgress = ({ data = {} }) => {
  return (
    <div className="opp-card">
      <section className="d-flex align-items-center justify-content-between mb-2">
        <img src={logo} alt="logo" />
        <span class="progress-tag">In-Progress</span>
      </section>

      <section className="mb-2 d-flex align-items-center justify-content-between">
        <h4 className="opp-company">{data?.name}</h4>
        {/* <span className="active-dot"></span> */}
      </section>
      <section className="d-flex align-items-center" style={{ columnGap: 10 }}>
        <Tag name={data.category} />
      </section>

      <section className="opp-content mt-3">
        <p>
          {data?.productDescription}
          elit. <a href="#!">More Details</a>
        </p>
      </section>

      <section className="d-flex align-items-center justify-content-between opp-footer-text">
        <div>
          <button className="progress_evaluation">View Evaluation</button>
        </div>
      </section>
    </div>
  );
};