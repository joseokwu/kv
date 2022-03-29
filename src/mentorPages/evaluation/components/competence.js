import React from 'react'
import { useHistory } from 'react-router-dom'
import { TextArea, Button } from '../../../mentorComponents'

export const Competence = () => {
  const {
    location: { hash },
    push,
  } = useHistory()

  return (
    <div>
      <div className="mx-5 my-5">
        <section className="evaluation_questions">
          <p>
            Team Size
            <span> - Is there adequate manpower in the startup?</span>
          </p>
        </section>

        <section className="evaluation_grade row mt-4 mb-4">
        <button className="col-lg-1 col-12 mt-2">0</button>
        <button className="col-lg-1 col-12 mt-2">1</button>
          <button className="col-lg-1 col-12 mt-2">2</button>
          <button className="col-lg-1  col-12 mt-2">3</button>
          <button className="col-lg-1 col-12 mt-2">4</button>
          <button className="col-lg-1 col-12 mt-2">5</button>
        </section>

        <section className="evaluation_questions">
          <p>
            Marketing/Sales Expertise
            <span>
              {' '}
              - Is there marketing/sales experience in the startup team?
            </span>
          </p>
        </section>

        <section className="evaluation_grade mt-4 mb-4">
        <button className="col-lg-1 col-12 mt-2">0</button>
        <button className="col-lg-1 col-12 mt-2">1</button>
          <button className="col-lg-1 col-12 mt-2">2</button>
          <button className="col-lg-1  col-12 mt-2">3</button>
          <button className="col-lg-1 col-12 mt-2">4</button>
          <button className="col-lg-1 col-12 mt-2">5</button>
        </section>

        <section className="evaluation_questions">
          <p>
            Technology Expertise
            <span>
              {' '}
              - Is there product development skill set in the startup team?
            </span>
          </p>
        </section>

        <section className="evaluation_grade mt-4 mb-4">
        <button className="col-lg-1 col-12 mt-2">0</button>
        <button className="col-lg-1 col-12 mt-2">1</button>
          <button className="col-lg-1 col-12 mt-2">2</button>
          <button className="col-lg-1  col-12 mt-2">3</button>
          <button className="col-lg-1 col-12 mt-2">4</button>
          <button className="col-lg-1 col-12 mt-2">5</button>
        </section>

        <section className="evaluation_questions">
          <p>
            Management Expertise
            <span> - Is there management experience in the startup team?</span>
          </p>
        </section>

        <section className="evaluation_grade mt-4 mb-4">
        <button className="col-lg-1 col-12 mt-2">0</button>
        <button className="col-lg-1 col-12 mt-2">1</button>
          <button className="col-lg-1 col-12 mt-2">2</button>
          <button className="col-lg-1  col-12 mt-2">3</button>
          <button className="col-lg-1 col-12 mt-2">4</button>
          <button className="col-lg-1 col-12 mt-2">5</button>
        </section>

        <section className="evaluation_questions">
          <p>
            Financial Expertise
            <span> - Is there a financial skill set in the startup team?</span>
          </p>
        </section>

        <section className="evaluation_grade mt-4 mb-4">
        <button className="col-lg-1 col-12 mt-2">0</button>
        <button className="col-lg-1 col-12 mt-2">1</button>
          <button className="col-lg-1 col-12 mt-2">2</button>
          <button className="col-lg-1  col-12 mt-2">3</button>
          <button className="col-lg-1 col-12 mt-2">4</button>
          <button className="col-lg-1 col-12 mt-2">5</button>
        </section>

        <section className="evaluation_questions">
          <p>
            Prior Startup Experience
            <span>
              {' '}
              - Is there prior entrepreneurship experience in the startup team?
            </span>
          </p>
        </section>

        <section className="evaluation_grade mt-4 mb-4">
        <button className="col-lg-1 col-12 mt-2">0</button>
        <button className="col-lg-1 col-12 mt-2">1</button>
          <button className="col-lg-1 col-12 mt-2">2</button>
          <button className="col-lg-1  col-12 mt-2">3</button>
          <button className="col-lg-1 col-12 mt-2">4</button>
          <button className="col-lg-1 col-12 mt-2">5</button>
        </section>

        <section className="evaluation_questions">
          <p>
            Feedback Mechanism
            <span>
              {' '}
              - Is there a team mechanism to listen and respond to customers?
            </span>
          </p>
        </section>

        <section className="evaluation_grade mt-3 mb-3">
        <button className="col-lg-1 col-12 mt-2">0</button>
        <button className="col-lg-1 col-12 mt-2">1</button>
          <button className="col-lg-1 col-12 mt-2">2</button>
          <button className="col-lg-1  col-12 mt-2">3</button>
          <button className="col-lg-1 col-12 mt-2">4</button>
          <button className="col-lg-1 col-12 mt-2">5</button>
        </section>

        <section className="evaluation_comment mt-5 mb-3">
          <p>Leave a comment</p>

          <TextArea placeholder="Enter correspondence address" rows={6} />
        </section>
      </div>

      <section className="evaluation_score ml-5 mr-5 py-4 px-5 d-flex justify-content-between">
        <div>
          <p className="mt-2">Total Score: 100</p>
        </div>

        <div className="d-flex">
          <button
            className="btn-back mr-2"
            onClick={() => {
              push('#product_advantage')
            }}
          >
            Go Back
          </button>
          <Button
            label="Next"
            onClick={() => {
              push('#expected_return')
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
