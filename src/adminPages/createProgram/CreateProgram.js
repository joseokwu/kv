import React from "react";
import { Button, Select, TextArea, TextField } from "../../components";
import { sectors } from "../../utils/utils";
import searchIcon from "../../assets/icons/searchSm.svg";
import closeIcon from "../../assets/icons/closesm.svg";
import apple from "../../assets/icons/appleSmall.svg";
import mentorPic from "../../assets/images/teamMember.svg";
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
          options={sectors}
        />

        <TextField label="Topic" className="max_fill mb-4" />

        <TextField label="Workshop Title" className="max_fill mb-4" />

        <TextArea
          label="Session Description"
          rows={4}
          className="max_fill mb-4"
        />
        <div className="mb-4 pb-3 ">
          <p className="mb-3">Invite Mentor</p>
          <section className="search-input mb-3">
            <img src={searchIcon} alt="search" />
            <input type="search" placeholder="Search for mentor" />
          </section>
        </div>

        <div id="added-mentors" className={styles.mentorList}>
          {Array.from("us").map((x, i) => {
            return (
              <section
                className="d-flex align-items-center justify-content-between mb-3"
                ke={`invites-${i}`}
              >
                <div className="d-flex align-items-center space-out">
                  <img src={mentorPic} alt="mentor" />
                  <h5 className="mb-0">Kate Mcbeth Joan</h5>
                </div>
                <img src={closeIcon} alt="close" />
              </section>
            );
          })}
        </div>

        <div className="mb-4">
          <p className="mb-3">Invite Startups</p>
          <section className="search-input mb-3">
            <img src={searchIcon} alt="search" />
            <input type="search" placeholder="Search for mentor" />
          </section>
        </div>

        <div id="added-startups" className={styles.startupList}>
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
        </div>

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
        </div>

        <div className="d-flex align-items-center space-out mb-4">
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
          className="mb-4"
          placeholder="Enter email address"
          options={["10 minutes", "30 minutes", "1 hr"]}
          defaultValue="30 minutes"
        />

        <div className="d-flex align-items-center justify-content-between">
          <p>How often is this program?</p>

          <article className="d-flex align-items-center space-out">
            <label>
              <input
                type="radio"
                name="occurrence"
                id="Once"
                className="mr-1"
              />
              Once
            </label>
            <label>
              <input
                type="radio"
                name="occurrence"
                id="Weekly"
                className="mr-1"
              />
              Weekly
            </label>

            <label>
              <input
                type="radio"
                name="occurrence"
                id="Monthly"
                className="mr-1"
              />
              Monthly
            </label>
          </article>
        </div>
      </section>

      <section className={`d-flex justify-content-end ${styles.btnWrapper}`}>
        <Button label="Cancel" variant="gray" />
        <Button label="Create Session" variant="secondary" />
      </section>
    </div>
  );
};
