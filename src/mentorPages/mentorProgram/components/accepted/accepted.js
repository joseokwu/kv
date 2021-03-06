import React from "react";
import bigClock from "../../../../assets/icons/bigclock.svg";
import { Modal, ReadMore } from "../../../../mentorComponents";
import { formatTime, months } from "../../../../utils/helpers";
import "./accepted.css";
import { ViewScheduleModal } from "./viewScheduleModal";

export const Accepted = ({ data = {} }) => {
  return (
    <div>
      <Modal id="viewScheduleModal" withHeader={false}>
        <ViewScheduleModal data={data} />
      </Modal>
      <div className="program_card">
        <section className="pending_program_card p-4">
          <div className="d-flex justify-content-between">
            <p className="pending_program_title">{data?.name}</p>
            <span className="accepted_tag">Accepted</span>
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
              <button data-toggle="modal" data-target="#viewScheduleModal">
                View schedule
              </button>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};
