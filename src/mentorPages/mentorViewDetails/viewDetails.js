import React from 'react'
import './viewDetails.css'
import { ProductDemo, Tabs } from '../../mentorComponents'
import { PitchDeck } from './components/pitchDeck/pitchDeck'
import { Product } from './components/product/product'
import { BusinessModelCanva } from './components/businessModelCanva/businessModelCanva'
import { Team } from './components/team/team'
import { RoadMap } from './components/roadMap/RoadMap'
import { Fundraising } from './components/fundraising/fundraising'
import { Milestone } from './components/milestone/Milestone'

export const MentorViewDetails = ({ history }) => {
  const {
    location: { hash },
  } = history

  const renderContent = () => {
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
        return <Milestone />

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
    <div className="dashboard-main mx-3">
      <ProductDemo />

      <div className="mt-4">
        <section className="mb-3">
          <Tabs tabItems={tabItems} />
        </section>
        <section className="mt-1">{renderContent()}</section>
      </div>
    </div>
  )
}
