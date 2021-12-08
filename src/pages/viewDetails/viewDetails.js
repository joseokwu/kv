import React from 'react'
import './viewDetails.css'
import {
  FinancialPlan,
  ProductDemo,
  Tabs,
} from '../../components'
import { PitchDeck } from '../pitchDeck/pitchDeck'
import { BusinessOverview } from '../businessOverview/businessOverview'
import { BusinessModelCanva } from '../businessModelCanva/businessModelCanva'

export const ViewDetails = ({ history }) => {
  console.log(`history`, history)

  const {
    location: { hash },
  } = history

  console.log(`hash`, hash)
  const renderContent = () => {
    switch (hash) {
      case '#Business Overview':
        return <BusinessOverview />

      case '#Pitch Deck':
        return <PitchDeck />

      case '#Financial Plan':
        return <FinancialPlan />

      case '#Business Model Canva':
        return <BusinessModelCanva />

      default:
        return <BusinessOverview />
    }
  }

  return (
    <div className="dashboard-main">
      <ProductDemo />

      <div className="pt-3">
        <section className="mb-3">
          <Tabs
            tabItems={[
              'Business Overview',
              'Pitch Deck',
              'Financial Plan',
              'Business Model Canva',
            ]}
          />
        </section>
        <section className="mt-1">{renderContent()}</section>
      </div>
    </div>
  )
}
