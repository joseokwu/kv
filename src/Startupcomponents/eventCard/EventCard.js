import React from "react";
import calender from "../../assets/icons/calender.svg";
import person from "../../assets/images/sampleEventPerson.png";
import "./eventCard.css";

export const EventCard = ({ color = "" }) => {
  return (
    <div className="event-card" style={{ background: color }}>
      <article className="d-flex align-items-center">
        <section className="event-icon">
          <img src={calender} alt="calender" />
        </section>
        <section>
          <p className="event-date">Date: 13 oct 2021</p>
          <p className="event-name">Applane Demo day</p>
          <p className="event-time">10:00pm - 12pm</p>
        </section>
      </article>

      <section className="event-people">
        <img src={person} alt="person" />
        <img src={person} alt="person" />
        <img src={person} alt="person" />
      </section>
    </div>
  );
};
