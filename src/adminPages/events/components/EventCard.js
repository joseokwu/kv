import React from "react";
import { formatTime, months } from "../../../utils/helpers";
import dots from "../../../assets/icons/dot.svg";
import doc from "../../../assets/images/doc.svg";
import bigClock from "../../../assets/icons/bigclock.svg";
import styles from "../events.module.css";
import { Button, Modal, Tag } from "../../../components";
import { ViewEventDetails } from "./ViewEventDetails";

export const EventCard = ({ data = {}, id = 0 }) => {
  const isOngoing =
    new Date().getTime() >= new Date(data?.startDate).getTime() &&
    new Date().getTime() < new Date(data?.endDate).getTime();

  const eventTime = (
    <p className="pending_time pt-1">
      <img src={bigClock} alt="clock" /> {formatTime(data?.startDate)}-
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
        />
      </Modal>
      <div
        className={styles.eventCard}
        data-toggle="modal"
        data-target={`#viewEvent${id}`}
      >
        <section className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h5>{data?.name}</h5>
            {eventDate}
          </div>

          <div className="d-flex flex-column align-items-end">
            <img src={dots} alt="options" className="d-block mb-3" />
            {isOngoing ? <Tag name="Ongoing" /> : eventTime}
          </div>
        </section>

        {data?.image && (
          <section className="mb-45">
            <img
              src={data?.image}
              alt="event visual"
              className={styles.eventVisual}
            />
          </section>
        )}

        <section className="mb-3">
          <p className={styles.desc}>{data?.description}</p>
        </section>

        <section className="d-flex align-items-center justify-content-between">
          <Button label="Join Event" />

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
