import React, { useState } from 'react'
import { Tabs } from '../../../../Startupcomponents'
import { NotSubmitted } from './components/notSubmitted'
import { Submitted } from './components/submitted'

export const Assignment = ({ data }) => {
  const tabItems = ['Not Submitted', 'Submitted']
  const [currentTab, setCurrentTab] = useState(tabItems[0])

  const sub = data?.filter((item) => item?.status === 'submitted')
  console.log(sub)

  const notSub = data?.filter((item) => item?.status === 'not-submitted')
  console.log(notSub)

  const renderContent = () => {
    switch (currentTab) {
      case 'Not Submitted':
        return <NotSubmitted data={notSub} />
      case 'Submitted':
        return <Submitted data={sub} />
      default:
        return <NotSubmitted data={notSub} />
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
