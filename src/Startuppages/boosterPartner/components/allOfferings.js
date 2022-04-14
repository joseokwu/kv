import React from 'react'
import { Apply } from './apply'
import { Applied } from './applied'

export const AllOfferings = ({data , userId}) => {
  
  return (
    <div>
      <div className="my-4">
        <Applied data={data} userId={userId} />
        {/* <Apply data={data} /> */}
      </div>
  
    </div>
  )
}
