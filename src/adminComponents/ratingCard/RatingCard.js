import React from "react";
import styles from "./ratingCard.module.css";
import stars from "../../assets/icons/Stars.svg";

export const RatingCard = () => {
  return (
    <div className="px-4">
      <section
        className={`d-flex align-items-center mb-2 space-out justify-content-center ${styles.rating}`}
      >
        <img src={stars} alt="stars" />
        <p>4.5 out of 5</p>
      </section>

      <p className={`text-center mb-4 ${styles.count}`}>20 startup ratings</p>

      <section className="d-flex flex-wrap justify-content-center mx-auto space-out w-75 mb-4">
        <div className={`d-flex align-items-center ${styles.rateType}`}>
          <span>1</span> <p>Bad</p>
        </div>
        <div className={`d-flex align-items-center ${styles.rateType}`}>
          <span>2</span> <p>Very Poor</p>
        </div>
        <div className={`d-flex align-items-center ${styles.rateType}`}>
          <span>1</span> <p>Poor</p>
        </div>
        <div className={`d-flex align-items-center ${styles.rateType}`}>
          <span>6</span> <p>Good</p>
        </div>
        <div className={`d-flex align-items-center ${styles.rateType}`}>
          <span>8</span> <p>Very Good</p>
        </div>
        <div className={`d-flex align-items-center ${styles.rateType}`}>
          <span>4</span> <p>Best</p>
        </div>
        <div className={`d-flex align-items-center ${styles.rateType}`}>
          <span>3</span> <p>Excellent</p>
        </div>
      </section>
    </div>
  );
};
