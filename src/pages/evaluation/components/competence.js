import React from 'react'
import { TextArea } from '../../../components'


export const Competence = () => {
  return (
    <div className="mx-5 my-5">
      <section className="evaluation_questions">
        <p>
          Team Size
          <span> - Is there adequate manpower in the startup?</span>
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
          Marketing/Sales Expertise
          <span> - Is there marketing/sales experience in the startup team?</span>
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
          Technology Expertise
          <span> - Is there product development skill set in the startup team?
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
          Management Expertise
          <span> - Is there management experience in the startup team?
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
        Financial Expertise
          <span> - Is there a financial skill set in the startup team?</span>
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
          Prior Startup Experience
          <span> - Is there prior entrepreneurship experience in the startup team?</span>
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
        Feedback Mechanism
          <span> - Is there a team mechanism to listen and respond to customers?</span>
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

