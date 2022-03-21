import React from "react";
import styles from "./yesNo.module.css";

export const YesNo = ({ text = "" }) => {
  return (
    <div className={styles.decision}>
      <span></span>
      {text}
    </div>
  );
};
