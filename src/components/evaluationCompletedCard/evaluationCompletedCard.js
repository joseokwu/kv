/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './evaluationCompletedCard.css'
import logo from '../../assets/images/yeLogo.svg'
import { Tag } from '../../components'

export const EvaluationCompletedCard = () => {
  return (
    <div className="opp-card">
      <section className="d-flex align-items-center justify-content-between mb-2">
        <img src={logo} alt="logo" />
        <span class="completed-tag">Completed</span>
      </section>

      <section className="mb-2 d-flex align-items-center justify-content-between">
        <h4 className="opp-company">Yebox Technology</h4>
        {/* <span className="active-dot"></span> */}
      </section>
      
      <section className="d-flex align-items-center" style={{ columnGap: 10 }}>
        <Tag name="Fintech" />
        <Tag name="Incubation Program" color="#40439A" />
        <Tag name="Accounting" />
      </section>

      <section className="opp-content mt-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
          morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. <a href="#!">More Details</a>
        </p>
      </section>

      <section className="d-flex align-items-center justify-content-between opp-footer-text">
        <div>
          <button disabled className="completed_evaluation">
            Evaluated
          </button>
        </div>
      </section>
    </div>
  )
}
