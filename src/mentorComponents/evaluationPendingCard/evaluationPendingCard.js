/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./evaluationPendingCard.css";
import logo from "../../assets/images/yeLogo.svg";
import { Tag } from "../../mentorComponents";
import { Modal } from "../modal/Modal";
import { EvaluationModal } from "../../mentorPages/mentorEvaluation/components/evaluationModal";

export const EvaluationPendingCard = ({ data = {} }) => {
  return (
    <div className="opp-card">
      <Modal id="moreDetailsModal" withHeader={false}>
        <EvaluationModal data={data} />
      </Modal>
      <section className="d-flex align-items-center justify-content-between mb-2">
        <img src={logo} alt="logo" />
        <span class="pending-tag">Pending</span>
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
          <a href="#!" data-toggle="modal" data-target="#moreDetailsModal">
            More Details
          </a>
        </p>
      </section>

      <section className="d-flex align-items-center justify-content-between opp-footer-text">
        <div>
          <button className="pending_evaluation">Evaluation</button>
        </div>
      </section>
    </div>
  );
};
