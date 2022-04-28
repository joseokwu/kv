import React from 'react'
import { useHistory } from 'react-router-dom'
import { TextArea, Button } from '../../../mentorComponents'

export const Advantage = () => {
  const {
    location: { hash },
    push,
  } = useHistory()

  return (
    <div className="">
      <div className="mx-5 my-5">
        <section className="evaluation_questions">
          <p>
            Competition Validation
            <span> - What is your initial impression about this idea</span>
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
            Value Proposition
            <span> - How unique/different/interesting/new about business?</span>
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
            Sustainable Advantage
            <span>
              {' '}
              - Is there competitive advantages not easily available to the
              competitors?
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
            Patent Strategy
            <span>
              {' '}
              - Is there a patent strategy for existing/circumvent patents?
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
            Patent Protection
            <span> - Is there capability to maintain and protect patents?</span>
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
            Competitor Response
            <span>
              {' '}
              - Is there evaluation of potential competitor responses?
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
            Competition Strategy
            <span> - Is there strategy prepared for competition?</span>
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

        <section className="evaluation_questions">
          <p>
            Marketing Effort
            <span>
              {' '}
              - Is there evidence of marketing efforts to enhance customer
              perception?
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
              push('#product_feasibility')
            }}
          >
            Go Back
          </button>
          <Button
            label="Next"
            onClick={() => {
              push('#team_competence')
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
