import React from "react";
import { Badge, Tag } from "../../components";
import styles from "./expCard.module.css";

export const ExpCard = ({ data = {} }) => {
  return (
    <div className={styles.card}>
      <h6>{data?.title}</h6>
      <p>{data?.company}</p>

      <ul className={`px-3`}>
        <li className="mb-3">
          Vitae elementum et diam vitae nec, fringilla vivamus posuere neque.
        </li>
        <li className="mb-3">
          Vitae elementum et diam vitae nec, fringilla vivamus posuere neque.
          Vitae elementum et diam vitae nec, fringilla vivamus posuere neque.
        </li>
        <li className="mb-3">
          Vitae elementum et diam vitae nec, fringilla vivamus posuere neque.
          Vitae elementum et diam vitae nec, fringilla vivamus posuere neque.
        </li>
      </ul>
      <section className="d-flex space-out border-bottom pb-4 mb-4">
        <Tag name="Technology" color="#40439A" />
        <Tag name="Technology" color="#40439A" />
        <Tag name="Technology" color="#40439A" />
      </section>

      <section>
        <p className={`mb-3 ${styles.text}`}>
          Have you been one of the first 10 employees of a company that has been
          valued or exited at $5m or more?
        </p>
        <Tag name="Yes" color="#40439A" />
      </section>
    </div>
  );
};
