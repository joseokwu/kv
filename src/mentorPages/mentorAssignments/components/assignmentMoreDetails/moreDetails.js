import React from 'react'
import logo from '../../../../assets/images/yeLogo.svg'
import './moreDetails.css'
import maindoc from '../../../../assets/images/mani-doc.svg'
import pitchicon from '../../../../assets/icons/pitchd.svg'
import { Modal } from '../../../../mentorComponents'
import { FeedbackModal } from '../feedbackModal'
import left from '../../../../assets/icons/chervonLeft.svg'

export const MoreDetails = ({ history }) => {
  const { goBack } = history

  return (
    <div className="wrapper">
      <Modal id="feedbackModal" title="Feedback">
        <FeedbackModal />
      </Modal>

      <section
        className="d-flex align-items-center mb-5"
        role="button"
        onClick={goBack}
      >
        <img src={left} alt="left" style={{ transform: 'rotate(180deg)' }} />
        <span className="ml-2 bread-start">Go Back</span>
      </section>

      <div className="business_model_canva_card m-5">
        <div className="row m-5">
          <div className="col-lg-8 p-5 company_details">
            <img src={logo} alt="company logo" />
            <h2 className="pt-2">Yebox Technology</h2>

            <div className="mt-4">
              <h3>Business plan for Applane Insteen</h3>
            </div>

            <div className="mt-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Enim lectus morbi elementum
                eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                <img src={pitchicon} alt="document icon" className="mr-2" />
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
  )
}
