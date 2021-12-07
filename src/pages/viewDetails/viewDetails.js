import React from 'react'
import './viewDetails.css'
import {
  AuthButton,
  BusinessModelCanva,
  BusinessOverview,
  FinancialPlan,
  ProductDemo,
  Tabs,
} from '../../components'

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
        return <BusinessOverview />

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
