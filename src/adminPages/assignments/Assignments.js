import React from "react";
import styles from "./assignment.module.css";
import left from "../../assets/icons/chervonLeft.svg";
import { useHistory } from "react-router-dom";
import { AssignmentCard } from "./components/AssignmentCard";

export const Assignments = () => {
  const { goBack } = useHistory();

  const data = [1, 2, 3, 4];
  return (
    <div className="p-5">
      <section
        className="d-flex align-items-center mb-3"
        onClick={() => goBack()}
        role="button"
        style={{ width: "fit-content" }}
      >
        <img
          src={left}
          alt="left"
          className="mr-2"
          style={{ transform: "rotate(180deg)" }}
        />
        <p className="bread-start" role="button">
          Go back
        </p>
      </section>

      <p className="mt-5">Total Assignments created: 6</p>

      <section className="row mt-4" style={{ maxWidth: 2000 }}>
        {data?.length > 0 &&
          data?.map((item, i) => {
            return (
              <div className="col-lg-6 mb-3">
                <AssignmentCard />
              </div>
            );
          })}
      </section>
    </div>
  );
};
