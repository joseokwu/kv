import React from "react";
import more from "../../../assets/icons/more.svg";
import clock from "../../../assets/icons/clock.svg";
import eventImage from "../../../assets/icons/demoImg.png";

export const Upcoming = () => {
  return (
    <div>
      <section className="row">
        <article className="col-xl-4 col-lg-6">
          <ScheduleCard />
        </article>

        <article className="col-xl-4 col-lg-6"></article>

        <article className="col-xl-4 col-lg-6"></article>
      </section>
    </div>
  );
};

const ScheduleCard = ({ eventName = "Appleiine House Demo" }) => {
  return (
    <div className="scheduled-event-card">
      <section className="d-flex align-items-center justify-content-between mb-2">
        <h5>{eventName}</h5>
        <img src={more} alt="more" />
      </section>

      <section className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <p className="date-day-schedule">05</p>
          <p className="month-schedule">September</p>
        </div>

        <div className="d-flex align-items-center time-schedule">
          <img
            src={clock}
            alt="clock"
            width="12"
            height="12"
            className="mr-1"
          />
          <p>10am - 12 pm</p>
        </div>
      </section>

      <section></section>
    </div>
  );
};
