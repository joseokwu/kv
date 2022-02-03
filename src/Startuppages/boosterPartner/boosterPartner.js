import React from 'react'
import {} from './boosterPartner.styled'
import { DashCard } from '../../Startupcomponents/index'
import { cardData } from '../../constants/domiData'

export const BoosterPartner = () => {
  return (
    <div>
      <section className="row" style={{ zIndex: '999', background: '#FEFEFE' }}>
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
    </div>
  )
}
