import React from 'react'
import { EvaluationCompletedCard } from '../evaluationCompletedCard/evaluationCompletedCard'
import { EvaluationPendingCard } from '../evaluationPendingCard/evaluationPendingCard'
import { EvaluationProgress } from '../evaluationProgress/evaluationProgress'
import './evaluationCard.css'

export const EvaluationCard = () => {
  return (
    <section className="row">
      <div className="col-xl-6 mb-3">
        <EvaluationCompletedCard />
      </div>
      <div className="col-xl-6 mb-3">
        <EvaluationPendingCard />
      </div>
      <div className="col-xl-6 mb-3">
        <EvaluationProgress />
      </div>
      <div className="col-xl-6 mb-3">
        <EvaluationCompletedCard />
      </div>
    </section>
  )
}
