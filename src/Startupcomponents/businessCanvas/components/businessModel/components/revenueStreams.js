import React from 'react'

export const RevenueStreams = ({ data }) => {
  return (
    <div>
      <div className="business_model_canva_card mb-4">
        <section className="p-4">
          <h3>Revenue Streams</h3>
          <p className="pt-2"> { data } </p>
        </section>
      </div>
    </div>
  )
}
