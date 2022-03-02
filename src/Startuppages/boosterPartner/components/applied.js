import React from 'react'
import { ApplicationCard } from '../boosterPartner.styled'
import { compImage, applicationCardData } from '../../../constants/domiData'
import { Tag } from '../../../Startupcomponents'

export const Applied = ({data}) => {
  const appliedArr = [1, 2, 3]

  return (
    <div className="row" style={{ columnGap: 10 }}>
      {data && data.map((item, i) => (
        <ApplicationCard key={i} className="col-lg-4 col-12 col-md-6">
          <div>
            {compImage.map((comp, i) => (
              <img className="" key={i} src={comp.logo} alt="company logo" />
            ))}
          </div>
          <div className="my-2">
          
              <h3 >{item?.name}</h3>
           
          </div>
          <Tag name="Bike Rental" bg="#EDDEFF" color="#1405C1" fz="12px" />
          <div className="my-3">
            
              <p >
                {item?.description}
                <span>Read More</span>
              </p>
           </div>
          <button className={item?.status === 'applied' ? "appliedBtn mt-2" : "applyBtn mt-2" }> {item?.status === 'applied' ? 'Applied' : 'Apply' } </button>
        </ApplicationCard>
      ))}
    </div>
  )
}
