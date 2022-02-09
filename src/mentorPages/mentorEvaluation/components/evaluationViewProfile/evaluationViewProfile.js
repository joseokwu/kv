import React from 'react'
import './evaluationViewProfile.css'
import { ProductDemo, Tabs } from '../../../../mentorComponents'
import { PitchDeck } from '../../../mentorViewDetails/components/pitchDeck/pitchDeck'
import { Product } from '../../../mentorViewDetails/components/product/product'
import { BusinessModelCanva } from '../../../mentorViewDetails/components/businessModelCanva/businessModelCanva'
import { Team } from '../../../mentorViewDetails/components/team/team'
import { RoadMap } from '../../../mentorViewDetails/components/roadMap/RoadMap'
import { Fundraising } from '../../../mentorViewDetails/components/fundraising/fundraising'
import { Milestone } from '../../../mentorViewDetails/components/milestone/Milestone'

export const MentorEvaluationViewProfile = ({ history }) => {
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

      case '#Business Model Canvas':
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
    'Business Model Canvas',
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
