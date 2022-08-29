import React from "react";
import styles from "./assetBox.module.scss";
import play from "../../assets/icons/play_circle_filled.svg";

const AssetBoxVid = ({ img, title = "Introduction to business", time = "1:30" }) => {
  return (
    <div className={styles.container}>
      <main>
        <img height={44} width={44} src={play}></img>
      </main>
      <div className={styles.details}>
        <div>
          <span>{title}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default AssetBoxVid;
