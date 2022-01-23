import React from 'react'
import {
  DashCard,
  EvaluationCompletedCard,
  AllEvaluationCard,
  Tabs,
  EvaluationPendingCard,
} from '../../components'
import filter from '../../assets/icons/filterFunnel.svg'
import down from '../../assets/icons/chevronDown.svg'
import './evaluation.css'

export const MentorEvaluation = ({ history }) => {
  const {
    location: { hash },
  } = history

  const cardData = [
    { name: 'Incubation Program', count: 200, color: '#D5D6F4' },
    { name: 'Acceleration Program', count: 20, color: '#DEF6FF' },
    { name: 'Total Startup Assigned', count: 300, color: '#D5D6F4' },
  ]

  const renderContent = () => {
    switch (hash) {
      case '#All':
        return <AllEvaluationCard />

      case '#Pending':
        return (
          <div className="col-xl-6">
            <EvaluationPendingCard />
          </div>
        )

      case '#Completed':
        return (
          <div className="col-xl-6">
            <EvaluationCompletedCard />
          </div>
        )

      default:
        return <AllEvaluationCard />
    }
  }

  const tabItems = ['All', 'Pending', 'Completed']

  return (
    <div className="dashboard_main container-fluid">
      <section className="row pb-5">
        <section
          className="col-lg-12 d-flex align-items-center dashboard-cards position-fixed"
          style={{ background: '#fefefe' }}>
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

      <section className="mt-5 pt-5 d-flex align-items-center justify-content-between">
        <Tabs tabItems={tabItems} />
        <div className="mt-5">
          <button
            className="d-flex align-items-center filter-btn"
            style={{ columnGap: 7 }}
            data-toggle="dropdown"
          >
            <img src={filter} alt="filter" />
            <span>Filter</span>
            <img className="pl-1" src={down} alt="down" />
          </button>
        </div>
      </section>

      <div className="pt-3">
        <section className="mt-1">{renderContent()}</section>
      </div>
    </div>
  )
}
