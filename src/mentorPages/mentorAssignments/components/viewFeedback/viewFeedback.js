import React, { useState, useRef, useEffect } from 'react'
import './viewFeedback.css'
import left from '../../../../assets/icons/chervonLeft.svg'
import { Modal, Tabs } from '../../../../mentorComponents'
import { FiChevronUp } from 'react-icons/fi'
import apple from '../../../../assets/icons/appleSmall.svg'
import maindoc from '../../../../assets/images/mani-doc.svg'
import pitchicon from '../../../../assets/icons/pitchd.svg'
import { FeedbackModal } from '../feedbackModal'
import { useHistory } from 'react-router'

export const MentorViewFeedback = ({ history }) => {
  const {
    goBack,
    location: { hash },
  } = history
  const { push } = useHistory;

  const renderContent = () => {
    switch (hash.replaceAll('%20', '')) {
      case '#Submitted':
        return <SubmittedFeedback />

      case '#Not-Submitted':
        return <div></div>

      default:
        return <SubmittedFeedback />
    }
  }

  const tabItems = ['Submitted', 'Not-Submitted']

  return (
    <div className="container px-4 py-5">
      <div className="d-flex justify-content-between">
        <section
          className="d-flex align-items-center"
          role="button"
          onClick={() => history.push('/mentor/assignments')}
        >
          <img src={left} alt="left" style={{ transform: 'rotate(180deg)' }} />
          <span className="ml-2 bread-start">Go Back</span>
        </section>
      </div>

      <div>
        <section className="mt-4">
          <Tabs tabItems={tabItems} />
        </section>
        <section className="mt-1">{renderContent()}</section>
      </div>
    </div>
  )
}

const SubmittedFeedback = () => {
  const [active, setActive] = useState(false)

  const contentRef = useRef(null)

  const feedArr = [1]

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : '0px'
  }, [contentRef, active])

  const toggleAccordion = () => {
    setActive(!active)
  }

  return (
    <>
      <Modal id="feedbackModal" title="Feedback">
        <FeedbackModal />
      </Modal>
      <div className="my-5">
        {feedArr.map((feed, i) => (
          <div key={i} className="my-5">
            <button
              className={`feed-start ${active}`}
              onClick={toggleAccordion}
            >
              <div>
                <div className="feed-align py-4 px-3">
                  <div className="d-flex">
                    <img className="pe-3" src={apple} alt="" />
                    <h4 className="feed-style">Applane Insteen.</h4>
                  </div>

                  <FiChevronUp
                    className={active ? `feed-icon rotate` : `feed-icon`}
                  />
                </div>
                <div
                  ref={contentRef}
                  className={active ? `answer answer-divider` : `answer`}
                >
                  <div className="business_model_canva_card">
                    <div className="row mb-5">
                      <div className="col-lg-8 p-5 company_details">
                        <div className="mt-4">
                          <h3>Business plan for Applane Insteen</h3>
                        </div>

                        <div className="mt-4">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Enim lectus morbi elementum eu.Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Enim lectus morbi elementum eu.Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit.
                          </p>
                        </div>

                        <div className="mt-4">
                          <button
                            className="pending_evaluation"
                            data-toggle="modal"
                            data-target="#feedbackModal"
                          >
                            Give Feedback
                          </button>
                        </div>
                      </div>

                      <div className="col-lg-4 mt-5 pl- mb-5">
                        <article className="deck-card">
                          <div className="deck-card-img">
                            <img src={maindoc} alt="document" />
                          </div>
                          <div className="d-flex align-items-start p-3">
                            <img
                              src={pitchicon}
                              alt="document icon"
                              className="mr-2"
                            />
                            <span>
                              <p>Business Plan</p>
                              <small>21MB</small>
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
