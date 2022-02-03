import React from 'react'
import { Channels } from './components/channels'
import { CustomerRelationship } from './components/customerRelationship'
import { KeyActivities } from './components/keyActivities'
import { KeyPartners } from './components/keyPartners'
import { KeyResources } from './components/keyResources'
import { RevenueStreams } from './components/revenueStreams'

export const BusinessModel = () => {
  return (
    <section className="mb-4 mt-5">
      <div className="row">
        <div className="col-lg-10">
          <Channels />
          <CustomerRelationship />
          <RevenueStreams />
          <KeyActivities />
          <KeyResources />
          <KeyPartners />
        </div>
      </div>
    </section>
  )
}
