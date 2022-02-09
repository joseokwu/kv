import React from 'react'
import {} from './boosterPartner.styled'
import { DashCard, Select, Tabs } from '../../Startupcomponents/index'
import { boosterData } from '../../constants/domiData'
import { useHistory } from 'react-router-dom'

export const BoosterPartner = () => {
  const history = useHistory()
  const {
    location: { hash },
  } = history
  const renderContent = () => {
    switch (hash) {
      case '#All Offerings':
        return <div>All Offerings</div>
      case '#My Applications':
        return <div>My Applications</div>
      default:
        return <span></span>
    }
  }

  const tabList = ['All Offerings', 'My Applications']

  return (
    <div className="mx-3">
      <section className="row" style={{ zIndex: '900', background: '#FEFEFE' }}>
        {boosterData.map((data, i) => (
          <>
            <DashCard
              className="col-lg-4 col-md-12 col-12"
              icon={data.icon}
              name={data.name}
              count={data.count}
              color={data.color}
              key={i}
            />
          </>
        ))}
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
