import React from 'react'
import { ApplicationCard } from '../boosterPartner.styled'
import {
  compImage,
  Map,
  applicationCardData,
  cardDataModal,
  compdetailModal,
} from '../../../constants/domiData'
import { Modal, Tag } from '../../../Startupcomponents'
import approved from '../../../assets/icons/approved.svg'
import expired from '../../../assets/icons/ex.svg'
import cancel from '../../../assets/icons/cancel.svg'
import '../boosterPartner.css'

export const AllApplication = ({data}) => {
  const appliedArr = [1, 2]
  const approvedArr = [1]
  const expiredArr = [1]
  const declinedArr = [1, 2]

  return (
    <div className="row" style={{ columnGap: 10 }}>
      {/* Apply Card
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
      ))} */}

      {/* Approved Modal starts here */}
      <Modal id="approved" withHeader={false}>
        <ApprovedModal />
      </Modal>
      {/* Approved Modal end here */}

      {/* Approved */}
      {data && data.map((item , i) => (
        <ApplicationCard key={i} className="col-lg-4 col-12 col-md-6 mb-4">
          <div>
            {compImage.map((comp, i) => (
              <img className="" key={i} src={comp.logo} alt="company logo" />
            ))}
          </div>
          <div className="my-2">
           
              <h3> {item?.name} </h3>
          
          </div>
          <Tag name="Analytics" bg="#F5FFDE" color="#05C118" fz="12px" />
          <div className="my-3">
            
              <p >
                {data.description}
                <span data-target="#approved" data-toggle="modal">
                  Read More
                </span>
              </p>
            
          </div>
          <div>
            <button className="approvedBtn mt-2">
              <img className="mr-2 mb-1" src={approved} alt="approved icon" />
              Approved
            </button>
          </div>
        </ApplicationCard>
      ))}

      {/* Applied Modal starts here */}
      <Modal id="applied" withHeader={false}>
        <AppliedModal />
      </Modal>
      {/* Applied Modal end here */}

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
                <span data-target="#applied" data-toggle="modal">
                  Read More
                </span>
              </p>
            ))}
          </div>
          <button className="appliedBtn mt-2">Applied</button>
        </ApplicationCard>
      ))}

      {/* Expired Modal starts here */}
      <Modal id="expired" withHeader={false}>
        <ExpiredModal />
      </Modal>
      {/* Expired Modal end here */}

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
          <Tag name="Customer Support" bg="#FFFCDE" color="#C17605" fz="12px" />
          <div className="my-3">
            {applicationCardData.map((data, i) => (
              <p key={i}>
                {data.content}
                <span data-target="#expired" data-toggle="modal">
                  Read More
                </span>
              </p>
            ))}
          </div>
          <button className="expiredBtn mt-2">
            <img className="mr-2 mb-1" src={expired} alt="expired icon" />
            Expired
          </button>
        </ApplicationCard>
      ))}

      {/* Declined Modal starts here  */}
      <Modal id="declined" withHeader={false}>
        <DeclinedModal />
      </Modal>
      {/* Declined Modal end here */}

      {/* Declined Card */}
      
    </div>
  )
}

