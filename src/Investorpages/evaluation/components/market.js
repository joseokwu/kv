import React from 'react'
import { useHistory } from 'react-router-dom'
import { TextArea, Button } from '../../../mentorComponents'

export const Market = () => {
  // const { goBack } = history
  const {
    location: { hash },
    push,
  } = useHistory()

  return (
    <div>
      <div className="mx-5 my-5">
        <section className="evaluation_questions">
          <p>
            Problem{' '}
            <span>- What is your initial impression about this idea</span>
          </p>
        </section>

        <section className="evaluation_grade mt-4 mb-4">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </section>

        <section className="evaluation_questions">
          <p>
            Solution{' '}
            <span>- What is your initial impression about solution</span>
          </p>
        </section>

        <section className="evaluation_grade mt-4 mb-4">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </section>

        <section className="evaluation_questions">
          <p>
            Demand Validation{' '}
            <span>
              - Is there voice-of-customer type evidence or demand validation?
            </span>
          </p>
        </section>

        <section className="evaluation_grade mt-4 mb-4">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </section>

        <section className="evaluation_questions">
          <p>
            Customer Affordability{' '}
            <span>
              - Is there evidence that customers will be interested in
              purchasing the product in currently or future?
            </span>
          </p>
        </section>

        <section className="evaluation_grade mt-4 mb-4">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </section>

        <section className="evaluation_questions">
          <p>
            Market Demographics{' '}
            <span>
              - Is the size of the potential market big enough to be worth
              pursuing? how big can it become?
            </span>
          </p>
        </section>

        <section className="evaluation_grade mt-4 mb-4">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </section>

        <section className="evaluation_questions">
          <p>
            Benefit Understanding{' '}
            <span>
              - Is there evidence of product’s benefits offered to customer?
            </span>
          </p>
        </section>

        <section className="evaluation_grade mt-4 mb-4">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </section>

        <section className="evaluation_questions">
          <p>
            Subjective Constraint{' '}
            <span>
              - Is there is a high or low barrier to entry with identical
              product / services offered by many or few competitors?
            </span>
          </p>
        </section>

        <section className="evaluation_grade mt-3 mb-3">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
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
          {/* <button
            className="btn-back mr-2"
            onClick={() => {
              push('#market_attractiveness')
            }}
          >
            Go Back
          </button> */}
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
