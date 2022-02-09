import React from 'react'
import { ApplicationCard } from '../boosterPartner.styled'
import { compImage, applicationCardData } from '../../../constants/domiData'
import { Tag } from '../../../Startupcomponents'
import approved from '../../../assets/icons/approved.svg'
import expired from '../../../assets/icons/ex.svg'
import cancel from '../../../assets/icons/cancel.svg'

export const AllApplication = () => {
  const applyArr = [1]
  const appliedArr = [1, 2]
  const approvedArr = [1]
  const expiredArr = [1]
  const declinedArr = [1]

  return (
    <div className="row" style={{ columnGap: 10 }}>
      {/* Apply Card */}
      {applyArr.map((i) => (
        <ApplicationCard key={i} className="col-lg-4 col-12 col-md-6 mb-4">
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
          <Tag name="Analytics" bg="#F5FFDE" color="#05C118" fz="12px" />
          <div className="my-3">
            {applicationCardData.map((data, i) => (
              <p key={i}>
                {data.content}
                <span>Read More</span>
              </p>
            ))}
          </div>
          <button className="applyBtn mt-2">Apply</button>
        </ApplicationCard>
      ))}

      {/* Approved */}
      {approvedArr.map((i) => (
        <ApplicationCard key={i} className="col-lg-4 col-12 col-md-6 mb-4">
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
          <Tag name="Accounting" bg="#DEF6FF" color="#058DC1" fz="12px" />
          <div className="my-3">
            {applicationCardData.map((data, i) => (
              <p key={i}>
                {data.content}
                <span>Read More</span>
              </p>
            ))}
          </div>
          <div>
            <button className="approvedBtn mt-2">
              <img className="mr-2 mb-1" src={approved} alt="approved icon" />
              Approved
            </button>
          </div>
        </ApplicationCard>
      ))}

      {/* Applied Card */}
      {appliedArr.map((i) => (
        <ApplicationCard key={i} className="col-lg-4 col-12 col-md-6 mb-4">
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

      {/* Expired Card */}
      {expiredArr.map((i) => (
        <ApplicationCard key={i} className="col-lg-4 col-12 col-md-6 mb-4">
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
          <Tag name="Cloud Computing" bg="#DEF6FF" color="#058DC1" fz="12px" />
          <div className="my-3">
            {applicationCardData.map((data, i) => (
              <p key={i}>
                {data.content}
                <span>Read More</span>
              </p>
            ))}
          </div>
          <button className="expiredBtn mt-2">
            <img className="mr-2 mb-1" src={expired} alt="expired icon" />
            Expired
          </button>
        </ApplicationCard>
      ))}

      {/* Declined Card */}
      {declinedArr.map((i) => (
        <ApplicationCard key={i} className="col-lg-4 col-12 col-md-6 mb-4">
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
          <Tag name="Cloud Computing" bg="#DEF6FF" color="#058DC1" fz="12px" />
          <div className="my-3">
            {applicationCardData.map((data, i) => (
              <p key={i}>
                {data.content}
                <span>Read More</span>
              </p>
            ))}
          </div>
          <button className="reapplyBtn mt-2 me-2">Re-Apply</button>
          <button className="declinedBtn mt-2">
            <img className="mr-2 mb-1" src={cancel} alt="declined icon" />
            Declined
          </button>
        </ApplicationCard>
      ))}
    </div>
  )
}
