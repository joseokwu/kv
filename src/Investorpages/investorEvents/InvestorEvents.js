import React, { useEffect, useState } from 'react'
import { Tabs, Select } from '../../components'
import down from '../../assets/icons/downArrow.svg'
import { SelectionDay } from './components/selectionDay'
import { getEvents } from '../../services/events'
import { PageLoader } from '../../components/pageLoader/PageLoader'
import { EmptyState } from '../../mentorComponents/emptyState/EmptyState'
import Pagination from 'react-bootstrap/Pagination'
import { useAuth } from '../../hooks/useAuth'


export const InvestorEvents = ({ history }) => {
  const industry = [
    'Category: All',
    'Accounting',
    'Analytics',
    'Bike Rentals',
    'Cloud Computing',
    'Cloud Telephony',
    'Content Services',
    'CRM',
    'Customer Engagement',
    'Customer Support',
    'E-Learning',
    'Email Marketing',
    'Employee Benefit',
    'Finance',
    'Fitness',
    'Food and Beverages',
    'Garage Services',
    'Gifts and Confectionery',
    'Health and Wellness',
    'Home and Furnishing',
    'Hospitality',
    'Human Resources',
    'Insurance',
    'Investments',
    'IT Rentals',
    'Legal',
    'Loans',
    'Marketing',
    'Merchandise',
    'Messaging',
    'Personal Finance',
    'Printing',
    'Sales Support',
    'Salons and Spas',
    'Signing Solutions',
    'Travel',
    'Virtual Assistant',
  ]

  const {
    location: { hash },
  } = history

  const { stateAuth } = useAuth()
  const [events, setEvents] = useState([])
  const pages = []
  const [currentPage, setCurrentPage] = useState(1)
  const [selectionEvents, setSelectionEvents] = useState([])
  const [demoEvents, setDemoEvents] = useState([])
  const [pitchEvents, setPitchEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [total, setTotal] = useState('')

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const movePage = (id) => {
    setCurrentPage(id)
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await getEvents({
        userId: stateAuth?.user?.userId,
        page: currentPage,
        limit: 5,
      })
      console.log(res?.data)
      setEvents(res?.data)
      setTotal(res?.data?.total)

      setLoading(false)
    } catch {
      setEvents(null)
    }
  }

  useEffect(() => {
    fetchData()
  }, [currentPage])

  for (let i = 1; i <= events?.total; i++) {
    pages.push(i)
  }

  const renderContent = () => {
    switch (hash) {
      case '#Selection Day':
        return <SelectionDay data={events && events?.data} />

      case '#Demo Day':
        return <SelectionDay data={events && events?.data} />

      case '#Pitching Events':
        return <SelectionDay data={events && events?.data} />

      case '#Other Events':
        return <SelectionDay data={events && events?.data} />

      default:
        return <SelectionDay data={events && events?.data} />
    }
  }

  const tabItems = [
    'Selection Day',
    'Demo Day',
    'Pitching Events',
    'Other Events',
  ]

  if (loading) {
    return (
      <PageLoader
        num={[
          selectionEvents,
          demoEvents,
          pitchEvents,
          events,
          selectionEvents,
        ]}
      />
    )
  }
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
            {/* <button
              className="d-flex align-items-center sort-btn"
              style={{ columnGap: 7 }}
              data-toggle="dropdown"
            > */}
            <Select placeholder={'Sort by: Industry'} options={industry} />
            {/* <span>
                <span>Sort by: </span> Industry
              </span>
              <img src={down} alt="down" /> */}
            {/* </button> */}
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-xl-12 pt-3">
        <section className="mt-1">{renderContent()}</section>
      </div>
      <div className="d-flex justify-content-center">
        {events === null && <EmptyState />}
        {
          events && events.length > 0 ? (
            <Pagination>
          {events && events?.results?.currentPage > 1 ? (
            <>
              <Pagination.Prev onClick={prevPage} className="mx-1" />
              {
                <Pagination.Item className="mx-1">{`${currentPage} of  ${
                  events?.results?.limit ?? 1
                }`}</Pagination.Item>
              }
              {events?.results?.currentPage === events?.results?.limit ? (
                <span />
              ) : (
                <Pagination.Next onClick={nextPage} className="mx-1" />
              )}
            </>
          ) : (
            <>
              {
                <Pagination.Item
                  onClick={() => movePage(currentPage + 1)}
                  className="mx-1"
                >{`${currentPage} of  ${events?.results?.limit}`}</Pagination.Item>
              }

              {events &&
              events?.results?.currentPage === events?.results?.limit ? (
                <span />
              ) : (
                <Pagination.Next onClick={nextPage} className="mx-1" />
              )}
            </>
          )}
        </Pagination>
          ) : (
            <EmptyState message={"No Events at the moment"}  />
          )
        }
        
      </div>
    </div>
  )
}
