import React from "react";
import { Tag } from "../../components";
import apple from "../../assets/images/apple.svg";
import office from "../../assets/icons/office.svg";
import styles from "./selectionStartup.module.css";
import { useHistory } from "react-router-dom";

export const SelectionStartup = ({ data = {} }) => {
  const colors = {
    evaluated: "#0A6CF4",
    pending: "#D42323",
  };
  const { push } = useHistory();
  return (
    <div className={styles?.card}>
      <section className="d-flex align-items-center justify-content-between">
        <img src={apple} alt="logo" />
        <Tag
          name={data?.status}
          color={colors[data?.status]}
          className={styles.tag}
        />
      </section>
      <section className="d-flex align-items-center justify-content-between mb-3">
        <h4>Applane Insteen.</h4>
        <div className="d-flex align-items-center space-out">
          <img src={office} alt="office" />
          <p className={styles.location}>Lagos, Nigeria</p>
        </div>
      </section>

      <section className="d-flex align-items-center space-out border-bottom pb-3 mb-3">
        <Tag name="Accounting" color="#2E3192" />
        <Tag name="Idea stage" />
      </section>

      <section className="d-flex align-items-center justify-content-between">
        <p className={styles.result}>
          {data?.status === "evaluated" ? "Result: 2/10" : "Awaiting"}
        </p>

        <p
          className="view-link"
          style={{ color: data?.status === "pending" ? "#DADADA" : "" }}
          onClick={() => {
            push("/admin/selection_process/kv_answer/1");
          }}
          role={data?.status === "evaluated" ? "button" : ""}
        >
          View answer
        </p>
      </section>
    </div>
  );
};
