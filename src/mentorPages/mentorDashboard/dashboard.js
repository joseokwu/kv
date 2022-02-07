import React from 'react'
import {
  AssignedStartupCard,
  MentorDashCard,
  UpcomingEventCard,
} from '../../mentorComponents'
import './dashboard.css'
import { useHistory } from 'react-router-dom'

export const MentorDashboard = () => {
  const { push } = useHistory()

  const cardData = [
    { name: 'Incubation Program', count: 200, color: '#D5D6F4' },
    { name: 'Acceleration Program', count: 20, color: '#DEF6FF' },
    { name: 'Mentors', count: 20, color: '#D5D6F4' },
    { name: 'Investors', count: 30, color: '#DEF6FF' },
  ]
  return (
    <div className="dashboard_main container-fluid">
      <section className="row pb-5">
        <section
          className="col-lg-12 d-flex align-items-center dashboard-cards position-fixed mt-0"
          style={{ background: '#fefefe' }}
        >
          {cardData.map((data, i) => (
            <MentorDashCard
              name={data.name}
              count={data.count}
              color={data.color}
              key={i}
            />
          ))}
        </section>
      </section>

      <section className="row mt-0 dash-main-content">
        <div className="col-lg-12">
          <div style={{ marginTop: '6.38rem' }}>
            <section className="d-flex align-items-center justify-content-between mb-3">
              <p className="dash-sub-title">Assigned Startups</p>
              <p className="see-all">See All</p>
            </section>

            <section className="row">
              <div className="col-xl-4 mb-4">
                <AssignedStartupCard onClick={() => push('/mentor/dashboard/view')} />
              </div>
              <div className="col-xl-4 mb-4">
                <AssignedStartupCard onClick={() => push('/mentor/dashboard/view')} />
              </div>
              <div className="col-xl-4 mb-4">
                <AssignedStartupCard onClick={() => push('/mentor/dashboard/view')} />
              </div>
            </section>
          </div>
        </div>

        <div className="col-lg-12">
          <div style={{ marginTop: '2.38rem' }}>
            <section className="d-flex align-items-center justify-content-between mb-3">
              <p className="dash-sub-title">Upcoming Events</p>
              <p className="see-all">
                <a className="see-all-event" href="/mentor/events">
                  See All
                </a>
              </p>
            </section>

            <section className="row">
              <div className="col-xl-4 mb-4">
                <UpcomingEventCard />
              </div>
              <div className="col-xl-4 mb-4">
                <UpcomingEventCard />
              </div>
              <div className="col-xl-4 mb-4">
                <UpcomingEventCard />
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
