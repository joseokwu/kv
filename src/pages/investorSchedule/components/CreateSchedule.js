import React from "react";
import { Modal, TextField, Select, Button } from "../../../components";

export const CreateSchedule = () => {
  return (
    <div>
      <Modal title="Create Schedule" id="createScheduleModal">
        <section className="px-4">
          <div className="mb-4">
            <TextField
              label="Title"
              placeholder="Enter event title"
              className="edit-schedule-input"
            />
          </div>

          <div className="mb-2">
            <TextField
              label="Description"
              placeholder="Describe event"
              className="edit-schedule-input"
            />
          </div>

          <div className="d-flex align-items-center my-4">
            <p className="schedule-modal-subtitle">Add picture: </p>
            <p className="schedule-underlined ml-1">Upload photo</p>
          </div>

          <div className="d-flex align-items-start justify-content-between mb-4">
            <TextField type="date" label="From (day)" />
            <p role="button" className="schedule-underlined">
              Add another day
            </p>
          </div>

          <div className="row mb-4">
            <div className="col-lg-6">
              <Select label="Start time" options={["10am"]} />
            </div>
            <div className="col-lg-6">
              <Select label="End time" options={["12pm"]} />
            </div>
          </div>

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

          <div className="mb-4">
            <p className="schedule-underlined">Add Attendees (optional)</p>
          </div>

          <div className="mb-4">
            <p className="schedule-underlined">Add Location</p>
          </div>

          <div className="d-flex align-items-center mb-3">
            <p className="schedule-modal-subtitle">Notify me:</p>
            <p className="schedule-underlined ml-1">30 minutes before</p>
          </div>

          <div className="text-right">
            <Button label="Create" variant="secondary" />
          </div>
        </section>
      </Modal>
    </div>
  );
};
