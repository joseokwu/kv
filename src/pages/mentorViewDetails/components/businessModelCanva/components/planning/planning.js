    import React from 'react'
import { MarketStrategy } from './components/marketStrategy'
import { SalesStrategy } from './components/salesStrategy'

export const Planning = () => {
  return (
    <section className="mb-4 mt-5">
      <div className="row">
        <div className="col-lg-10">
          <MarketStrategy />
          <SalesStrategy />
        </div>
      </div>
    </section>
  )
}