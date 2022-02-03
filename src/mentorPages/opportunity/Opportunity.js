import React from 'react'
import left from '../../assets/icons/chervonLeft.svg'
import './opportunity.css'
import { Tabs, Tag } from '../../mentorComponents'
import { OppCompanyInfo } from './mentorComponents/OppCompanyInfo'
import { FinancialDetails } from './mentorComponents/FinancialDetails'
import { FundingRound } from './mentorComponents/FundingRound'
import { Product } from './mentorComponents/product/Product'
import { PitchDeck } from './mentorComponents/pitchDeck/PitchDeck'
import { Team } from './mentorComponents/team/Team'
import { BusinessCanavas } from './mentorComponents/businessCanvas'
import { RoadMap } from './mentorComponents/roadMap/RoadMap'

export const Opportunity = ({ history }) => {
  const {
    location: { hash },
  } = history
  const tabItems = [
    'pitch deck',
    'team',
    'product',
    'business canvas',
    'fundraising',
    'Milestone/Timeline',
    'Product Road Map',
  ]

  const renderContent = () => {
    switch (hash.replaceAll('%20', ' ')) {
      case '#pitch deck':
        return <PitchDeck />
      case '#product':
        return <Product />
      case '#business canvas':
        return <BusinessCanavas />
      case '#Product Road Map':
        return <RoadMap />
      case '#team':
        return <Team />

      default:
        return <Product />
    }
  }
  return (
    <div>
      <article className="wrapper pt-2" style={{ background: '#F9F9FC' }}>
        <div className="row mt-5">
          <div className="col-lg-7 col-12">
            <OppCompanyInfo />
            <FinancialDetails />
          </div>
          <div className="col-lg-5 col-12 ">
            <FundingRound />
          </div>
        </div>
      </article>

      <article className="wrapper">
        <Tabs tabItems={tabItems} />

        <div className="py-4">{renderContent()}</div>
      </article>
    </div>
  )
}
