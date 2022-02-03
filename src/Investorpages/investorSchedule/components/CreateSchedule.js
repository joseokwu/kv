import React, { useState } from "react";
import { Modal, TextField, Select, Button } from "../../../components";
import copy from "../../../assets/icons/copy.svg";
import close from "../../../assets/icons/grayClose.svg";
import { GuestItem } from "./ScheduleModal";

export const CreateSchedule = () => {
  const [meetInput, setMeetInput] = useState(false);
  const [searchInput, setSearchInput] = useState(false);
  const [location, setLocation] = useState(false);
  const [noticeTime, setNoticeTime] = useState(false);
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

          <div className="d-flex align-items-center my-2">
            <p className="schedule-modal-subtitle">Join with:</p>
            <p
              className="schedule-underlined ml-1"
              onClick={() => setMeetInput(!meetInput)}
            >
              Google Meet
            </p>
          </div>

          {meetInput && (
            <div className="copy-text-input mb-4">
              <input
                type="text"
                id="google-meet"
                defaultValue="meet.google.com/jce-wata-fux"
              />
              <img src={copy} alt="copy" />
            </div>
          )}

          <div className="mb-4">
            <p
              className="schedule-underlined mt-4"
              style={
                searchInput ? { color: "#000", textDecoration: "none" } : {}
              }
              onClick={() => setSearchInput(!searchInput)}
            >
              Add Attendees (optional)
            </p>
          </div>

          {searchInput && (
            <div>
              <TextField
                placeholder="Search attendees or enter email address"
                className="edit-schedule-input mb-3"
              />
              <span className="flex-align justify-content-between mb-3">
                <GuestItem name="Grace Winner" />
                <img src={close} alt="close" />
              </span>

              <span className="flex-align justify-content-between mb-3">
                <GuestItem name="Eric Isaac" />
                <img src={close} alt="close" />
              </span>
            </div>
          )}

          <div className="mb-2">
            <p
              className="schedule-underlined"
              onClick={() => setLocation(!location)}
              style={location ? { color: "#000", textDecoration: "none" } : {}}
            >
              Add Location
            </p>
          </div>

          {location && (
            <div className="mb-4">
              <TextField
                placeholder="Enter location of event"
                className="edit-schedule-input"
              />
            </div>
          )}

          <div className="d-flex align-items-center mt-4 mb-3">
            <p className="schedule-modal-subtitle">Notify me:</p>
            {!noticeTime ? (
              <p
                className="schedule-underlined ml-1"
                onClick={() => setNoticeTime(!noticeTime)}
              >
                30 minutes before
              </p>
            ) : (
              <TextField value="30 minutes" className="ml-2" />
            )}
          </div>

          <div className="text-right">
            <Button label="Create" variant="secondary" />
          </div>
        </section>
      </Modal>
    </div>
  );
};
