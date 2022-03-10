import React from 'react'
import { useHistory } from 'react-router-dom'
import { TextArea, Button } from '../../../mentorComponents'

export const Growth = () => {
  const {
    location: { hash },
    push,
  } = useHistory()

  return (
    <div>
      <div className="mx-5 my-5">
        <section className="evaluation_questions">
          <p>
            Growth Strategy
            <span>
              {' '}
              - Is there evidence of strategies and potential for future growth?
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
            Capital Availability
            <span> - Is there evidence of adequate capital for growth?</span>
          </p>
        </section>

        <section className="evaluation_grade mt-4 mb-4">
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
          <button
            className="btn-back mr-2"
            onClick={() => {
              push('#expected_return')
            }}
          >
            Go Back
          </button>
          <Button
            label="Submit"
            onClick={() => {
              push('')
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
