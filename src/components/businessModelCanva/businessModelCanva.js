import React from 'react'
import './businessModelCanva.css'
import { CompetitiveAdvantages } from './components/advantages/competitiveAdvantages'
import { BusinessModel } from './components/businessModel/businessModel'
import { KeyCompetitors } from './components/key/keyCompetitors'
import { MarketSize } from './components/marketSize/marketSize'
import { MarketStrategy } from './components/marketStrategy/marketStrategy'
import { Partnership } from './components/partnership/partnership'
import { Problem } from './components/problem/problem'
import { Solution } from './components/solution/solution'
import { TargetMarket } from './components/targetMarket/targetMarket'

export const BusinessModelCanva = () => {
  return (
    <div>
      <section className="model_canva_title mb-4">
        <h3>Business Model Canvas</h3>
      </section>
      <section>
        <div className="row">
          <div className="col-lg-10">
              <Problem />            
              <Solution />
              <MarketSize />
              <TargetMarket />
              <BusinessModel />
              <KeyCompetitors />
              <CompetitiveAdvantages />
              <MarketStrategy />
              <Partnership />
          </div>
        </div>
      </section>
    </div>
  )
}
