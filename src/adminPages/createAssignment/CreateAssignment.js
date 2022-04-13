import React from "react";
import { Button, Select, TextArea, TextField } from "../../components";
import download from "../../assets/icons/download.svg";
import apple from "../../assets/icons/appleSmall.svg";
import closeIcon from "../../assets/icons/closesm.svg";
import styles from "./createAssignment.module.css";

export const CreateAssignment = () => {
  return (
    <div className="py-5 px-4">
      <section className={styles.createProgram}>
        <h3 className="border-bottom pb-4">Create Assignment</h3>

        <Select label="Programs" className="max_fill mb-4" />

        <TextField label="Topic" className="max_fill mb-4" />

        <TextArea label="Description" className="max_fill mb-4" rows="4" />

        <div className={`mb-4 ${styles.wrapInputFile}`}>
          <input type="file" name="file" id="file" />
          <img src={download} alt="download" className="mb-3" />
          <p className={styles.drag}>Drag & Drop</p>
          <p className={styles.info}>Drag files or click here to upload</p>
          <Button label="Upload Files" />
        </div>

        <TextField label="Deadline (day)" className="mb-4" type="date" />

        <article className="row">
          <div className="col-lg-4">
            <TextField
              type="time"
              className="max_fill mb-4"
              label="Start Time"
            />
          </div>

          <div className="col-lg-4">
            <TextField type="time" className="max_fill mb-4" label="End Time" />
          </div>
        </article>

        <div
          className="d-flex align-items-center justify-content-end space-out"
          style={{ marginBottom: -30 }}
        >
          <label>
            <input type="checkbox" name="all" id="all" className="mr-1" />
            Add all
          </label>
        </div>
        <Select
          label="Add Sartups"
          className="max_fill mb-4"
          placeholder="Enter email address"
        />

        {Array.from("us").map((x, i) => {
          return (
            <section
              className="d-flex align-items-center justify-content-between mb-3"
              ke={`invites-${i}`}
            >
              <div className="d-flex align-items-center space-out">
                <img src={apple} alt="apple" />
                <h5 className="mb-0">Applane Insteen.</h5>
              </div>
              <img src={closeIcon} alt="close" />
            </section>
          );
        })}
      </section>

      <section className={styles.btnWrapper}>
        <Button label="Save" variant="secondary" />
      </section>
    </div>
  );
};
