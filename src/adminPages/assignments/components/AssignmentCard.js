import React from "react";
import dots from "../../../assets/icons/dot.svg";
import { Tag } from "../../../components";
import { months, formatTime } from "../../../utils/helpers";
import doc from "../../../assets/images/doc.svg";
import styles from "../assignment.module.css";

export const AssignmentCard = ({ data = {} }) => {
  return (
    <div className={styles.programCard}>
      <section className="d-flex align-items-center justify-content-between mb-3">
        <h4>Create a business plan</h4>
        <AssignDropdown />
      </section>

      <section className="border-bottom mb-4 pb-3">
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
          morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit...
        </p>
      </section>

      <section className="d-flex align-items-center justify-content-between mb-4">
        <div className={`d-flex align-items-center ${styles?.date}`}>
          <h5 className="mb-0">{new Date(2022, 3, 5).getDate()}</h5>
          <p>{months[new Date(2022, 3, 5).getMonth()]}</p>
        </div>

        <div style={{ color: "#525151", fontSize: 14 }}>
          {formatTime(new Date(2022, 3, 5, 14, 0))}-
          {formatTime(new Date(2022, 3, 5, 18, 0))}
        </div>
      </section>

      <section
        className={`d-flex align-items-center justify-content-between ${styles.host}`}
      >
        <p style={{ color: "#6466AA" }}>Assigned to:</p>

        <div className="event_people">
          <img src={doc} alt="doc" />
          <img src={doc} alt="doc" />
          <img src={doc} alt="doc" />
        </div>
      </section>
    </div>
  );
};

const AssignDropdown = () => {
  return (
    <div className="dropdown mb-2">
      <div id="dropdownMenu2" data-toggle="dropdown" role="button">
        <img src={dots} alt="dots" />
      </div>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button className="dropdown-item" type="button">
          Assignment Details
        </button>
        <button className="dropdown-item" type="button">
          Responses
        </button>
        <button
          className="dropdown-item"
          type="button"
          style={{ color: "#E31937" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
