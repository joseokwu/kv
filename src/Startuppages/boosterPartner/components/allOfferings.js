import React from 'react'
import { Apply } from './apply'
import { Applied } from './applied'

export const AllOfferings = () => {
  return (
    <div>
      <div className="my-4">
        <Applied />
      </div>
      <div>
        <Apply />
      </div>
    </div>
  )
}
