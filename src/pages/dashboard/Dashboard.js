import React from 'react'
import './dashboard.css'
import { cardData, cardFill } from '../../constants/domiData'
import { DashCard, CardFill } from '../../components/index'

import { Card } from 'react-bootstrap'
import { TodoList } from './components/todolist'
import { UpComing } from './components/upComing'

export const Dashboard = () => {
  const appCardData = [1, 2, 3, 4, 5]
  return (
    <div className="dashboard-main">
      {/* <section className="startup-dash mb-4">
        <h2>Yebox Techologies</h2>
      </section> */}
      <section className="row" style={{zIndex: '999', background: '#FEFEFE'}}>
        {cardData.map((data, i) => (
          <>
            <DashCard
              className="col-lg-3 col-md-6 col-12"
              icon={data.icon}
              name={data.name}
              count={data.count}
              color={data.color}
              key={i}
            />
          </>
        ))}
      </section>

      <section className="container row my-5">
        {cardFill.map((info, i) => (
          <CardFill
            key={i}
            header={info?.header}
            color={info?.color}
            amount={info?.amount}
            time={info?.time}
            className="col-3 col-6-md "
          />
        ))}
      </section>

      <section className="row">
        <div className="col-lg-12">
          <TodoList />
        </div>
      </section>
      <section className="my-4">
        <UpComing />
      </section>
    </div>
  )
}
