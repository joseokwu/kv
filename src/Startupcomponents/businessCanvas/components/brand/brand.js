import React from 'react'
import { BrandBuilding } from './components/brandBuilding'
import { BrandValue } from './components/brandValue'
import { RoadMap } from './components/roadMap'
import { ValueProposition } from './components/valueProposition'
import { Advantage } from './components/advantage'

export const Brand = ({data}) => {
  return (
    <section className="mb-4 mt-5">
      <div className="row">
        <div className="col-lg-10">
          <ValueProposition data={data?.valueProposition} />
          <Advantage  data={data?.competitiveAdvantage} />
          <RoadMap data={data?.productRoadMap} />
          <BrandBuilding data={data?.brandBuilding} />
          <BrandValue data={data?.brandValue} />
        </div>
      </div>
    </section>
  )
}
