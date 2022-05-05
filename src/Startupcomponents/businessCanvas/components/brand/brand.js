import React from 'react'
import { BrandBuilding } from './components/brandBuilding'
import { BrandValue } from './components/brandValue'
import { RoadMap } from './components/roadMap'
import { ValueProposition } from './components/valueProposition'
import { Advantage } from './components/advantage'

export const Brand = () => {
  return (
    <section className="mb-4 mt-5">
      <div className="row">
        <div className="col-lg-10">
          <ValueProposition />
          <Advantage />
          <RoadMap />
          <BrandBuilding />
          <BrandValue />
        </div>
      </div>
    </section>
  )
}
