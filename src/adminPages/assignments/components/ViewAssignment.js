import React from "react";
import { formatTime, months } from "../../../utils/helpers";
import clock from "../../../assets/icons/clocksm.svg";
import apple from "../../../assets/icons/appleSmall.svg";
import styles from "../assignment.module.css";
import { AssignmentFile } from "../../../adminComponents";

export const ViewAssignment = () => {
  const startups = [
    { name: "Applane Insteen." },
    { name: "Yebox." },
    { name: "Numba." },
  ];
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

        <div
          style={{ color: "#525151", fontSize: 14 }}
          className="d-flex align-items-center"
        >
          <img src={clock} alt="clock" className="mr-1" />
          {formatTime(new Date(2022, 3, 5, 14, 0))}-
          {formatTime(new Date(2022, 3, 5, 18, 0))}
        </div>
      </section>

      <section className="border-bottom mb-5 pb-5">
        <div className={styles.startups_box}>
          <h5 className="mb-3">Assigned startups</h5>
          <ul>
            {startups.length > 0 ? (
              startups?.map((startup, i) => {
                return (
                  <li>
                    <img src={apple} alt="apple" />
                    <p>{startup?.name}</p>
                  </li>
                );
              })
            ) : (
              <p>No Startup yet</p>
            )}
          </ul>
        </div>
      </section>

      <section className="mb-4">
        <AssignmentFile />
      </section>
    </div>
  );
};
