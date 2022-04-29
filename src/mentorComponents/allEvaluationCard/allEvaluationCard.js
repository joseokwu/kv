import React from "react";
import { EmptyState } from "../emptyState/EmptyState";
import { EvaluationCard } from "../evaluationCard/evaluationCard";
import "./allEvaluationCard.css";

export const AllEvaluationCard = ({ data = [] }) => {
  return (
    <section className="row">
      {data?.length > 0 ? (
        <EvaluationCard data={data} />
      ) : (
        // <div className="col-12 my-5 text-center">
        //   <span className="progress-tag">No Evaluations available</span>
        // </div>
        <EmptyState message="No startup has been assigned to you" />
      )}
    </section>
  );
};
