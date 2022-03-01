import React, { useEffect, useState } from 'react'
import './dashboard.css'
import { DashCard, CardFill } from '../../Startupcomponents/index'
import { TodoList } from './components/todolist'
import { UpComing } from './components/upComing'
import { getDashboardInfo } from '../../services'
import newApp from '../../assets/icons/Star.svg'
import dateFormat from 'dateformat'
import { convertToMillion } from '../../utils/helpers'

export const StartupDashboard = () => {
  // const appCardData = [1, 2, 3, 4, 5]
  const [dashInfo, setDashInfo] = useState({})

  const fetchData = async () => {
    const res = await getDashboardInfo()

    setDashInfo(res)
  }

  useEffect(() => {
    fetchData()

    return () => {
      setDashInfo({})
    }
  }, [])

  console.log(dashInfo)
  console.log(
    typeof dashInfo?.valuation?.amount !== undefined &&
      convertToMillion(dashInfo?.valuation?.amount),
  )

  return (
    <div className="dashboardMain">
      {/* <section className="startup-dash mb-4">
        <h2>Yebox Techologies</h2>
      </section> */}
      <section className="row" style={{ zIndex: '998', background: '#FEFEFE' }}>
        <DashCard
          className="col-lg-3 col-md-6 col-12"
          icon={newApp}
          name={'Founders'}
          count={dashInfo?.founders}
          color={'#E5FFE4'}
        />
        <DashCard
          className="col-lg-3 col-md-6 col-12"
          icon={newApp}
          name={'Investors'}
          count={dashInfo?.investors}
          color={'#FAD7DC'}
        />
        <DashCard
          className="col-lg-3 col-md-6 col-12"
          icon={newApp}
          name={'Mentors'}
          count={dashInfo?.mentors}
          color={'#E5FFE4'}
        />
        <DashCard
          className="col-lg-3 col-md-6 col-12"
          icon={newApp}
          name={'Partners'}
          count={dashInfo?.partners}
          color={'#FAD7DC '}
        />
      </section>

      <section className="container row my-5">
        <CardFill
          header={'Total Fund'}
          color={'#2E3192'}
          img={''}
          amount={dashInfo?.totalFund?.amount}
          time={''}
          className="col-3 col-6-md "
        />
        <CardFill
          header={'Last Funding Round'}
          color={'#00ADEF'}
          img={''}
          amount={dashInfo?.lastFund?.amount}
          time={dateFormat(dashInfo?.lastFund?.date, 'fullDate')}
          className="col-3 col-6-md "
        />
        <CardFill
          header={'Investors'}
          color={'#00ADEF'}
          img={''}
          className="col-3 col-6-md "
        />
        <CardFill
          header={'Valuation'}
          color={'#2E3192'}
          img={''}
          amount={
            typeof dashInfo?.valuation?.amount !== undefined &&
            convertToMillion(dashInfo?.valuation?.amount)
          }
          time={dateFormat(dashInfo?.lastFund?.date, 'fullDate')}
          className="col-3 col-6-md "
        />
      </section>

      <section className="row">
        <div className="col-lg-12">
          <TodoList data={dashInfo?.assignments} />
        </div>
      </section>
      <section className="my-4">
        <UpComing data={dashInfo?.events} />
      </section>
    </div>
  )
}
