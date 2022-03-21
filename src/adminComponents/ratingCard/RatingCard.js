import React from "react";
import styles from "./ratingCard.module.css";
import stars from "../../assets/icons/Stars.svg";

export const RatingCard = () => {
  const allRatings = [
    { name: "Bad", count: 1 },
    { name: "Very Poor", count: 2 },
    { name: "Poor", count: 1 },
    { name: "Good", count: 6 },
    { name: "Very Good", count: 8 },
    { name: "Best", count: 4 },
    { name: "Excellent", count: 3 },
  ];
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
        {allRatings?.length > 0 &&
          allRatings?.map((rate, i) => {
            return (
              <div
                className={`d-flex align-items-center ${styles.rateType}`}
                key={`rate-${i}`}
              >
                <span>{rate?.count}</span> <p>{rate.name}</p>
              </div>
            );
          })}
      </section>
    </div>
  );
};
