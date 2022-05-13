import React from "react";
import { formatTime, months } from "../../../utils/helpers";
import styles from "../assignment.module.css";

export const ViewAssignment = () => {
  return (
    <div className="px-4">
      <section>
        <h4>Create a business plan</h4>
      </section>
      <section
        className="d-flex align-items-center mb-4"
        style={{ columnGap: "1.2rem" }}
      >
        <div className={`d-flex align-items-center ${styles?.date}`}>
          <h5 className="mb-0">{new Date(2022, 3, 5).getDate()}</h5>
          <p>{months[new Date(2022, 3, 5).getMonth()]}</p>
        </div>

        <p style={{ color: "#525151" }}>
          <b>Duration - </b>45 minutes
        </p>

        <div style={{ color: "#525151", fontSize: 14 }}>
          {formatTime(new Date(2022, 3, 5, 14, 0))}-
          {formatTime(new Date(2022, 3, 5, 18, 0))}
        </div>
      </section>
    </div>
  );
};
