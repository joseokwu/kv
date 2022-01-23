import React from 'react'
import { Tabs } from '../../components'
import './mentorEvents.css'
import down from '../../assets/icons/downArrow.svg'
import searchIcon from '../../assets/icons/searchIcon.svg'
import { AllEvents } from './components/allEvents'

export const Events = ({ history }) => {
  const {
    location: { hash },
  } = history

  const renderContent = () => {
    switch (hash) {
      // case '#All Events':
      //   return <AllEvents />

      case '#Selection Day':
        return <AllEvents />

      case '#Demo Day':
        return <AllEvents />

      case '#Pitching Session':
        return <AllEvents />

      case '#Others':
        return <AllEvents />

      default:
        return <AllEvents />
    }
  }

  const tabItems = [
    // 'All Events',
    'Selection Day',
    'Demo Day',
    'Pitching Session',
    'Others',
  ]
  return (
    <div className="mb-5">
      <div className="col-lg-12">
        <section className="container d-flex align-items-center justify-content-end mb-4">
          {/* <p className="event_title">Events</p> */}
          {/* <img src={searchIcon} alt="search" /> */}
        </section>
      </div>

      <div className="container row d-flex justify-content-between">
        <div className="col d-flex justify-content-between">
          <Tabs tabItems={tabItems} />

          <div className="mx-4">
            <button
              className="d-flex align-items-center sort-btn"
              style={{ columnGap: 7 }}
              data-toggle="dropdown"
            >
              <span>
                <span>Sort by: </span> Industry
              </span>
              <img src={down} alt="down" />
            </button>
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-xl-12 pt-3">
        <section className="mt-1">{renderContent()}</section>
      </div>
    </div>
  )
}
