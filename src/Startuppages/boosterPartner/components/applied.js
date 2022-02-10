import React from 'react'
import { ApplicationCard } from '../boosterPartner.styled'
import { compImage, applicationCardData } from '../../../constants/domiData'
import { Tag } from '../../../Startupcomponents'

export const Applied = () => {
  const appliedArr = [1, 2, 3]

  return (
    <div className="row" style={{ columnGap: 10 }}>
      {appliedArr.map((i) => (
        <ApplicationCard key={i} className="col-lg-4 col-12 col-md-6">
          <div>
            {compImage.map((comp, i) => (
              <img className="" key={i} src={comp.logo} alt="company logo" />
            ))}
          </div>
          <div className="my-2">
            {applicationCardData.map((data, i) => (
              <h3 key={i}>{data.title}</h3>
            ))}
          </div>
          <Tag name="Bike Rental" bg="#EDDEFF" color="#1405C1" fz="12px" />
          <div className="my-3">
            {applicationCardData.map((data, i) => (
              <p key={i}>
                {data.content}
                <span>Read More</span>
              </p>
            ))}
          </div>
          <button className="appliedBtn mt-2">Applied</button>
        </ApplicationCard>
      ))}
    </div>
  )
}
