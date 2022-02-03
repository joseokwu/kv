import React from 'react'
import { AddReschedule } from './components/addReschedule/addReschedule'
import { ApprovedReschedule } from './components/approvedReschedule/approvedReschedule'
import { PendingReschedule } from './components/pendingReschedule/pendingReschedule'
import './rescheduled.css'

export const Rescheduled = () => {
  return (
    <div>
      <div className="mt-3">
        <ApprovedReschedule />
      </div>
      <div className="mt-3">
        <AddReschedule />
      </div>
      <div className="mt-3">
        <PendingReschedule />
      </div>
    </div>
  )
}
