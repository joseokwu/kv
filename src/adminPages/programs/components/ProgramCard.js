import React from "react";
import dots from "../../../assets/icons/dot.svg";
import { Modal, Tag } from "../../../components";
import { months, formatTime } from "../../../utils/helpers";
import host from "../../../assets/images/sampleTeamMember.png";
import { ViewProgramDetails } from "./ViewProgramDetails";
import styles from "../programs.module.css";

export const ProgramCard = ({ data = {}, id = 0 }) => {
  return (
    <div className={styles.programCard}>
      <Modal id={`program-${id}`} width={768}>
        <ViewProgramDetails />
      </Modal>
      <section className="d-flex align-items-center justify-content-between">
        <h4 data-target={`#program-${id}`} data-toggle="modal">
          Go to market
        </h4>
        <ProgramDropdown />
      </section>
      <section
        className="d-flex align-items-center justify-content-between mb-3"
        data-target={`#program-${id}`}
        data-toggle="modal"
      >
        <div
          className="d-flex align-items-center"
          style={{ columnGap: "2rem" }}
        >
          <Tag name="Fintech" />
          <p className={styles[data?.status]}>Status: {data?.status}</p>
        </div>

        {data?.status === "declined" && (
          <p className="view-link">Assign new host</p>
        )}
      </section>

      <section
        className="border-bottom mb-4 pb-3"
        data-target={`#program-${id}`}
        data-toggle="modal"
      >
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
          morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit...
        </p>
      </section>

      <section
        className="d-flex align-items-center justify-content-between mb-4"
        data-target={`#program-${id}`}
        data-toggle="modal"
      >
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
        data-target={`#program-${id}`}
        data-toggle="modal"
      >
        <p style={{ color: "#6466AA" }}>Host:</p>

        <div className="d-flex align-items-center space-out">
          <img src={host} alt="host" />
          <p>Prima Jakatar</p>
        </div>
      </section>
    </div>
  );
};

const ProgramDropdown = () => {
  return (
    <div className="dropdown mb-2">
      <div id="dropdownMenu2" data-toggle="dropdown" role="button">
        <img src={dots} alt="dots" />
      </div>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button className="dropdown-item" type="button">
          Program Details
        </button>
        <button className="dropdown-item" type="button">
          Assignment Details
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