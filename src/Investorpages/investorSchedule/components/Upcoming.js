import React from 'react'
import more from '../../../assets/icons/more.svg'
import clock from '../../../assets/icons/clock.svg'
import eventImage from '../../../assets/icons/eventImage.png'
import person from '../../../assets/images/sampleEventPerson.png'

import { Button } from '../../../components/index'
import { ScheduleModal } from './ScheduleModal'
import { EditScheduleModal } from './EditScheduleModal'
import { DeleteScheduleModal } from './DeleteScheduleModal'
import { months } from '../../../utils/helpers'

export const Upcoming = () => {
  const data = [
    { image: eventImage },
    { image: '' },
    { image: '' },
    { image: eventImage },
    { image: '' },
    { image: eventImage },
    { image: '' },
    { image: '' },
    { image: eventImage },
  ]

  const getColumn = (start, step) => {
    const views = []
    for (let i = start; i < data.length; ) {
      console.log(`i`, i)
      i = i + step
      views.push(<ScheduleCard image={data[i]?.image} id={i} />)
    }

    return views
  }
  return (
    <div>
      <section className="row">
        <article className="col-xl-4 col-lg-6">
          {data.map((d, i) => {
            if (i === 0) {
              return <ScheduleCard image={d.image} id={i} />
            }
            if (i % 3 === 0) {
              return <ScheduleCard image={d.image} id={i} />
            }
          })}
        </article>

        <article className="col-xl-4 col-lg-6">{getColumn(1, 3)}</article>

        <article className="col-xl-4 col-lg-6">{getColumn(2, 3)}</article>
      </section>
    </div>
  )
}

export const ScheduleCard = ({
  eventName = 'Appleiine House Demo',
  image = '',
  id = 0,
  data = [],
}) => {
  return (
    <div className="scheduled-event-card mb-3">
      <ScheduleModal image={image} id={id} />
      <EditScheduleModal id={id} image={image} />
      <DeleteScheduleModal id={id} />

      {data.map((d, i) => (
        <div key={i}>
          <section className="d-flex align-items-center justify-content-between mb-2">
            <h5>{d?.topic}</h5>
            <img src={more} alt="more" />
          </section>

          <section className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              {/* <p className="date-day-schedule"></p> */}
              <p className="month-schedule">{d?.date}</p>
            </div>

            <div className="d-flex align-items-center time-schedule">
              <img
                src={clock}
                alt="clock"
                width="12"
                height="12"
                className="mr-1"
              />
              <p>{d?.time}</p>
            </div>
          </section>

          {image.toString().length > 0 && (
            <section>
              <img src={image} alt="event" className="schedule-event-image" />
            </section>
          )}

          <section className="mb-4 mt-3">
            <p className="event-desc-schedule">
              {d?.description}
            </p>
          </section>

          <section className="d-flex align-items-center justify-content-between">
            <Button
              label="View Details"
              data-toggle="modal"
              data-target={`#scheduleModal-${id}`}
            />
            <section className="event-people schedule-people">
              {/* <img src={person} alt="person" />
              <img src={person} alt="person" />
              <img src={person} alt="person" /> */}
              {d?.attendees}
            </section>
          </section>
        </div>
      ))}
    </div>
  )
}
