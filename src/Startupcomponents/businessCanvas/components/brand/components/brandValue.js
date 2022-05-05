import React from 'react'

export const BrandValue = ({ data }) => {
  return (
    <div>
      <div className="business_model_canva_card mb-4">
        <section className="p-4">
          <h3>Brand Value</h3>
          <p className="pt-3">
          { data }
          </p>
        </section>
      </div>
    </div>
  )
}