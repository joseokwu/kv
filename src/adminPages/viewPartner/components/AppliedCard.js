import React from "react";
import { Badge, Tag } from "../../../components";
import styles from "../viewPartner.module.css";
import apple from "../../../assets/images/apple.svg";
import expired from "../../../assets/icons/expired.svg";
import declined from "../../../assets/icons/declinedIcon.svg";
import approved from "../../../assets/icons/approved.svg";

export const AppliedCard = ({ data = {} }) => {
  const status = {
    pending: <p className={styles.applyPending}>Pending</p>,
    approved: (
      <p className={`${styles.applyApproved}`}>
        <span>
          <img src={approved} alt="approved" />
        </span>
        Approved
      </p>
    ),
    expired: (
      <p className={styles.applyExpired}>
        <span>
          <img src={expired} alt="expired" />
        </span>
        Expired
      </p>
    ),
    declined: (
      <p className={`${styles.applyDeclined}`}>
        <span>
          <img src={declined} alt="declined" />
        </span>
        Declined
      </p>
    ),
  };
  return (
    <div className={styles.appliedCard}>
      <section className="d-flex align-items-center justify-content-between">
        <img src={apple} alt="apple" />
        <Badge name="Acceleration" />
      </section>
      <section>
        <h3>Applane Insteen.</h3>
        <div className="d-flex flex-wrap mb-2">
          <Tag name="Accounting" />
        </div>

        <p className={`pt-1 ${styles.appliedDesc}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
          <span>Read more</span>
        </p>
      </section>

      <section className="d-flex align-items-center justify-content-between mb-4">
        <article>
          <p>Applied 12/Oct/21</p>
          <p>Contact Person: Ada Ify</p>
        </article>
        <article className="text-right">
          <p>Adaify@gmail.com</p>
          <p>Contact No: 08092936789</p>
        </article>
      </section>

      <section className={styles.applyStatus}>{status[data?.status]}</section>
    </div>
  );
};
