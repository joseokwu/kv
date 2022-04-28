import React from 'react'
import { useHistory } from 'react-router-dom'
import { TextArea, Button } from '../../../mentorComponents'

export const Feasibility = () => {
  const {
    location: { hash },
    push,
  } = useHistory()

  return (
    <div>
      <div className="mx-5 my-5">
        <section className="evaluation_questions">
          <p>
            Concept Maturity{' '}
            <span>
              - How strongly you believe that the concept can be realized to a
              product?
            </span>
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
            Sales & Distribution{' '}
            <span>
              - How effective is plan on sales and distribution channels?
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
            Product Maturity
            <span>
              {' '}
              - Is there evidence of the functional feasibility of the product?
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
            Manufacturability
            <span>
              {' '}
              - Is there evidence of manufacturability with efficiency and low
              cost?
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
            Clarified Tradeoffs
            <span>
              {' '}
              - Is there clarification of trade-offs in performance, cost, etc?
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
              push('#market_attractiveness')
            }}
          >
            Go Back
          </button>
          <Button
            label="Next"
            onClick={() => {
              push('#product_advantage')
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
