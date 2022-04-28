import React from 'react'
import { useHistory } from 'react-router-dom'
import { TextArea, Button } from '../../../mentorComponents'

export const Return = () => {
  const {
    location: { hash },
    push,
  } = useHistory()

  return (
    <div>
      <div className="mx-5 my-5">
        <section className="evaluation_questions">
          <p>
            Profitability
            <span> - Is there evidence of adequate profitability?</span>
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
            Risk Assessment
            <span> - Is there evidence of risk assessment?</span>
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
            Risk Mitigation
            <span> - Is there evidence of risk mitigation measures?</span>
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
              push('#team_competence')
            }}
          >
            Go Back
          </button>
          <Button
            label="Next"
            onClick={() => {
              push('#growth_potential')
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
