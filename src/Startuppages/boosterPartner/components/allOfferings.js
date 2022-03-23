import React from 'react'
import { Apply } from './apply'
import { Applied } from './applied'

export const AllOfferings = ({data}) => {
  
  const notApplied = data && data.filter(item => item.status === 'not-applied')
  
  const aplied = data && data.filter(item => item.status === 'applied')
  

  return (
    <div>
      <div className="my-4">
        <Applied data={data} />
        <Apply data={data} />
      </div>
  
    </div>
  )
}
