import React from 'react'
import {
  AssignedStartupCard,
  DashCard,
  UpcomingEventCard,
} from '../../components'
import './dashboard.css'

export const Dashboard = () => {
  const cardData = [
    { name: 'Incubation Program', count: 200, color: '#D5D6F4' },
    { name: 'Partners', count: 20, color: '#DEF6FF' },
    { name: 'Mentors', count: 20, color: '#D5D6F4' },
    { name: 'Investors', count: 30, color: '#DEF6FF' },
  ]
  return (
    <div className="dashboard-main">
      <section className="d-flex align-items-center dashboard-cards">
        {cardData.map((data, i) => (
          <DashCard
            name={data.name}
            count={data.count}
            color={data.color}
            key={i}
          />
        ))}
      </section>

      <section className="row mt-5 dash-main-content">
        <div className="col-lg-12">
          <div style={{ marginTop: '2.38rem' }}>
            <section className="d-flex align-items-center justify-content-between mb-3">
              <p className="dash-sub-title">Assigned Startups</p>
              <p className="see-all">See All</p>
            </section>

            <section className="row">
              <div className="col-xl-4 mb-4">
                <AssignedStartupCard />
              </div>
              <div className="col-xl-4 mb-4">
                <AssignedStartupCard />
              </div>
              <div className="col-xl-4 mb-4">
                <AssignedStartupCard />
              </div>
            </section>
          </div>
        </div>

        <div className="col-lg-12">
          <div style={{ marginTop: '2.38rem' }}>
            <section className="d-flex align-items-center justify-content-between mb-3">
              <p className="dash-sub-title">Upcoming Events</p>
              <p className="see-all">See All</p>
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
