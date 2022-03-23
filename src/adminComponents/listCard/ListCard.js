import React from "react";
import styles from "./listCard.module.css";

export const ListCard = ({ data = {}, bullet = true }) => {
  console.log("data", data?.list);
  return (
    <div className={styles.card}>
      <h6>{data?.title}</h6>

      <ul
        style={{
          listStyle: bullet ? "" : "none",
          padding: bullet ? "" : "0px",
        }}
      >
        {data?.list?.length > 0 &&
          data?.list.map((d, i) => (
            <li
              key={`${d}-${i}`}
              className={i === data?.list?.length - 1 ? "mb-0" : ""}
            >
              {d}
            </li>
          ))}
      </ul>
    </div>
  );
};
