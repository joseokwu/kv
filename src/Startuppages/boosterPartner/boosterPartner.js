import React, { useEffect, useState } from 'react'
import {} from './boosterPartner.styled'
import { DashCard, Select, Tabs } from '../../Startupcomponents/index'
import { boosterData } from '../../constants/domiData'
import { useHistory } from 'react-router-dom'
import { AllOfferings } from './components/allOfferings'
import { MyApplications } from './components/myApplications'
import { getBoosterData } from '../../services'
import newApp from '../../assets/icons/Star.svg'

export const StartupBoosterPartner = () => {
  const [boosterData, setBoosterData] = useState({})

  const getData = async () => {
    const res = await getBoosterData()
    setBoosterData(res)
  }

  useEffect(() => {
    getData()
    return () => {
      setBoosterData({})
    }
  }, [])
  console.log(boosterData)

  const history = useHistory()


  const {
    location: { hash },
  } = history

  const renderContent = () => {
    switch (hash) {
      case '#All Offerings':
        return <AllOfferings data={boosterData?.offerings} />
      case '#My Applications':
        return <MyApplications />
      default:
        return <AllOfferings data={boosterData?.offerings} />
    }
  }

  const tabList = ['All Offerings', 'My Applications']

  return (
    <div className="mx-3">
      <section className="row" style={{ zIndex: '900', background: '#FEFEFE' }}>
        {/* {boosterData.map((data, i) => ( */}
          {/* <> */}
            <DashCard
              className="col-lg-4 col-md-12 col-12"
              icon={newApp}
              name={'New Deals'}
              count={boosterData?.newDeals}
              color={'#D5D6F4'}
            />
            <DashCard
              className="col-lg-4 col-md-12 col-12"
              icon={newApp}
              name={'Applied'}
              count={boosterData?.applied}
              color={'#DEF6FF'}
            />
            <DashCard
              className="col-lg-4 col-md-12 col-12"
              icon={newApp}
              name={'Active'}
              count={boosterData?.active}
              color={'#D5D6F4'}
            />
          {/* </> */}
        {/* ))} */}
      </section>
      <section className="container my-4 d-flex justify-content-between">
        <Tabs tabItems={tabList} />

        <div className="">
          <Select options={['All']} placeholder={'Category: All'} />
        </div>
      </section>
      <section className="mb-5 container ">{renderContent()}</section>
    </div>
  )
}
