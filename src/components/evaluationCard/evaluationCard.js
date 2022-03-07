import React from "react";
import { EvaluationCompletedCard } from "../evaluationCompletedCard/evaluationCompletedCard";
import { EvaluationPendingCard } from "../evaluationPendingCard/evaluationPendingCard";
import { EvaluationProgress } from "../evaluationProgress/evaluationProgress";
import "./evaluationCard.css";

export const EvaluationCard = ({ data = [] }) => {
  return (
    <section className="row">
      {data?.length > 0 &&
        data?.map((d, i) => {
          if (d?.status?.toLowerCase() === "pending") {
            return (
              <div className="col-xl-6 mb-3" key={`status-${i}`}>
                <EvaluationPendingCard data={d} />
              </div>
            );
          } else if (d?.status?.toLowerCase() === "completed") {
            return (
              <div className="col-xl-6 mb-3" key={`status-${i}`}>
                <EvaluationCompletedCard data={d} />
              </div>
            );
          } else if (d?.status?.toLowerCase() === "in-progress") {
            return (
              <div className="col-xl-6 mb-3" key={`status-${i}`}>
                <EvaluationProgress data={d} />
              </div>
            );
          }
        })}
    </section>
  );
};
