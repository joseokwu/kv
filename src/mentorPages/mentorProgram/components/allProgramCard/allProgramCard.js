import React from 'react'
import { Accepted } from '../accepted/accepted'
import { Declined } from '../declined/declined'
import { Pending } from '../pending/pending'
import { Rescheduled } from '../rescheduled/rescheduled'
import './allProgramCard.css'

export const AllProgramCard = () => {
  return (
    <div>
      <div className="mt-3">
        <Pending />
      </div>
      <div className="mt-3">
        <Accepted />
      </div>
      <div className="mt-3">
        <Rescheduled />
      </div>
      <div className="mt-3">
        <Declined />
      </div>
    </div>
  )
}
