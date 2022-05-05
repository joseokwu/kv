import React from 'react'
import { KeyCompetitors } from './components/keyCompetitor'
import { MarketSize } from './components/marketSize'
import { ProblemStatement } from './components/problemStatement'
import { Product } from './components/product'
import { TargetMarket } from './components/targetMarket'

export const Market = () => {
  return (
    <section className="mb-4 mt-5">
      <div className="row">
        <div className="col-lg-10">
          <ProblemStatement />
          <Product />
          <TargetMarket />
          <MarketSize />
          <KeyCompetitors />
        </div>
      </div>
    </section>
  )
}
