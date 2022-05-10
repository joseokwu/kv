import React from 'react'
import { MarketStrategy } from './components/marketStrategy'
import { SalesStrategy } from './components/salesStrategy'

export const Planning = ( { data } ) => {
  return (
    <section className="mb-4 mt-5">
      <div className="row">
        <div className="col-lg-10">
          <MarketStrategy data={data?.marketStrategy} />
          <SalesStrategy data={data?.salesStrategy} />
        </div>
      </div>
    </section>
  )
}
