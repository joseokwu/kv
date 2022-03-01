import React, { useState } from 'react'
import { SmallModal, LargeModal, Tag } from '../../../../../Startupcomponents'
import { Feedback, TodoCard } from '../styled'
import doc from '../../../../../assets/icons/assdoc.svg'
import docIcon from '../../../../../assets/icons/docIcon.svg'
import lady from '../../../../../assets/images/smileLady.svg'
import { months } from '../../../../../utils/helpers'

export const Submitted = ({ data }) => {
  const buscomArr = [1, 2, 3, 4]
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <div className="row mt-3">
        {data.map((info, i) => (
          <TodoCard key={i} className="col-lg-6 col-md-6 col-12 mx-3 px-4 mt-3">
            {showModal ? (
              <LargeModal id={i} title="" closeModal={setShowModal}>
                <AssignmentFeedBackModal data={info} />
              </LargeModal>
            ) : (
              <span></span>
            )}
            <div className="d-flex justify-content-between head">
              <div className="d-flex">
                <h6 className="mr-3">{info?.topic}</h6>
              </div>
            </div>

            <div className="d-flex justify-content-between my-2 date">
              <h6>
                {new Date(info?.date).getDate()} |{' '}
                {months[new Date(info?.date).getMonth()]}
              </h6>
              <Tag name="Complete" bg="#D1FFD3" color="#337808" fz="12px" />
            </div>

            <div className="my-2 body">
              <p>{info?.description}</p>
            </div>

            <div className="my-4 subAssbtn">
              <button data-target={i} onClick={() => setShowModal(true)}>
                View Feedback
              </button>
            </div>
          </TodoCard>
        ))}
      </div>
    </div>
  )
}

export const AssignmentFeedBackModal = ({ data }) => {
  return (
    <Feedback className="mx-4 mb-5">
      <div className="row mx-5">
        <div className="mt-0 pb-2 border-bottom">
          <h2>Feedback</h2>
        </div>
        <div className="col-lg-4 my-5">
          <article className="deck-card">
            <div className="deck-card-img">
              <img src={doc} alt="document" />
            </div>
            <div className="d-flex align-items-start p-3">
              <img src={docIcon} alt="document icon" className="mr-2" />
              <span>
                <p>Business Plan</p>
                <small>21MB</small>
              </span>
            </div>
          </article>
        </div>
        <div className="col-lg-7 mx-2 my-5">
          <h4 className="pt-5 pb-2">{data?.topic}</h4>
          <span style={{ color: '#525151' }}>{data?.status} On</span>
          <div className="my-4 ">
            <h3>
              {new Date(data?.date).getDate()} |{' '}
              {months[new Date(data?.date).getMonth()]}
            </h3>
          </div>
        </div>

        <div className="body mb-3 py-4 px-5">
          <div className="d-flex mb-5">
            <img src={lady} alt="mentor pic" />
            <div className="ms-3">
              <h4>{data?.host?.name}</h4>
              <span>{data?.host?.position}</span>
            </div>
            <div className="ms-5 mt-4">
              <Tag name="2 Days Ago" bg="none" fz="12px" color="#2E3192" />
            </div>
          </div>
          <p>{data?.description}</p>
        </div>
      </div>
    </Feedback>
  )
}
