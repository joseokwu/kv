import React from "react";
import check from "../../assets/icons/checkboxMark.svg";
import styles from "./checkbox.module.css";

export const Checkbox = ({ label, ...rest }) => {
  return (
    <div className="d-flex align-items-center" style={{ columnGap: 12 }}>
      <div className={styles.checkbox}>
        <input type="checkbox" {...rest} />
        <span>
          <img src={check} alt="check" />
        </span>
      </div>
      <label className="mb-0" htmlFor={rest?.id}>
        {label}
      </label>
    </div>
  );
};
