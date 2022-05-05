import React, { useState } from "react";
import { TextField, Modal, Select, Button } from "../../../components";
import close from "../../../assets/icons/grayClose.svg";
import copy from "../../../assets/icons/copy.svg";
import { GuestItem } from "./ScheduleModal";   

export const CreateCallSchedule = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <Modal title="Create Call Schedule" id="createCallScheduleModal">
        <section className="px-4">
          <div className="mb-4">
            <TextField
              label="Title of Schedule"
              placeholder="Enter event title"
              className="create-text-field"
            />
          </div>

          <div className="mb-4">
            <TextField
              label="Description"
              placeholder="Describe event"
              className="create-text-field"
            />
          </div>

          <div className="mb-4">
            <TextField
              label="Date"
              placeholder="Thursday 17th Oct 2021t"
              className="create-text-field"
              type="date"
            />
          </div>

          <article className="row">
            <div className="col-lg-6 mb-4">
              <Select label="Start time" className="create-text-field" />
            </div>

            <div className="col-lg-6 mb-4">
              <Select label="End time" className="create-text-field" />
            </div>
          </article>

          <div className="mb-4">
            <p className="schedule-underlined">Add another day</p>
          </div>

          <div className="mb-4 pb-4 border-bottom">
            <TextField
              placeholder="Search startup list"
              className="edit-schedule-input mb-3"
              label="Add Attendees"
              onChange={(e) => setSearchInput(e.target.value)}
            />

            {searchInput.length > 0 && (
              <>
                <span className="flex-align justify-content-between mb-3">
                  <GuestItem name="Grace Winner" />
                  <img src={close} alt="close" />
                </span>

                <span className="flex-align justify-content-between mb-3">
                  <GuestItem name="Eric Isaac" />
                  <img src={close} alt="close" />
                </span>
              </>
            )}
          </div>

          <div className="d-flex align-items-center mb-4">
            <p className="mb-0 mr-2">Join with:</p>
            <Select options={["Zoom", "Meet"]} />
          </div>

          <div className="copy-text-input mb-4">
            <input
              type="text"
              id="google-meet"
              defaultValue="meet.google.com/jce-wata-fux"
            />
            <img src={copy} alt="copy" />
          </div>

          <div className="d-flex align-items-center mb-4">
            <p className="mb-0 mr-2">Notify me:</p>
            <div className="mr-3">
              <TextField defaultValue="30" />
            </div>
            <Select options={["Minutes", "Hours"]} />
          </div>

          <div className="mb-4 text-right">
            <Button label="Create" variant="secondary" />
          </div>
        </section>
      </Modal>
    </div>
  );
};
