import React from 'react'
import './upcomingEventCard.css'
import dot from '../../assets/icons/dot.svg'
import doc from '../../assets/images/doc.svg'
import clock from '../../assets/images/clock.svg'

export const UpcomingEventCard = () => {
  return (
    <div className="opp_card">
      <section className="mb-2 d-flex align-items-center justify-content-between">
        <h4 className="opp_company">Appleiine House Demo</h4>
        <img src={dot} alt="dots" />
        {/* <span className="active_dot"></span> */}
      </section>
      <section
        className="d-flex align-items-center justify-content-between"
        style={{ columnGap: 10 }}
      >
        <p className="event_date">
          {' '}
          <span>50</span> | September
        </p>
        <p className="event_time">
          {' '}
          <img src={clock} alt="clock" /> 10:00pm - 12pm
        </p>
      </section>

      <section className="opp_content">
        <p>
          Lorem ipsum dolor sit amet, consectetur g elit. Enim lectus morbi
          elementum eu.Lorem ipsu.
        </p>
      </section>

      <section className="d-flex align-items-center justify-content-between">
        {/* <Button label="View Details" /> */}
        <a href="#!">View Details</a>
        <section className="event_people">
          <img src={doc} alt="doc" />
          <img src={doc} alt="doc" />
          <img src={doc} alt="doc" />
        </section>
      </section>
    </div>
  )
}
