import React from 'react'
import { DashCard } from '../../mentorComponents'
import down from '../../assets/icons/chevronDown.svg'
import './assignments.css'
import { useHistory } from 'react-router-dom'

export const Assignments = () => {
  const cardData = [
    { name: 'Incubation Program', count: 200, color: '#D5D6F4' },
    { name: 'Acceleration Program', count: 20, color: '#DEF6FF' },
    { name: 'Mentors', count: 20, color: '#D5D6F4' },
    { name: 'Investors', count: 30, color: '#DEF6FF' },
  ]

  const { push } = useHistory()

  return (
    <div className="dashboard_main container-fluid">
      <section className="row pb-5">
        <section
          className="col-lg-12 d-flex align-items-center dashboard-cards position-fixed"
          style={{ background: '#fefefe' }}
        >
          {cardData.map((data, i) => (
            <DashCard
              name={data.name}
              count={data.count}
              color={data.color}
              key={i}
            />
          ))}
        </section>
      </section>

      <section className="mt-5 d-flex justify-content-between">
        <div className="mt-5">
          <button
            className="d-flex align-items-center filter-btn"
            style={{ columnGap: 7 }}
            data-toggle="dropdown"
          >
            <span
              className=""
              style={{ color: '#828282', fontSize: '1.125rem' }}
            >
              Recent
            </span>
            <img className="pl-2" src={down} alt="down" />
          </button>
        </div>

        <div className="mt-5">
          <a className="create_assignment" href="/assignments/create">
            Create
          </a>
        </div>
      </section>

      <section className="row d-flex justify-content-between">
        <div className="col-xl-6">
          <AssignmentCard />
        </div>
        <div className="col-xl-6">
          <AssignCard />
        </div>
        <div className="col-xl-6">
          <AssignCard />
        </div>
        <div className="col-xl-6">
          <AssignCard />
        </div>
      </section>
    </div>
  )
}
export const AssignmentCard = () => {
  return (
    <div className="assignment_card opp-card my-3">
      <h3>Create a business plan</h3>
      <p className="pt-2 pb-4 border-bottom">
        Attachments - <a href="#!">businessplan.pdf</a>
      </p>

      <p className="pt-3 pb-3 border-bottom">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
        morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
        <a href="/assignments/create/details">More Details</a>
      </p>
      <button
        className="pending_evaluation mt-4"
        // onClick={() => push('/mentor/assignments/view')}
      >
        View Evaluation
      </button>
    </div>
  )
}

export const AssignCard = () => {
  return (
    <div className="assignment_card my-3 opp-card">
      <h3>Create a business plan</h3>
      <p className="pt-2 pb-4 border-bottom">
        Attachments - <a href="#!">businessplan.pdf</a>
      </p>

      <p className="pt-3 pb-3 border-bottom">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
        morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. <a href="#!">More Details</a>
      </p>
      <button
        className="pending_evaluation mt-4"
        // onClick={() => push('/mentor/assignments/view')}
      >
        View Evaluation
      </button>
    </div>
  )
}
