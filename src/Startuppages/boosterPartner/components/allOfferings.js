import React from 'react'
import { Apply } from './apply'
import { Applied } from './applied'

export const AllOfferings = ({data}) => {
  
  return (
    <div>
      <div className="my-4">
        <Applied data={data} />
        {/* <Apply data={data} /> */}
      </div>
  
    </div>
  )
}
