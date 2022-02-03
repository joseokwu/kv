import React from "react";
import deleteIcon from "../../../assets/icons/delete.svg";
import editIcon from "../../../assets/icons/editIcon.svg";
import close from "../../../assets/icons/close.svg";
import clock from "../../../assets/icons/clock.svg";
import location from "../../../assets/icons/locationSm.svg";
import { Button } from "../../../components";
import { EditScheduleModal } from "./EditScheduleModal";

export const ScheduleModal = ({ image = "", id = 0 }) => {
  const openEditModal = () => {
    window.$(`#editScheduleModal-${id}`).modal("show");
    window.$(`#scheduleModal-${id}`).modal("hide");
  };

  const openDeleteModal = () => {
    window.$(`#deleteScheduleModal-${id}`).modal("show");
    window.$(`#scheduleModal-${id}`).modal("hide");
  };

  return (
    <div
      className="modal fade"
      id={`scheduleModal-${id}`}
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog"
        role="document"
        style={{ marginTop: 120, maxWidth: 847 }}
      >
        <div className="modal-content" style={{ padding: 35 }}>
          <div className="modal-body d-block">
            <section className="d-flex align-items-center justify-content-between mb-4">
              <p className="schedule-count-down">2 days : 30mins : 05 secs</p>
              <span
                className="d-flex align-items-center"
                style={{ columnGap: 10 }}
              >
                <img
                  src={editIcon}
                  alt="edit"
                  role="button"
                  onClick={openEditModal}
                />
                <img
                  src={deleteIcon}
                  alt="delete"
                  role="button"
                  onClick={openDeleteModal}
                />
                <img
                  src={close}
                  alt="close"
                  data-dismiss="modal"
                  role="button"
                />
              </span>
            </section>

            <section className="d-flex align-items-center mb-3">
              <h5>Appleiine House Demo</h5>
              <p className="ml-3 schedule-host">Host: Applean Industry</p>
            </section>

            <section className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <p className="date-day-schedule">05</p>
                <p className="month-schedule">September</p>
              </div>

              <div className="d-flex align-items-center time-schedule ml-5">
                <img
                  src={clock}
                  alt="clock"
                  width="12"
                  height="12"
                  className="mr-1"
                />
                <p>10am - 12 pm</p>
              </div>
            </section>

            {image.toString().length > 0 && (
              <section className="mt-3">
                <img
                  src={image}
                  alt="event"
                  className="schedule-module-image"
                />
              </section>
            )}

            <section className="schedule-modal-desc">
              <h6>Description</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Enim lectus morbi elementum
                eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </section>

            <section>
              <div className="d-flex align-items-center my-4">
                <p className="schedule-modal-subtitle">Visibility: </p>
                <p className="schedule-underlined ml-1">Public</p>
              </div>

              <div>
                <p className="schedule-modal-subtitle">Event Link</p>
                <span className="flex-align mb-4">
                  <img src={location} alt="location" />
                  <a
                    href="https://meet.google.com/jce-wata-fux"
                    className="ml-2 schedule-modal-link"
                  >
                    meet.google.com/jce-wata-fux
                  </a>
                </span>
              </div>
            </section>

            <section className="mb-4">
              <p className="schedule-modal-subtitle mb-3">Guests</p>

              <div className="row">
                {Array.from("buju").map((b, i) => (
                  <article className="col-lg-6 mb-3" key={`guest-${i}`}>
                    <GuestItem />
                  </article>
                ))}
              </div>
            </section>

            <section>
              <Button label="Join Event" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export const GuestItem = ({ name = "Micheal Smith" }) => {
  const colors = ["#0A6CF4", "#1880AC"];
  const randomPick = Math.round(Math.random() * 1);
  return (
    <div className="flex-align">
      <section
        className="guest-initial"
        style={{ background: colors[randomPick] }}
      >
        {name.substr(0, 1)}
      </section>
      <p className="guest-name">{name}</p>
    </div>
  );
};
