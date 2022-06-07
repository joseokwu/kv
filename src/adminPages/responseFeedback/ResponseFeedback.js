import React from "react";
import { AssignmentFile } from "../../adminComponents";
import { GoBack } from "../../components";
import { months } from "../../utils/helpers";
import user from "../../assets/images/sampleTeamMember.png";
import styles from "./responseFeedback.module.css";

export const ResponseFeedback = () => {
  return (
    <div className="p-5 bg-white" style={{ minHeight: "93vh" }}>
      <GoBack />
      <section className="row my-5 mx-auto" style={{ maxWidth: 851 }}>
        <article className="col-lg-4">
          <AssignmentFile />
        </article>

        <article className="col-lg-8 d-flex align-items-center">
          <div className={styles?.feedback_content}>
            <h6>Business plan for Applane Insteen</h6>
            <p>Submitted on</p>

            <div
              className={`d-flex align-items-center ${styles.feedback_date}`}
            >
              <b>{new Date(2022, 8, 12).getDate()}</b>
              <p>{months[new Date(2022, 8, 12).getMonth()]}</p>
            </div>
          </div>
        </article>
      </section>

      <section className="mx-auto" style={{ maxWidth: 851, padding: "0 15px" }}>
        <article>
          <h5 className={styles?.feedbackHeader}>Feedback</h5>

          <div>
            {Array.from("us").map((u, i) => (
              <Feedback key={`feedback-${i}`} />
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

const Feedback = () => {
  return (
    <section className={styles.feedback}>
      <div>
        <span>
          <img src={user} alt="user" />
          <div>
            <p>Joan Amanpour</p>
            <small>Data Scientist</small>
          </div>
          <small>2 Days Ago</small>
        </span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
          morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
          lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.{" "}
        </p>
      </div>
    </section>
  );
};
