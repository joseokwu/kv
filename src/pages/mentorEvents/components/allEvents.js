import React from 'react'
import dots from '../../../assets/icons/3dots.svg'
import bigClock from '../../../assets/icons/bigclock.svg'
import demo from '../../../assets/images/vidDemo.svg'
import doc from '../../../assets/images/doc.svg'

export const AllEvents = () => {
  return (
    <div className="row">
      <div className="col-lg-6 events_card_bg py-4 px-5">
        <section className="events_card d-flex justify-content-between">
          <h3>Appleiine House Demo</h3>
          <img src={dots} alt="" />
        </section>

        <section className="d-flex justify-content-between mt-2">
          <p className="pending_date pr-4">
            <span>50</span> | September
          </p>

          <p className="pending_time pt-1">
            <img src={bigClock} alt="clock" /> 10:00pm - 12pm
          </p>
        </section>

        <section className="mt-4">
          <img src={demo} alt="" />
        </section>

        <section className="event_card_body mt-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
            morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.{' '}
          </p>
        </section>

        <section className="d-flex align-items-center justify-content-between mt-3 event_card_footer">
          <a href="#!">Add to schedule</a>
          <section className="event_people">
            <img src={doc} alt="doc" />
            <img src={doc} alt="doc" />
            <img src={doc} alt="doc" />
          </section>
        </section>
      </div>

      <div className="col-lg-5 events_card_bg py-4 px-5 ml-4">
        <section className="events_card d-flex justify-content-between">
          <h3>Appleiine House Demo</h3>
          <img src={dots} alt="" />
        </section>
      </div>
    </div>
  )
}
