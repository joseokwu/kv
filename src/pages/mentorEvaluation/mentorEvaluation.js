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
    { name: 'Partners', count: 20, color: '#DEF6FF' },
    { name: 'Total Startup Assigned', count: 300, color: '#D5D6F4' },
  ]

  const renderContent = () => {
    switch (hash) {
      case '#All':
        return <AllEvaluationCard />

      case '#Pending':
        return <EvaluationPendingCard />

      case '#Completed':
        return <EvaluationCompletedCard />

      default:
        return <AllEvaluationCard />
    }
  }

  const tabItems = ['All', 'Pending', 'Completed']

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

      <section className="mt-5 d-flex align-items-center justify-content-between">
        <Tabs tabItems={tabItems} />
        <div>
          <button
            className="d-flex align-items-center filter-btn"
            style={{ columnGap: 7 }}
            data-toggle="dropdown"
          >
            <img src={filter} alt="filter" />
            <p>Filter</p>
            <img src={down} alt="down" />
          </button>
        </div>
      </section>

      <div className="pt-3">
        <section className="mt-1">{renderContent()}</section>
      </div>
    </div>
  )
}
