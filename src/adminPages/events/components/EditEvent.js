import React from "react";
import { Button, Select, TextField } from "../../../components";
import copyIcon from "../../../assets/icons/copy.svg";
import searchIcon from "../../../assets/icons/searchSm.svg";
import closeIcon from "../../../assets/icons/closesm.svg";
import styles from "../events.module.css";
import { GuestItem } from "./GuestItem";

export const EditEvent = ({ data = {} }) => {
  return (
    <div className="px-4">
      <form>
        <TextField
          label="Title of Event"
          placeholder="Enter event title"
          className="max_fill mb-4"
        />

        <TextField
          label="Description"
          placeholder="Describe event"
          className="max_fill mb-1"
        />
        <section className="d-flex align-items-center justify-content-start mb-4">
          <p>Add picture:</p>
          <p className="view-link" role="button">
            Upload photo
          </p>
        </section>

        <section className="mb-4 text-right">
          <p className="view-link" role="button">
            Add another day
          </p>
        </section>

        <TextField
          label="From (day)"
          placeholder="Thursday 17th Oct 2021"
          className="w-75 mb-4"
          type="date"
        />

        <div className="row mb-3">
          <section className="col-lg-6">
            <TextField
              type="time"
              className="max_fill mb-4"
              label="Start time"
            />
          </section>
          <section className="col-lg-6">
            <TextField type="time" className="max_fill mb-4" label="End time" />
          </section>
        </div>

        <section className="d-flex align-items-center space-out mb-4">
          <p>Visibility:</p>
          <Select options={["Personal", "Public"]} defaultValue="Personal" />
        </section>

        <section className="d-flex align-items-center space-out mb-4">
          <p>Join with:</p>
          <Select
            options={["Zoom", "Google Meet", "Skype"]}
            defaultValue="Google Meet"
          />
        </section>

        <section
          className={`d-flex align-items-center justify-content-between mb-4 ${styles.copyLink}`}
        >
          <p>meet.google.com/jce-wata-fux</p>
          <img src={copyIcon} alt="copy" />
        </section>

        <Select
          label="Notify me"
          options={["10 minutes", "30 minutes", "1 hours"]}
          defaultValue="30 minutes"
          className="max_fill mb-4"
        />

        <section className="mb-4">
          <p className="mb-3">Add People</p>
          <section className="search-input mb-3">
            <img src={searchIcon} alt="search" />
            <input type="search" placeholder="Search startup list" />
          </section>

          {Array.from("us").map((x, i) => {
            return (
              <section
                className="d-flex align-items-center justify-content-between mb-3"
                key={`guest-${i}`}
              >
                <GuestItem />
                <img src={closeIcon} alt="close" />
              </section>
            );
          })}
        </section>

        <section className="text-right mb-4">
          <Button label="Save" variant="secondary" />
        </section>
      </form>
    </div>
  );
};
