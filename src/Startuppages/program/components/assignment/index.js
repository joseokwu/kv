import React, { useState , useEffect } from 'react'
import { Tabs } from '../../../../Startupcomponents'
import { NotSubmitted } from './components/notSubmitted'
import { Submitted } from './components/submitted'
import { assignment } from '../../../../services/startup';



export const Assignment = () => {
  const tabItems = ['Not Submitted', 'Submitted']
  const [currentTab, setCurrentTab] = useState(tabItems[0])
  




  const renderContent = () => {
    switch (currentTab) {
      case 'Not Submitted':
        return <NotSubmitted  />
      case 'Submitted':
        return <Submitted  />
      default:
        return <NotSubmitted  />
    }
  }


  return (
    <div className="mt-5 container">
      <Tabs
        tabItems={tabItems}
        state={currentTab}
        setState={setCurrentTab}
        withState={true}
      />
      <div className="">{renderContent()}</div>
    </div>
  )
}
