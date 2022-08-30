import React from "react";
import styles from "./assetBox.module.scss";
import pdf from "../../assets/icons/pdf-file.svg";
import download from "../../assets/images/cloud-download.png";

const AssetBoxPdf = ({ img, title = "Introduction to business", time = "1:30", url }) => {
  return (
    <div className={styles.container}>
      <main>
        <img width={26} height={32} src={pdf}></img>
      </main>
      <div className={styles.details}>
        <div>
          <section>
            <span>{title ?? "No name"}</span>
            <p>Section 1</p>
          </section>
          <span>
            <a download={title} href={url} rel="noopener noreferrer" target="_blank">
              <img height={16} src={download}></img>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AssetBoxPdf;
