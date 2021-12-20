import React from 'react'
import filter from '../../assets/icons/filterFunnel.svg'
import down from '../../assets/icons/chevronDown.svg'
import './program.css'
import { Tabs } from '../../components'
import { Pending } from './components/pending/pending'
import { Accepted } from './components/accepted/accepted'
import { Declined } from './components/declined/declined'
import { AllProgramCard } from './components/allProgramCard/allProgramCard'
import { Rescheduled } from './components/rescheduled/rescheduled'

export const Program = ({ history }) => {
  const {
    location: { hash },
  } = history

  const renderContent = () => {
    switch (hash) {
      case '#All':
        return <AllProgramCard />

      case '#Pending':
        return <Pending />

      case '#Accepted':
        return <Accepted />

      case '#Rescheduled':
        return <Rescheduled />

      case '#Declined':
        return <Declined />

      default:
        return <AllProgramCard />
    }
  }

  const tabItems = ['All', 'Pending', 'Accepted', 'Rescheduled', 'Declined']

  return (
    <div className="dashboard-main">
      <div className="col-lg-12">
        <section className="d-flex align-items-center justify-content-between mb-3">
          <p className="program-sub-title">6 programs assigned to you</p>
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
      </div>

      <div className="col-lg-12">
        <Tabs tabItems={tabItems} />
      </div>

      <div className="col-lg-12 pt-3">
        <section className="mt-1">{renderContent()}</section>
      </div>
    </div>
  )
}
