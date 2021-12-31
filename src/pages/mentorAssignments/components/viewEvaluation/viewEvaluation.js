import React from 'react'
import './viewEvaluation.css'
import clock from '../../../../assets/icons/clockTime.svg'
import maindoc from '../../../../assets/images/mani-doc.svg'
import pitchicon from '../../../../assets/icons/pitchd.svg'
import logo from '../../../../assets/images/yeLogo.svg'
import left from '../../../../assets/icons/chervonLeft.svg'
import { useHistory } from 'react-router-dom'

export const ViewEvaluation = ({ history }) => {
  const { goBack } = history

  const { push } = useHistory()

  const com = [1, 2, 3, 4]
  return (
    <div className="">
      <div className="d-flex justify-content-between">
        <section
          className="d-flex align-items-center m-5"
          role="button"
          onClick={goBack}
        >
          <img src={left} alt="left" style={{ transform: 'rotate(180deg)' }} />
          <p className="ml-2 bread-start">Go Back</p>
        </section>

        <section className="m-5">
          <button
            className="pending_evaluation"
            onClick={() => push('/mentor/assignments/create/details')}
          >
            Give Feedback
          </button>
        </section>
      </div>

      <div className="business_model_canva_card assignment_view_evaluation">
        <section className="d-flex justify-content-between assignment_head pb-4">
          <div className="view_evaluation">
            <p>
              Topic: <span>Create a business plan</span>
            </p>
          </div>

          <div className="text-right">
            <p className="view_evaluation_date">
              Deadline: <b>50</b> <span> September</span>
            </p>
            <p className="view_evaluation_time">
              <img src={clock} alt="clock" /> 10:00pm - 12pm
            </p>
          </div>
        </section>

        <section className="assignment_template mt-4 pb-4">
          <p className="pb-4">Attached Document Template</p>
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
        </section>

        <section className="mt-4">
          <div className="d-flex justify-content-between assignment_table_head pb-3">
            <p>Startup</p>
            <p>Submission Status</p>
            <p>Action</p>
          </div>

          <div className="">
            {com.map((c, i) => {
              return (
                <section className="">
                  <AssignmentStatus />
                </section>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

const AssignmentStatus = () => {
  return (
    <div className="assignment_table_body d-flex justify-content-between pb-3">
      <div className="assignment_startup mt-2">
        <img src={logo} alt="company logo" />
        <p className="pt-1">Yebox Technology</p>
      </div>
      <div className="assignment_status mt-4">
        <span>Not submitted</span>
      </div>
      <div className="assignment_action mt-4">
        <a href="#!">View</a>
      </div>
    </div>
  )
}
