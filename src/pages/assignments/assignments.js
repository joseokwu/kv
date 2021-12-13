import React from 'react'
import { DashCard, ReadMore } from '../../components'
import down from '../../assets/icons/chevronDown.svg'
import './assignments.css'

export const Assignments = () => {
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

      <section className="mt-5 d-flex justify-content-between">
        <div>
          <button
            className="d-flex align-items-center filter-btn"
            style={{ columnGap: 7 }}
            data-toggle="dropdown"
          >
            <p className="" style={{ color: '#828282', fontSize: '18px' }}>
              Recent
            </p>
            <img className="pl-2" src={down} alt="down" />
          </button>
        </div>

        <div>
          <a className="create_assignment" href="/mentor/assignments/create">
            Create
          </a>
        </div>
      </section>

      <section className="row mt-5">
        <div className="col d-flex assignment_card" style={{ columnGap: 50 }}>
          <div className="opp-card ">
            <h3>Create a business plan</h3>
            <p className="pt-2 pb-4 border-bottom">
              Attachments - <a href="#!">businessplan.pdf</a>
            </p>

            <p className="pt-3 pb-3 border-bottom">
              <ReadMore>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </ReadMore>
            </p>
            <button className="pending_evaluation mt-4">View Evaluation</button>
          </div>
          <div className="opp-card ">
            <h3>Create a business plan</h3>
            <p className="pt-2 pb-4 border-bottom">
              Attachments - <a href="#!">businessplan.pdf</a>
            </p>

            <p className="pt-3 pb-3 border-bottom">
              <ReadMore>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </ReadMore>
            </p>
            <button className="pending_evaluation mt-4">View Evaluation</button>
          </div>
        </div>
      </section>
    </div>
  )
}
