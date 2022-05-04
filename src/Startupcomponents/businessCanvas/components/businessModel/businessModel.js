import React from 'react'
import { Channels } from './components/channels'
import { KeyActivities } from './components/keyActivities'
import { KeyPartners } from './components/keyPartners'
import { KeyResources } from './components/keyResources'
import { Relationship } from './components/relationship'
import { RevenueStreams } from './components/revenueStreams'

export const BusinessModel = () => {
  return (
    <section className="mb-4 mt-5">
      <div className="row">
        <div className="col-lg-10">
          <Channels />
        </div>
        <div className="col-lg-10">
          <Relationship />
        </div>
        <div className="col-lg-10">
          <RevenueStreams />
        </div>
        <div className="col-lg-10">
          <KeyActivities />
        </div>
        <div className="col-lg-10">
          <KeyResources />
        </div>
        <div className="col-lg-10">
          <KeyPartners />
        </div>
      </div>
    </section>
  )
}
