import React from 'react'
import { Channels } from './components/channels'
import { KeyActivities } from './components/keyActivities'
import { KeyPartners } from './components/keyPartners'
import { KeyResources } from './components/keyResources'
import { Relationship } from './components/relationship'
import { RevenueStreams } from './components/revenueStreams'

export const BusinessModel = ({ data }) => {
  return (
    <section className="mb-4 mt-5">
      <div className="row">
        <div className="col-lg-10">
          <Channels data={data?.channels} />
        </div>
        <div className="col-lg-10">
          <Relationship data={data?.customerRelationship} />
        </div>
        <div className="col-lg-10">
          <RevenueStreams data={data?.revenueStreams} />
        </div>
        <div className="col-lg-10">
          <KeyActivities data={data?.keyActivities} />
        </div>
        <div className="col-lg-10">
          <KeyResources data={data?.keyResource} />
        </div>
        <div className="col-lg-10">
          <KeyPartners data={data?.keyPartners} />
        </div>
      </div>
    </section>
  )
}
