import React from "react";
import { Button, Select, TextField } from "../../components";
import searchIcon from "../../assets/icons/searchSm.svg";
import closeIcon from "../../assets/icons/closesm.svg";
import apple from "../../assets/icons/appleSmall.svg";
import copyIcon from "../../assets/icons/copy.svg";
import styles from "./createProgram.module.css";

export const CreateProgram = () => {
  return (
    <div className="py-5 px-4">
      <section className={styles.createProgram}>
        <h3 className="border-bottom pb-4">Create Program</h3>

        <Select
          label="Choose sector from program list"
          className="max_fill mb-4"
        />

        <TextField label="Topic" className="max_fill mb-4" />

        <TextField label="Workshop Title" className="max_fill mb-4" />

        <div className="mb-4">
          <p className="mb-3">Guest</p>
          <section className="search-input mb-3">
            <img src={searchIcon} alt="search" />
            <input type="search" placeholder="Search for mentor" />
          </section>
        </div>

        <TextField label="Session Description" className="max_fill mb-4" />

        <div className="row">
          <article className="col-lg-4">
            <TextField
              type="time"
              className="max_fill mb-4"
              label="Start Time"
            />
          </article>

          <article className="col-lg-4">
            <TextField type="time" className="max_fill mb-4" label="End Time" />
          </article>

          <article className="col-lg-4">
            <TextField
              className="max_fill mb-4"
              label="Duration"
              placeholder="Minutes"
            />
          </article>
        </div>

        <div
          className="d-flex align-items-center justify-content-end space-out"
          style={{ marginBottom: -30 }}
        >
          <label>
            <input
              type="checkbox"
              name="userType"
              id="mentor"
              className="mr-1"
            />
            Mentor
          </label>
          <label>
            <input
              type="checkbox"
              name="userType"
              id="investor"
              className="mr-1"
            />
            Inventor
          </label>

          <label>
            <input
              type="checkbox"
              name="userType"
              id="startup"
              className="mr-1"
            />
            Startup
          </label>
        </div>

        <Select
          label="Invite People"
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

        <div className="d-flex align-items-center space-out mb-4 mt-5">
          <p>Join with:</p>
          <Select
            options={["Zoom", "Google Meet", "Skype"]}
            defaultValue="Zoom"
          />
        </div>

        <div
          className={`d-flex align-items-center justify-content-between mb-4 ${styles.copyLink}`}
        >
          <p>meet.google.com/jce-wata-fux</p>
          <img src={copyIcon} alt="copy" />
        </div>

        <Select
          label="Notify me"
          className="max_fill mb-4"
          placeholder="Enter email address"
          options={["10 minutes", "30 minutes", "1 hr"]}
          defaultValue="30 minutes"
        />

        <div className="d-flex align-items-center justify-content-between">
          <p>How often is this program?</p>

          <article className="d-flex align-items-center space-out">
            <label>
              <input
                type="checkbox"
                name="occurrence"
                id="Once"
                className="mr-1"
              />
              Once
            </label>
            <label>
              <input
                type="checkbox"
                name="occurrence"
                id="Weekly"
                className="mr-1"
              />
              Weekly
            </label>

            <label>
              <input
                type="checkbox"
                name="occurrence"
                id="Monthly"
                className="mr-1"
              />
              Monthly
            </label>
          </article>
        </div>
      </section>

      <section className={styles.btnWrapper}>
        <Button label="Save" variant="secondary" />
      </section>
    </div>
  );
};
