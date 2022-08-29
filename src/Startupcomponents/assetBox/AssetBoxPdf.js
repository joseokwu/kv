import React from "react";
import styles from "./assetBox.module.scss";
import pdf from "../../assets/icons/pdf-file.svg";
import download from "../../assets/images/cloud-download.png";

const AssetBoxPdf = ({ img, title = "Introduction to business", time = "1:30" }) => {
  return (
    <div className={styles.container}>
      <main>
        <img width={26} height={32} src={pdf}></img>
      </main>
      <div className={styles.details}>
        <div>
          <span>{title}</span>
          <span>
            <img height={16} src={download}></img>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AssetBoxPdf;
