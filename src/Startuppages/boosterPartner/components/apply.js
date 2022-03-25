import React from 'react'
import { ApplicationCard } from '../boosterPartner.styled'
import {
  compImage,
  applicationCardData,
  cardDataModal,
  compdetailModal,
} from '../../../constants/domiData'
import { Modal, Tag } from '../../../Startupcomponents'
import '../boosterPartner.css'

export const Apply = () => {
  const applyArr = [1, 2, 3]

  return (
    <div className="row" style={{ columnGap: 10 }}>
      <Modal id="apply" withHeader={false}>
        <ApplyModal />
      </Modal>

      {applyArr.map((i) => (
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
          <Tag name="Analytics" bg="#F5FFDE" color="#05C118" fz="12px" />
          <div className="my-3">
            {applicationCardData.map((data, i) => (
              <p key={i}>
                {data.content}
                <span data-target="#apply" data-toggle="modal">
                  Read More
                </span>
              </p>
            ))}
          </div>
          <button
            className="applyBtn mt-2"
            data-target="#apply"
            data-toggle="modal"
          >
            Apply
          </button>
        </ApplicationCard>
      ))}
    </div>
  )
}

const ApplyModal = () => {
  return (
    <div className="applyModal px-4">
      <section className="pt-2">
        <button
          type="button"
          className="close close-founder-modal px-4 py-2"
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
        <Tag
          className=""
          name="Analytics"
          bg="#F5FFDE"
          color="#05C118"
          fz="12px"
        />
      </div>
      <div className="">
        {compdetailModal.map((data, i) => (
          <div>
            <p key={i}>{data.detail}</p>
          </div>
        ))}
      </div>
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
        <button className="applyModalapply">Apply</button>
      </div>
    </div>
  )
}
