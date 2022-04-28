import React from "react";
import { formatTime, months } from "../../utils/helpers";
import bigClock from "../../assets/icons/bigclock.svg";
import { Button } from "../../components";
import apple from "../../assets/images/apple.svg";
import styles from "./viewSession.module.css";

export const ViewSession = () => {
  return (
    <div className="p-4">
      <section className="mb-4">
        <h3 className={styles.header}>Appleiine House Demo</h3>
      </section>

      <section className="d-flex align-items-center mb-3">
        <p className="pending_date pr-5">
          <span>{new Date(2022, 9, 5).getDate()}</span>{" "}
          {months[new Date(2022, 9, 5).getMonth()]}
        </p>

        <p className="pending_time pt-1">
          <img src={bigClock} alt="clock" />{" "}
          {formatTime(new Date(2022, 9, 5, 10, 0))}-
          {formatTime(new Date(2022, 9, 5, 14, 0))}
        </p>
      </section>

      <section className={`mb-4 ${styles.descCard}`}>
        <p className="mb-3">Description</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
          morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
          lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </section>

      <section className="mb-4">
        <p className={`mb-3 ${styles.text}`}>Event Link</p>
        <div className="d-flex align-items-end" style={{ columnGap: "1.7rem" }}>
          <span>
            <img src="" alt="" />
            <a
              href="https://meet.google.com/jce-wata-fux"
              className="view-link"
              style={{ fontSize: 16 }}
            >
              meet.google.com/jce-wata-fux
            </a>
          </span>

          <Button label="Join Event" variant="gray" />
        </div>
      </section>

      <section className="mb-4">
        <p className={`mb-3 ${styles.text}`}>Startups</p>

        <article className="row">
          {Array.from("fiver").map((d, i) => {
            return (
              <div className="col-lg-6 mb-3" key={`startups-${i}`}>
                <div className="d-flex align-items-center space-out">
                  <img src={apple} alt="startup" />
                  <p className={styles.text} style={{ color: "#3E3E3E" }}>
                    Apple inc
                  </p>
                </div>
              </div>
            );
          })}
        </article>
      </section>

      <section>
        <p className={`mb-3 ${styles.text}`}>Host</p>
        <NameWithInitial name="Kate Mcbeth" />
      </section>
    </div>
  );
};

const NameWithInitial = ({ name = "", color = "#18A615" }) => {
  return (
    <div className="d-flex align-items-center">
      <section
        className={`mr-3 ${styles.initial}`}
        style={{ background: color }}
      >
        {name?.substring(0, 1)}
      </section>
      <p className={styles.text} style={{ color: "#3E3E3E" }}>
        {name}
      </p>
    </div>
  );
};
