import React from 'react'

export const SalesStrategy = ({ data }) => {
  return (
    <div>
      <div className="business_model_canva_card">
        <section className="p-4">
          <h3>Sales Strategy</h3>
          <p className="pt-3"> { data } </p>
        </section>
      </div>
    </div>
  )
}
