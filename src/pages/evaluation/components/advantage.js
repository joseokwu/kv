import React from 'react'
import { TextArea } from '../../../components'

export const Advantage = () => {
  return (
    <div className="mx-5 my-5">
      <section className="evaluation_questions">
        <p>
          Competition Validation
          <span> - What is your initial impression about this idea</span>
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
          Value Proposition
          <span> - How unique/different/interesting/new about business?</span>
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
          Sustainable Advantage
          <span> - Is there competitive advantages not easily available to the
            competitors?
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
          Patent Strategy
          <span> - Is there a patent strategy for existing/circumvent patents?
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
          Patent Protection
          <span> - Is there capability to maintain and protect patents?</span>
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
          Competitor Response
          <span> - Is there evaluation of potential competitor responses?</span>
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
          Competition Strategy
          <span> - Is there strategy prepared for competition?</span>
        </p>
      </section>

      <section className="evaluation_grade mt-3 mb-3">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </section>

      <section className="evaluation_questions">
        <p>
        Marketing Effort
          <span> - Is there evidence of marketing efforts to enhance customer perception?</span>
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
  )
}
