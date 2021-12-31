import React from 'react'
import { TextArea } from '../../../components'


export const Return = () => {
  return (
    <div className="mx-5 my-5">
      <section className="evaluation_questions">
        <p>
            Profitability
          <span> - Is there evidence of adequate profitability?
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
            Risk Assessment
          <span> - Is there evidence of risk assessment?
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
            Risk Mitigation
          <span> - Is there evidence of risk mitigation measures?
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

      <section className="evaluation_comment mt-5 mb-3">
        <p>Leave a comment</p>

        <TextArea placeholder="Enter correspondence address" rows={6} />
      </section>
    </div>
  )
}
