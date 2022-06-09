import React from "react";
import { formatTime, months } from "../../../utils/helpers";
import dots from "../../../assets/icons/dot.svg";
import doc from "../../../assets/images/doc.svg";
import bigClock from "../../../assets/icons/bigclock.svg";
import styles from "../events.module.css";
import { Button, Modal, Tag } from "../../../components";
import { ViewEventDetails } from "./ViewEventDetails";
import { EditEvent } from "./EditEvent";

export const EventCard = ({ data = {}, id = 0, onDashboard = false }) => {
  const isOngoing = 
    new Date().getTime() >= new Date(data?.startDate).getTime() &&
    new Date().getTime() < new Date(data?.endDate).getTime();

  const eventTime = (
    <p className="pending_time pt-1">
      <img src={bigClock} alt="clock" /> 
      {formatTime(data?.startDate)}-  
        {formatTime(data?.endDate)}
    </p>
  );

  const eventDate = (
    <span className="d-flex align-items-center">
      <h6 className="mb-0">{new Date(data?.startDate).getDate() || 5}</h6>
      <p>{months[new Date(data?.startDate).getMonth() || 0]}</p>
    </span>
  );

  return (
    <>
      <Modal id={`viewEvent${id}`} withHeader={false} width={723}>
        <ViewEventDetails
          data={data}
          isOngoing={isOngoing}
          eventTime={eventTime}
          eventDate={eventDate}
          id={id}
        />
      </Modal>
      <Modal id={`editEvent${id}`} title="Edit Event" width={568}>
        <EditEvent data={data} />
      </Modal>
      <div className={styles.eventCard}>
        <section className="d-flex align-items-center justify-content-between mb-4">
          <div data-toggle="modal" data-target={`#viewEvent${id}`}>
            <h5>{data?.name}</h5>
            {eventDate}
          </div>

          <div className="d-flex flex-column align-items-end">
            <EventDropdown id={`editEvent${id}`} />
            {isOngoing ? <Tag name="Ongoing" /> : eventTime}
          </div>
        </section>

        {data?.image && (
          <section
            className="mb-45"
            data-toggle="modal"
            data-target={`#viewEvent${id}`}
          >
            <img
              src={data?.image}
              alt="event visual"
              className={styles.eventVisual}
            />
          </section>
        )}

        <section
          className="mb-3"
          data-toggle="modal"
          data-target={`#viewEvent${id}`}
        >
          <p className={styles.desc}>{data?.description}</p>
        </section>

        <section className="d-flex align-items-center justify-content-between">
          {onDashboard ? (
            <Button
              label="View Details"
              data-toggle="modal"
              data-target={`#viewEvent${id}`}
            />
          ) : (
            <Button label="Join Event" />
          )}

          <section className="event_people">
            <img src={doc} alt="doc" />
            <img src={doc} alt="doc" />
            <img src={doc} alt="doc" />
          </section>
        </section>
      </div>
    </>
  );
};

const EventDropdown = ({ id = "" }) => {
  return (
    <div className="dropdown mb-2">
      <div id="dropdownMenu2" data-toggle="dropdown" role="button">
        <img src={dots} alt="dots" />
      </div>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button
          className="dropdown-item"
          type="button"
          data-toggle="modal"
          data-target={`#${id}`}
        >
          Edit
        </button>
        <button className="dropdown-item" type="button">
          Delete
        </button>
      </div>
    </div>
  );
};
