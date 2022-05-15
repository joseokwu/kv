import React from 'react'
import { Apply } from './apply'
import { Applied } from './applied';
import { PaginationData } from '../../../components';

export const AllOfferings = ({data , apply , partners , setCurrentPage, currentPage , total}) => {
  
  return (
    <div>
      <div className="my-4">
        <Applied data={partners} apply={apply}  />
        {/* <Apply data={data} /> */}
      </div>
      <div className='d-flex justify-content-end'>
         {
           partners?.length > 0 &&  <PaginationData 
          setCurrentPage={setCurrentPage}
          data={data}
          total={total}
          currentPage={currentPage} />
         }
      </div>
    </div>
  )
}
