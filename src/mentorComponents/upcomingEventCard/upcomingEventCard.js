import React from "react";
import "./upcomingEventCard.css";
import dot from "../../assets/icons/dot.svg";
import doc from "../../assets/images/doc.svg";
import clock from "../../assets/images/clock.svg";
import { useHistory } from "react-router-dom";
import { useActivity } from "../../hooks/useBusiness";
import { months } from "../../utils/helpers";

export const UpcomingEventCard = ({ data = {} }) => {
  const history = useHistory();
  const { showEventAction } = useActivity();

  return (
    <div className="opp_card">
      <section className="mb-2 d-flex align-items-center justify-content-between">
        <h4 className="opp_company">{data?.titleOfEvent}</h4>
        {/* <img src={dot} alt="dots" /> */}
        {/* <span className="active_dot"></span> */}
      </section>
      <section
        className="d-flex align-items-center justify-content-between"
        style={{ columnGap: 10 }}
      >
        <p className="event_date">
          <span>{new Date(data?.startDate).getDate()}</span> |
          {months[new Date(data?.startDate).getMonth()]}
        </p>

        {new Date().getTime() >= new Date(data?.startTime) &&
        new Date().getTime() <= new Date(data?.endTime).getTime() ? (
          <span className="accepted_tag">Ongoing</span>
        ) : (
          <p className="event_time pt-1">
            <img src={clock} alt="clock" />{" "}
            {`${new Date(data?.startTime).getHours()}`}:
            {`${new Date(data?.startTime).getMinutes()}${
              new Date(data?.startTime).getMinutes() < 10 ? 0 : ""
            }`}
            - {`${new Date(data?.endTime).getHours()}`}:
            {`${new Date(data?.endTime).getMinutes()}${
              new Date(data?.endTime).getMinutes() < 10 ? 0 : ""
            }`}
          </p>
        )}
      </section>

      <section className="opp_content">
        <p>{data?.eventDescription}</p>
      </section>

      <section className="d-flex align-items-center justify-content-between">
        {/* <Button label="View Details" /> */}
        <span
          data-toggle="modal"
          data-target="#eventScheduleModal"
          className="span"
          onClick={() => {
            history.push("/mentor/events");
            showEventAction();
          }}
        >
          View Details
        </span>
        <section className="event_people">
          <img src={doc} alt="doc" />
          <img src={doc} alt="doc" />
          <img src={doc} alt="doc" />
        </section>
      </section>
    </div>
  );
};
