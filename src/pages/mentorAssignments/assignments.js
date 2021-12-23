import React from 'react'
import { DashCard } from '../../components'
import down from '../../assets/icons/chevronDown.svg'
import './assignments.css'
import { useHistory } from 'react-router-dom'

export const Assignments = () => {
  const cardData = [
    { name: 'Incubation Program', count: 200, color: '#D5D6F4' },
    { name: 'Partners', count: 20, color: '#DEF6FF' },
    { name: 'Mentors', count: 20, color: '#D5D6F4' },
    { name: 'Investors', count: 30, color: '#DEF6FF' },
  ]

  const { push } = useHistory()
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
            <p className="" style={{ color: '#828282', fontSize: '1.125rem' }}>
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

      <section className="row mt-5 mr-4 ml-2">
        <div className="d-flex assignment_card" style={{ columnGap: 30 }}>
          <div className="col-lg-6 opp-card ">
            <h3>Create a business plan</h3>
            <p className="pt-2 pb-4 border-bottom">
              Attachments - <a href="#!">businessplan.pdf</a>
            </p>

            <p className="pt-3 pb-3 border-bottom">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.{' '}
              <a href="#!">More Details</a>
            </p>
            <button
              className="pending_evaluation mt-4"
              // onClick={() => push('/mentor/assignments/view')}
            >
              View Evaluation
            </button>
          </div>
          <div className="col-lg-6 opp-card ">
            <h3>Create a business plan</h3>
            <p className="pt-2 pb-4 border-bottom">
              Attachments - <a href="#!">businessplan.pdf</a>
            </p>

            <p className="pt-3 pb-3 border-bottom">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
              <a href="/mentor/assignments/create/details">More Details</a>
            </p>
            <button
              className="pending_evaluation mt-4"
              // onClick={() => push('/mentor/assignments/view')}
            >
              View Evaluation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
