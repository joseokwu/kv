import React from "react";
import bigClock from "../../../../assets/icons/bigclock.svg";
import location from "../../../../assets/icons/locationSm.svg";
import compLogo from "../../../../assets/images/compLogo.svg";
import { months } from "../../../../utils/helpers";

export const ViewScheduleModal = ({ data = {} }) => {
  return (
    <div className="px-4 pb-5">
      <section className="pt-2">
        <button
          type="button"
          class="close close-founder-modal"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </section>

      <section className="mt-5">
        <section className="program_modal_head">
          <h3>{data?.name}</h3>
        </section>

        <section className="d-flex mt-3">
          <p className="pending_date pr-4">
            <span>{new Date(data?.date).getDate()}</span>{" "}
            {months[new Date(data?.date).getMonth()]}
          </p>

          <p className="pending_time pt-1">
            <img src={bigClock} alt="clock" /> 10:00pm - 12pm
          </p>
        </section>
      </section>

      <section className="view_schedule_modal mt-5 p-4">
        <h3>Description</h3>
        <p className="pt-4">{data?.description}</p>
      </section>

      <section className="event_link">
        <p className="pt-5 pb-3">Event Link</p>
        <a href="https://www.yebox.io/" target="_blank">
          <img className="pr-3" src={location} alt="location" />{" "}
          {data?.eventLink}
        </a>
      </section>

      <section className="mt-4">
        <p>Startups</p>
      </section>

      <section className="row view_schedule_modal_company">
        {data?.startups?.length > 0 &&
          data?.startups?.map((d, i) => {
            return (
              <div className="col-sm-4 mt-3">
                <img src={compLogo} alt="company logo" />
                <p className="pt-2">{d?.companyName}</p>
              </div>
            );
          })}
      </section>
    </div>
  );
};
