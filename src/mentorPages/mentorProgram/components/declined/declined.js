import React from "react";
import bigClock from "../../../../assets/icons/bigclock.svg";
import { ReadMore } from "../../../../mentorComponents";
import { formatTime, months } from "../../../../utils/helpers";
import "./declined.css";

export const Declined = ({ data = {} }) => {
  return (
    <div>
      <div className="program_card">
        <section className="pending_program_card p-4">
          <div className="d-flex justify-content-between">
            <p className="pending_program_title">{data?.name}</p>
            <span className="declined_tag">Declined</span>
          </div>

          <section
            className="d-flex align-items-center justify-content-between mt-2"
            style={{ columnGap: 10 }}
          >
            <p className="pending_date">
              <span>{new Date(data?.date).getDate()}</span>{" "}
              {months[new Date(data?.date).getMonth()]}
            </p>
            <p className="pending_time">
              <img src={bigClock} alt="clock" /> {formatTime(data?.startTime)} -{" "}
              {formatTime(data?.endTime)}
            </p>
          </section>

          <section className="mt-3">
            <p>
              <ReadMore>{data?.description}</ReadMore>
            </p>
          </section>

          <section className=" d-flex justify-content-between mt-4">
            <div className="mr-3 program_accept_btn">
              <button>View details</button>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};
