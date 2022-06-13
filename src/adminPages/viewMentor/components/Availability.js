import React, { useState } from "react";
import Calendar from "react-calendar";
import location from "../../../assets/icons/locationSm.svg";
import phone from "../../../assets/icons/phoneSm.svg";
import { Button } from "../../../components";
import styles from "../viewMentor.module.css";
import "react-calendar/dist/Calendar.css";

export const Availability = ({ data = {} }) => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="row mx-0">
      <section className="col-12">
        <div className={styles.availCard}>
          <h2 className="border-bottom">Assistant Profile</h2>
          <section className="row mx-0 pt-4">
            <div className="col-lg-5">
              <h6>{`${data?.assistantFirstname} ${data?.assistantLastname}`}</h6>
              <a
                href={`mailto:${data?.assistantEmail}`}
                className={styles.text}
              >
                {data?.assistantEmail}
              </a>
            </div>

            <div className="col-lg-7">
              <article
                className={`d-flex align-items-center justify-content-end space-out mb-2 ${styles.contact_det}`}
              >
                <img src={location} alt="location" />
                <p
                  className={styles.text}
                >{`${data?.assistantCity} ${data?.assistantCountry}`}</p>
              </article>

              <article
                className={`d-flex align-items-center justify-content-end space-out ${styles.contact_det}`}
              >
                <img src={phone} alt="phone" />
                <a href="" className={styles.text}>
                  {data?.assistantPhone}
                </a>
              </article>
            </div>
          </section>
        </div>
      </section>

      <section className="col-lg-4">
        {" "}
        <Calendar onChange={onChange} value={value} />
      </section>
      <section className="col-lg-8">
        <div
          className={`d-flex align-items-center justify-content-center ${styles.availCard}`}
          style={{ minHeight: 360 }}
        >
          <article className="text-center">
            <p className={styles.noSchedule}>No Schedule</p>
            <p className={styles.scheduleMessage}>
              Available between 10:00am-13:00pm
            </p>
            <div>
              <Button label="Invite" variant="secondary" />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
