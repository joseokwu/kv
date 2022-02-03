import React from 'react'
import bigClock from '../../../../assets/icons/bigclock.svg'
import location from '../../../../assets/icons/locationSm.svg'
import compLogo from '../../../../assets/images/compLogo.svg'

export const ViewScheduleModal = () => {
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
          <h3>Appleiine House Demo</h3>
        </section>

        <section className="d-flex mt-3">
          <p className="pending_date pr-4">
            <span>50</span> | September
          </p>

          <p className="pending_time pt-1">
            <img src={bigClock} alt="clock" /> 10:00pm - 12pm
          </p>
        </section>
      </section>

      <section className="view_schedule_modal mt-5 p-4">
        <h3>Description</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
          morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
          lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.{' '}
        </p>
      </section>

      <section className="event_link">
        <p className="pt-5 pb-3">Event Link</p>
        <a href="https://www.yebox.io/" target="_blank">
          <img className="pr-3" src={location} alt="location" />{' '}
          meet.google.com/jce-wata-fux
        </a>
      </section>

      <section className="mt-4">
        <p>Startups</p>
      </section>

      <section className="view_schedule_modal_company d-flex mb-5 pb-4">
        <div className="col-lg-4 mt-3">
          <img src={compLogo} alt="company logo" />
          <p className="pt-2">Yebox Technology</p>
        </div>
        <div className="col-lg-4 mt-3">
          <img src={compLogo} alt="company logo" />
          <p className="pt-2">Yebox Technology</p>
        </div>
        <div className=" col-lg-4 mt-3">
          <img src={compLogo} alt="company logo" />
          <p className="pt-2">Yebox Technology</p>
        </div>
      </section>
    </div>
  )
}
