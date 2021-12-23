import React from "react";
import {
  Button,
  Modal,
  Select,
  TextArea,
  TextField,
} from "../../../components";
import { GuestItem } from "./ScheduleModal";
import remove from "../../../assets/icons/close.svg";

export const EditScheduleModal = ({ id = "", image = "" }) => {
  return (
    <Modal title="Edit Schedule" id={`editScheduleModal-${id}`}>
      <div className="px-4">
        <section className="mb-4">
          <TextField
            label="Title of Schedule"
            placeholder="Appleiine House Demo"
            className="edit-schedule-input"
          />
        </section>

        <section className="mb-3">
          <TextArea
            label="Description"
            rows={5}
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus 
morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
 adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
 elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet,
 consectetur adipiscing elit. "
          />
        </section>

        <section className="mb-4">
          <div className="d-flex align-items-center my-4">
            <p className="schedule-modal-subtitle">Add picture:</p>
            <p className="schedule-underlined ml-1">Change photo</p>
          </div>
        </section>

        {image.toString().length > 0 && (
          <section className="mt-3">
            <img src={image} alt="event" className="schedule-module-image" />
          </section>
        )}

        <section className="d-flex align-items-start justify-content-between">
          <TextField type="date" label="From (day)" />
          <p role="button" className="schedule-underlined">
            Add another day
          </p>
        </section>

        <section className="row">
          <div className="col-lg-6">
            <Select label="Start time" options={["10am"]} />
          </div>
          <div className="col-lg-6">
            <Select label="End time" options={["12pm"]} />
          </div>
        </section>

        <section className="mb-4">
          <div className="d-flex align-items-center my-4">
            <p className="schedule-modal-subtitle">Visibility:</p>
            <p className="schedule-underlined ml-1">Public</p>
          </div>

          <div className="d-flex align-items-center my-4">
            <p className="schedule-modal-subtitle">Join with:</p>
            <a
              href="https://meet.google.com"
              className="schedule-underlined ml-1"
            >
              Google Meet
            </a>
          </div>
        </section>

        <section className="mb-4">
          <div className="mb-3">
            <TextField
              placeholder="Enter Email Address"
              label="Add people"
              className="edit-schedule-input"
            />
          </div>

          <div className="flex-align justify-content-between">
            <GuestItem name="Micheal Smith" />
            <img src={remove} alt="remove" />
          </div>
        </section>

        <section>
          <p className="schedule-underlined ml-1 mb-3 ">
            Add people (optional)
          </p>
          <p className="schedule-underlined ml-1 mb-3">Add Location</p>
          <div className="d-flex align-items-center mb-3">
            <p className="schedule-modal-subtitle">Notify me:</p>
            <p className="schedule-underlined ml-1">30 minutes before</p>
          </div>
        </section>

        <section className="text-right my-4">
          <Button label="Save" variant="secondary" />
        </section>
      </div>
    </Modal>
  );
};
