import React from "react";
import { Table } from "../../../adminComponents";
import { formatDate } from "../../../utils/helpers";
import apple from "../../../assets/images/apple.svg";
import teamMember from "../../../assets/images/sampleTeamMember.png";
import { Tag } from "../../../components";
import styles from "../selection.module.css";

export const MentorEvaluation = () => {
  const header = [
    { title: "#Batch ID", accessor: "id" },
    { title: "Date", accessor: "date" },
    { title: "Startups", accessor: "startups" },
    { title: "Selection Team", accessor: "team" },
    { title: "Status", accessor: "status" },
    { title: "Action", accessor: "action" },
  ];

  const data = [
    {
      id: "0001",
      date: formatDate(new Date(2021, 7, 13)),
      startups: (
        <section className="event_people">
          {Array.from("fiver").map((item, i) => {
            return (
              <img
                src={apple}
                alt="doc"
                key={`over-${i}`}
                style={{ position: "relative", left: i * -5 }}
              />
            );
          })}
        </section>
      ),

      team: (
        <section className="event_people">
          {Array.from("fiver").map((item, i) => {
            return (
              <img
                src={teamMember}
                alt="doc"
                key={`over-${i}`}
                style={{ position: "relative", left: i * -5 }}
              />
            );
          })}
        </section>
      ),

      status: (
        <div className="d-flex space-out flex-wrap">
          <Tag name="Active" color="#2E3192" />
        </div>
      ),

      action: (
        <div className="d-flex align-items-center space-out">
          <p className="view-link" role="button">
            View
          </p>
          <p role="button" className="delete-link">
            Delete
          </p>
        </div>
      ),
    },
    {
      id: "0002",
      date: formatDate(new Date(2021, 7, 13)),
      startups: (
        <section className="event_people">
          {Array.from("fiver").map((item, i) => {
            return (
              <img
                src={apple}
                alt="doc"
                key={`over-${i}`}
                style={{ position: "relative", left: i * -5 }}
              />
            );
          })}
        </section>
      ),

      team: (
        <section className="event_people">
          {Array.from("fiver").map((item, i) => {
            return (
              <img
                src={teamMember}
                alt="doc"
                key={`over-${i}`}
                style={{ position: "relative", left: i * -5 }}
              />
            );
          })}
        </section>
      ),

      status: (
        <div className="d-flex space-out flex-wrap">
          <Tag name="Completed" color="#18A615" />
        </div>
      ),
      action: (
        <div className="d-flex align-items-center space-out">
          <p className="view-link" role="button">
            View
          </p>
          <p role="button" className="delete-link">
            Delete
          </p>
        </div>
      ),
    },
  ];
  return (
    <div>
      {data?.length === 0 ? (
        <section
          className={`d-flex align-items-center justify-content-center ${styles.empty}`}
        >
          No evaluation group has been created
        </section>
      ) : (
        <section>
          <Table headers={header} data={data} />
        </section>
      )}
    </div>
  );
};
