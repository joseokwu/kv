import React, { useState } from 'react'
import { Tabs } from '../tabs/Tabs'
import './businessCanvas.css'
import { Brand } from './components/brand/brand'
import { BusinessModel } from './components/businessModel/businessModel'
import { Market } from './components/market/market'
import { Planning } from './components/planning/planning'


export const BusinessCanvas = ({data}) => {
  console.log(data)
  const renderContent = () => {
    switch (currentTab) {
      case 'Market':
        return <Market data={data?.market} />

      case 'Brand':
        return <Brand  data={data?.brand} />

      case 'Business Modeling':
        return <BusinessModel data={data?.businessModel}   />

      case 'Planning':
        return <Planning data={data?.plan} />

      default:
        return
    }
  }

  const tabItems = ['Market', 'Brand', 'Business Modeling', 'Planning']
  const [currentTab, setCurrentTab] = useState(tabItems[0])

  return (
    <div className="pt-3">
      <section className="model_canva_title mb-3">
       <Tabs 
        tabItems={tabItems}
        state={currentTab}
        setState={setCurrentTab}
        withState={true}
       />
      </section>
      <section className="mt-1">{renderContent()}</section>
    </div>
  ) 
}
