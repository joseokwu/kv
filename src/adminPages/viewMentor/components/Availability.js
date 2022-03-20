import React from "react";
import location from "../../../assets/icons/locationSm.svg";
import phone from "../../../assets/icons/phoneSm.svg";
import { Button } from "../../../components";
import styles from "../viewMentor.module.css";

export const Availability = () => {
  return (
    <div className="row mx-0">
      <section className="col-12">
        <div className={styles.availCard}>
          <h2 className="border-bottom">Assistant Profile</h2>
          <section className="row mx-0 pt-4">
            <div className="col-lg-5">
              <h6>Mr Promise Amstel</h6>
              <a href="" className={styles.text}>
                promiseamstel@gmail.com
              </a>
            </div>

            <div className="col-lg-7">
              <article
                className={`d-flex align-items-center justify-content-end space-out mb-2 ${styles.contact_det}`}
              >
                <img src={location} alt="location" />
                <p className={styles.text}>San francisco United State</p>
              </article>

              <article
                className={`d-flex align-items-center justify-content-end space-out ${styles.contact_det}`}
              >
                <img src={phone} alt="phone" />
                <a href="" className={styles.text}>
                  +212456789865
                </a>
              </article>
            </div>
          </section>
        </div>
      </section>

      <section className="col-lg-4"></section>
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
