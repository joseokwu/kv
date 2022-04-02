import React from 'react'
import { AllApplication } from './allApplication'


export const MyApplications = ({data}) => {
  return (
    <div>
      <div className="mb-4">
        <AllApplication data={data} />
      </div>
    </div>
  )
}


