import React from "react";
import { months } from "../../../utils/helpers";
import styles from "../viewSelectionAnswer.module.css";
import user from "../../../assets/images/sampleTeamMember.png";
import maindoc from "../../../assets/images/mani-doc.svg";
import pitchicon from "../../../assets/icons/pitchd.svg";
import download from "../../../assets/icons/downloadoutline.svg";
import { AssignmentFile } from "../../../adminComponents";

export const Assignments = () => {
  return (
    <div className={styles.assignment}>
      <section className="row d-flex align-items-center mb-5">
        <div className="col-lg-3">
          <AssignmentFile />
        </div>
        <div className="col-lg-9">
          <h5 className="mb-4">Business plan for Applane Insteen</h5>
          <small>Submitted on</small>
          <span className="d-flex align-items-center">
            <h6 className="mb-0">{new Date(2022, 5, 30).getDate() || 5}</h6>
            <p>{months[new Date(2022, 5, 30).getMonth() || 0]}</p>
          </span>
        </div>
      </section>

      <section>
        <h5 className="mb-4">Feedback</h5>
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
            morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.{" "}
          </p>
        </div>
      </section>
    </div>
  );
};
