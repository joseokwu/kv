import React from 'react'
import { TextArea } from '../../../components'


export const Feasibility = () => {
  return (
    <div className="mx-5 my-5">
      <section className="evaluation_questions">
        <p>
        Concept Maturity <span>-  How strongly you believe that the concept can be realized to a product?</span>
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
        Sales & Distribution <span>- How effective is plan on sales and distribution channels?</span>
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
        Product Maturity
          <span> - Is there evidence of the functional feasibility of the product?
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
        Manufacturability
          <span> - Is there evidence of manufacturability with efficiency and low cost?
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
        Clarified Tradeoffs
          <span> - Is there clarification of trade-offs in performance, cost, etc?
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

        <TextArea 
            placeholder="Enter correspondence address" 
            rows={6}
        />
      </section>
    </div>
  )
}