//Applied Modal
const AppliedModal = () => {
  return (
    <div className="applyModal px-4">
      <section className="pt-2">
        <button
          type="button"
          class="close close-founder-modal px-4"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </section>

      <div className="mt-5">
        {compImage.map((comp, i) => (
          <img className="" key={i} src={comp.logo} alt="company logo" />
        ))}
      </div>
      <div className="mt-3 d-flex justify-content-between">
        {cardDataModal.map((data, i) => (
          <div>
            <h3 key={i}>{data.header}</h3>
          </div>
        ))}
        <h6 className="mt-2">flutter.co</h6>
      </div>
      <div className="mb-4">
        <Tag name="Bike Rental" bg="#EDDEFF" color="#1405C1" fz="12px" />
      </div>
      <div className="">
        {compdetailModal.map((data, i) => (
          <div>
            <p key={i}>{data.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-5">
        {Map.map((applied, i) => (
          <div>
            <h2>{applied.title}</h2>

            <div className="text-center">
              <img
                className="w-75"
                key={i}
                src={applied.appliedMap}
                alt="applied map"
              />
              <div className="d-flex justify-content-around">
                <span className="appliedGreen">Applied</span>
                <span className="appliedBlur">Approved</span>
                <span className="appliedBlur">Success</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <div className="border-bottom pb-4">
        {cardDataModal.map((data, i) => (
          <div>
            <h4 className="mt-5 mb-3">{data.subtitle}</h4>
            <p key={i}>{data.body}</p>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between my-5">
        <button className="applyModalback">Back</button>
        <button className="cancelApp">Cancel Application</button>
      </div>
    </div>
  )
}

//Declined Modal
const DeclinedModal = () => {
  return (
    <div className="applyModal px-4">
      <section className="pt-2">
        <button
          type="button"
          class="close close-founder-modal px-4"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </section>

      <div className="mt-5">
        {compImage.map((comp, i) => (
          <img className="" key={i} src={comp.logo} alt="company logo" />
        ))}
      </div>
      <div className="mt-3 d-flex justify-content-between">
        {cardDataModal.map((data, i) => (
          <div>
            <h3 key={i}>{data.header}</h3>
          </div>
        ))}
        <h6 className="mt-2">flutter.co</h6>
      </div>
      <div className="mb-4">
        <Tag name="Cloud Computing" bg="#DEF6FF" color="#058DC1" fz="12px" />
      </div>
      <div className="">
        {compdetailModal.map((data, i) => (
          <div>
            <p key={i}>{data.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-5">
        {Map.map((declined, i) => (
          <div>
            <h2>{declined.title}</h2>

            <div className="text-center">
              <img
                className="w-75"
                key={i}
                src={declined.declinedMap}
                alt="applied map"
              />
              <div className="d-flex justify-content-around">
                <span className="appliedGreen">Applied</span>
                <span className="appliedBlur">Approved</span>
                <span className="appliedBlur">Success</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <div className="border-bottom pb-4">
        {cardDataModal.map((data, i) => (
          <div>
            <h4 className="mt-5 mb-3">{data.subtitle}</h4>
            <p key={i}>{data.body}</p>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between my-5">
        <button className="applyModalback">Back</button>
        <button className="reapplyBtn mt-2 me-2">Re-Apply</button>
      </div>
    </div>
  )
}

//Expired Modal
const ExpiredModal = () => {
  return (
    <div className="applyModal px-4">
      <section className="pt-2">
        <button
          type="button"
          class="close close-founder-modal px-4"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </section>

      <div className="mt-5">
        {compImage.map((comp, i) => (
          <img className="" key={i} src={comp.logo} alt="company logo" />
        ))}
      </div>
      <div className="mt-3 d-flex justify-content-between">
        {cardDataModal.map((data, i) => (
          <div>
            <h3 key={i}>{data.header}</h3>
          </div>
        ))}
        <h6 className="mt-2">flutter.co</h6>
      </div>
      <div className="mb-4">
        <Tag name="Customer Support" bg="#FFFCDE" color="#C17605" fz="12px" />
      </div>
      <div className="">
        {compdetailModal.map((data, i) => (
          <div>
            <p key={i}>{data.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-5">
        {Map.map((expired, i) => (
          <div>
            <h2>{expired.title}</h2>

            <div className="text-center">
              <img
                className="w-75"
                key={i}
                src={expired.expiredMap}
                alt="applied map"
              />
              <div className="d-flex justify-content-around">
                <span className="appliedGreen">Applied</span>
                <span className="appliedBlur">Approved</span>
                <span className="appliedBlur">Success</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <div className="border-bottom pb-4">
        {cardDataModal.map((data, i) => (
          <div>
            <h4 className="mt-5 mb-3">{data.subtitle}</h4>
            <p key={i}>{data.body}</p>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between my-5">
        <button className="applyModalback">Back</button>
        <button className="reapplyBtn mt-2 me-2">Re-Apply</button>
      </div>
    </div>
  )
}

//Approved Modal
const ApprovedModal = () => {
  return (
    <div className="applyModal px-4">
      <section className="pt-2">
        <button
          type="button"
          class="close close-founder-modal px-4"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </section>

      <div className="mt-5">
        {compImage.map((comp, i) => (
          <img className="" key={i} src={comp.logo} alt="company logo" />
        ))}
      </div>
      <div className="mt-3 d-flex justify-content-between">
        {cardDataModal.map((data, i) => (
          <div>
            <h3 key={i}>{data.header}</h3>
          </div>
        ))}
        <h6 className="mt-2">flutter.co</h6>
      </div>
      <div className="mb-4">
      <Tag name="Analytics" bg="#F5FFDE" color="#05C118" fz="12px" />
      </div>
      <div className="">
        {compdetailModal.map((data, i) => (
          <div>
            <p key={i}>{data.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-5">
        {Map.map((approved, i) => (
          <div>
            <h2>{approved.title}</h2>

            <div className="text-center">
              <img
                className="w-75"
                key={i}
                src={approved.approvedMap}
                alt="applied map"
              />
              <div className="d-flex justify-content-around">
                <span className="appliedGreen">Applied</span>
                <span className="appliedBlur">Approved</span>
                <span className="appliedBlur">Success</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <div className="border-bottom pb-4">
        {cardDataModal.map((data, i) => (
          <div>
            <h4 className="mt-5 mb-3">{data.subtitle}</h4>
            <p key={i}>{data.body}</p>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between my-5">
        <button className="applyModalback">Back</button>
        <div>
          {/* <button className="cancelApp">Cancel Application</button> */}
          <button className="approvedBtn mt-2">
            <img className="mr-2 mb-1" src={approved} alt="approved icon" />
            Approved
          </button>
        </div>
      </div>
    </div>
  )
}
