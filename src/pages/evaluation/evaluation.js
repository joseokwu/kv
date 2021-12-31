import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import './evaluation.css'
import questionMark from '../../assets/icons/questionMark.svg'
import left from '../../assets/icons/chervonLeft.svg'
import { Market } from './components/market'
import { Feasibility } from './components/feasibility'
import { Advantage } from './components/advantage'
import { Competence } from './components/competence'
import { Return } from './components/return'
import { Growth } from './components/growth'
import { Button } from '../../components'

export const Evaluation = ({ history }) => {
  const { goBack } = history
  const {
    location: { hash },
    push,
  } = useHistory()

  const switchForm = (currentHash) => {
    push(currentHash)
  }

  return (
    <div className="px-5 py-4">
      <div className="d-flex justify-content-between">
        <section
          className="d-flex align-items-center mb-5"
          role="button"
          onClick={goBack}
        >
          <img src={left} alt="left" style={{ transform: 'rotate(180deg)' }} />
          <p className="ml-2 bread-start">Go Back</p>
        </section>

        <section>
          <button className="watch_pitch_btn">Watch Pitch</button>
        </section>
      </div>

      <div className="ml-5">
        <section className="evaluate_header">
          <h3>Evaluation</h3>
        </section>
      </div>

      <div className="ml-5 mt-4 mb-4 mr-5">
        <section className="evaluate_wrap  pl-2 pr-5">
          <ul className="evaluate_list d-flex">
            <li
              onClick={() => switchForm('#market_attractiveness')}
              className={
                (hash === '#market_attractiveness' || hash === '') &&
                'li-active'
              }
            >
              Market Attractiveness
            </li>

            <li
              onClick={() => switchForm('#product_feasibility')}
              className={
                (hash === '#product_feasibility' || hash === '') && 'li-active'
              }
            >
              Product Feasibility
            </li>

            <li
              onClick={() => switchForm('#product_advantage')}
              className={
                (hash === '#product_advantage' || hash === '') && 'li-active'
              }
            >
              Product Advantage
            </li>

            <li
              onClick={() => switchForm('#team_competence')}
              className={
                (hash === '#team_competence' || hash === '') && 'li-active'
              }
            >
              Team Competence
            </li>

            <li
              onClick={() => switchForm('#expected_return')}
              className={
                (hash === '#expected_return' || hash === '') && 'li-active'
              }
            >
              Expected Return
            </li>

            <li
              onClick={() => switchForm('#growth_potential')}
              className={
                (hash === '#growth_potential' || hash === '') && 'li-active'
              }
            >
              Growth Potential
            </li>
          </ul>
        </section>
      </div>

      <section className="market_body ml-5 mr-5">
        <div className="col px-5 d-flex evaluation_scale_border py-3">
          <section className="mr-3">
            <img src={questionMark} alt="Question Mark" />
          </section>

          <div className="row d-flex">
            <section className="evaluation_scale mt-1">
              <p>Scale -</p>
            </section>

            <section className="evaluation_rate d-flex mt-1">
              <p className="pr-3 pl-3">1-Poor</p>
              <p className="pr-3 pl-3">2-Fair</p>
              <p className="pr-3 pl-3">3-Good</p>
              <p className="pr-3 pl-3">4-Very Good</p>
              <p className="pr-3 pl-3">5-Excellent</p>
            </section>
          </div>
        </div>
        {hash === '#market_attractiveness' ? (
          <Market />
        ) : hash === '#product_feasibility' ? (
          <Feasibility />
        ) : hash === '#product_advantage' ? (
          <Advantage />
        ) : hash === '#team_competence' ? (
          <Competence />
        ) : hash === '#expected_return' ? (
          <Return />
        ) : hash === '#growth_potential' ? (
          <Growth />
        ) : (
          hash === ''
        )}
      </section>

      <section className="evaluation_score ml-5 mr-5 py-4 px-5 d-flex justify-content-between">
        <div>
          <p className="mt-2">Total Score: 100</p>
        </div>

        <div className="d-flex">
          <button
            className="btn-back mr-2"
            onClick={() => {
              goBack()
            }}
          >
            Go Back
          </button>
          <Button
            label="Next"
            onClick={() => {
              push('#product_feasibility')
            }}
          />
        </div>
      </section>

      <section className="evaluation_criteria ml-5 mt-3 pl-5 mb-5">
        <p>Scores below 100 will not be shortlisted for the next round.</p>
      </section>
    </div>
  )
}
