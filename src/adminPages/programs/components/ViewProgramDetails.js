import React from "react";
import { Button, Select, Tag } from "../../../components";
import { formatTime, months } from "../../../utils/helpers";
import { GuestItem } from "../../events/components/index";
import clock from "../../../assets/icons/clocksm.svg";
import styles from "../programs.module.css";

export const ViewProgramDetails = () => {
  const ratingData = [
    { name: "Bad", count: 3 },
    { name: "Very poor", count: 5 },
    { name: "Poor", count: 6 },
    { name: "Good", count: 2 },
    { name: "Very Good", count: 5 },
    { name: "Best", count: 6 },
    { name: "Excellent", count: 10 },
  ];
  return (
    <div className="px-4">
      <section
        className="d-flex align-items-center mb-3"
        style={{ columnGap: "2rem" }}
      >
        <h5>Legal Frame Work</h5>
        <Tag name="Fintech" />
      </section>

      <section className="d-flex align-items-center space-out mb-4">
        <p>Workshop -</p>
        <p> Legal Sessions</p>
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

      <section className="row mb-4">
        <div className="col-lg-6">
          <section>
            <h5>Mentor</h5>
            <PersonDetail
              data={{
                name: "Prima Jakatar",
                title: "Partner at Apple Inc. Canada",
              }}
            />
          </section>
        </div>

        <div className="col-lg-6">
          <section className={styles.box}>
            <p className="mb-3">Rescheduled Date</p>
            <article className="d-flex align-items-center justify-content-between mb-3">
              <div className={`d-flex align-items-center ${styles?.date}`}>
                <h5 className="mb-0">{new Date(2022, 3, 5).getDate()}</h5>
                <p>{months[new Date(2022, 3, 5).getMonth()]}</p>
              </div>
              <div
                style={{ color: "#525151", fontSize: 14, columnGap: "7.5px" }}
                className="d-flex align-items-center"
              >
                <img src={clock} alt="clock" />
                {formatTime(new Date(2022, 3, 5, 14, 0))}-
                {formatTime(new Date(2022, 3, 5, 18, 0))}
              </div>
            </article>
            <div
              className="d-flex align-items-end"
              style={{ columnGap: "1rem" }}
            >
              <Button label="Accept" variant="secondary" />
              <p className="delete-link">Assign new host</p>
            </div>
          </section>
        </div>
      </section>

      <section className={styles.box}>
        <h4 className="mb-3">Session Description</h4>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
          morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
          lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </section>

      <section className="my-4 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center space-out">
          <p>Occurrence :</p>
          <Select options={["Once", "Weekly", "Monthly"]} defaultValue="Once" />
        </div>

        <div className="d-flex align-items-center space-out">
          <p>Notify :</p>
          <Select
            options={["10 mins", "30 mins", "1 hr"]}
            defaultValue="30 mins"
          />
        </div>
      </section>

      <section>
        <p className="mb-3">Invitees</p>

        <article className="row">
          {Array.from("four").map((x, i) => {
            return (
              <div className="col-lg-6 mb-3">
                <GuestItem />
              </div>
            );
          })}
        </article>
      </section>

      <section className="mb-4">
        <p className="mb-2">Rating</p>

        <div className="d-flex space-out align-items-center">
          {ratingData.length > 0 &&
            ratingData?.map((r, i) => {
              return (
                <span className={styles?.rateStrip}>
                  {r.count} {r.name}
                </span>
              );
            })}
        </div>
      </section>
    </div>
  );
};

const PersonDetail = ({ data }) => {
  return (
    <div className={styles.person}>
      {data?.img ? <img src="" alt="" /> : <span></span>}
      <section>
        <p>{data?.name}</p>
        <p>{data?.title}</p>
      </section>
    </div>
  );
};
