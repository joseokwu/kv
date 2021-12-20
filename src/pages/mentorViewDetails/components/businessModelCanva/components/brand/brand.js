import React from 'react'
import { BrandBuilding } from './components/brandBuilding'
import { BrandValue } from './components/brandValue'
import { Competitive } from './components/competitive'
import { Map } from './components/productRoadMap'
import { ValueProposition } from './components/valueProposition'

export const Brand = () => {
  return (
    <section className="mb-4 mt-5">
      <div className="row">
        <div className="col-lg-10">
          <ValueProposition />
          <Competitive />
          <Map />
          <BrandBuilding />
          <BrandValue />
        </div>
      </div>
    </section>
  )
}
