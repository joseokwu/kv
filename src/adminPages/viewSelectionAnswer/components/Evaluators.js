import React, { useMemo } from "react";
import { Table } from "../../../adminComponents";
import userPic from "../../../assets/images/sampleUser.png";
import styles from "../viewSelectionAnswer.module.css";

export const Evaluators = () => {
  const headers = [
    { title: "Name", accessor: "name" },
    { title: "Type", accessor: "type" },
    { title: "Questions & Scores", accessor: "scores" },
    { title: "Total Score", accessor: "total" },
  ];

  const evaluationScores = useMemo(
    () => [
      { name: "Market Attractiveness", score: 6 },
      { name: "Product Visibility", score: 6 },
      { name: "Product Advantage", score: 6 },
      { name: "Team Competence", score: 6 },
      { name: "Expected Return", score: 6 },
      { name: "Growth Potential", score: 6 },
    ],
    []
  );

  const data = [
    {
      name: (
        <div className="d-flex align-items-center space-out">
          <img src={userPic} alt="user" className={styles.userPic} />
          <p className="mb-0">Kate Mcbeth Joan</p>
        </div>
      ),
      type: "KV Member",
      scores: (
        <div
          className="d-flex align-items-center flex-wrap space-out"
          style={{ rowGap: "1rem" }}
        >
          {evaluationScores.map((qa, i) => (
            <QA question={qa.name} answer={qa.score} key={`scores-${i}`} />
          ))}
        </div>
      ),

      total: "120%",
    },
  ];
  return (
    <div>
      <section>
        <Table headers={headers} data={[...data, ...data, ...data, ...data]} />
      </section>
    </div>
  );
};

const QA = ({ question = "", answer = "" }) => {
  return (
    <div className={styles.qa}>
      {question} - <b>{answer}</b>
    </div>
  );
};
