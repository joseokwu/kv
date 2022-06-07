import React from "react";
import styles from "../programs.module.css";
import download from "../../../assets/icons/download.svg";
import { Button } from "../../../components";

export const UploadProgramInfo = () => {
  return (
    <div className="px-4">
      <section className={`mb-5 ${styles.wrapInputFile}`}>
        <input type="file" name="file" id="file" />
        <img src={download} alt="download" className="mb-3" />
        <p className={styles.drag}>Drag & Drop</p>
        <p className={styles.info}>Drag files or click here to upload</p>
        <Button label="Upload Files" />
      </section>

      <section className="mb-5">
        <Button label="Save" />
      </section>
    </div>
  );
};
