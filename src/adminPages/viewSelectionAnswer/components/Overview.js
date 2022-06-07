import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../../../components";
import styles from "../viewSelectionAnswer.module.css";

export const Overview = ({ setCurrentTab = () => {} }) => {
  const evaluationScores = [
    { name: "Market Attractiveness", score: 6, average: 6 },
    { name: "Product Visibility", score: 6, average: 6 },
    { name: "Product Advantage", score: 6, average: 6 },
    { name: "Team Competence", score: 6, average: 6 },
    { name: "Expected Return", score: 6, average: 6 },
    { name: "Growth Potential", score: 6, average: 6 },
  ];

  const { pathname } = useLocation();
  const isMentor = pathname.includes("mentors");

  return (
    <div className={styles.overviewCard}>
      <section className="row">
        <article className="col-lg-7">
          <div
            className={`d-flex align-items-center justify-content-between ${styles.eval_det}`}
          >
            <h6>Evaluation </h6>
            <h6 className="text-center">KV Members Avg. Score</h6>
            {isMentor && <h6 className="text-center">Avg. Score</h6>}
          </div>
          {evaluationScores.map((score, i) => {
            return (
              <div
                className={`d-flex align-items-center justify-content-between mb-4 ${styles.eval_det}`}
                key={`score-${i}`}
              >
                <p>{score.name}</p>
                <small className="text-center">{score?.score}</small>
                {isMentor && (
                  <small className="text-center">{score?.average}</small>
                )}
              </div>
            );
          })}
        </article>

        <article className="col-lg-5 d-flex align-items-center justify-content-center">
          <TotalScoreCard setCurrentTab={setCurrentTab} />
        </article>
      </section>
    </div>
  );
};

const TotalScoreCard = ({ setCurrentTab = () => {} }) => {
  return (
    <div className={styles.totalCard}>
      <p>Total Score</p>
      <h1>80%</h1>
      <p className={styles.small}>Excellent Performance</p>
      <Button
        label="View Details"
        variant="trans"
        onClick={() => setCurrentTab(1)}
      />
    </div>
  );
};
