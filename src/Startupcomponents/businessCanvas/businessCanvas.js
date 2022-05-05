import React, { useState } from 'react'
import { Tabs } from '../tabs/Tabs'
import './businessCanvas.css'
import { Brand } from './components/brand/brand'
import { BusinessModel } from './components/businessModel/businessModel'
import { Market } from './components/market/market'
import { Planning } from './components/planning/planning'


export const BusinessCanvas = () => {
  const renderContent = () => {
    switch (currentTab) {
      case 'Market':
        return <Market />

      case 'Brand':
        return <Brand />

      case 'Business Modeling':
        return <BusinessModel />

      case 'Planning':
        return <Planning />

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
