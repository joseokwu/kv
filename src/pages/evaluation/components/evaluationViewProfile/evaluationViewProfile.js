import React from 'react'
import './evaluationViewProfile.css'
import { ProductDemo, Tabs } from '../../../../components'
import { PitchDeck } from '../../../viewDetails/components/pitchDeck/pitchDeck'
import { Product } from '../../../viewDetails/components/product/product'
import { BusinessModelCanva } from '../../../viewDetails/components/businessModelCanva/businessModelCanva'
import { Team } from '../../../viewDetails/components/team/team'
import { RoadMap } from '../../../viewDetails/components/roadMap/RoadMap'
import { Fundraising } from '../../../viewDetails/components/fundraising/fundraising'

export const EvaluationViewProfile = ({ history }) => {
  const {
    location: { hash },
  } = history

  const renderNewContent = () => {
    switch (hash.replaceAll('%20', '')) {
      case '#Product':
        return <Product />

      case '#Pitch Deck':
        return <PitchDeck />

      case '#Team':
        return <Team />

      case '#Business Model Canva':
        return <BusinessModelCanva />

      case '#Fundraising':
        return <Fundraising />

      case '#Milestone/Timeline':
        return <div>Milestone/Timeline</div>

      case '#Product Road Map':
        return <RoadMap />

      default:
        return <Product />
    }
  }

  const tabItems = [
    'Product',
    'Pitch Deck',
    'Team',
    'Business Model Canva',
    'Fundraising',
    'Milestone/Timeline',
    'Product Road Map',
  ]

  return (
    <div className="dashboard-main">
      <ProductDemo />

      <div className="mt-4">
        <section className="mb-3">
          <Tabs tabItems={tabItems} />
        </section>
        <section className="mt-1">{renderNewContent()}</section>
      </div>
    </div>
  )
}
