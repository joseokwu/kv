import React from 'react'
import kenny from '../../assets/images/kenny.svg'

export const CurrentInvestorConnectCard = () => {
  return (
   
    <section className="d-flex align-items-center justify-content-between mt-4 product-investor">
      <div className="d-flex align-items-center">
        <img src={kenny} alt="investor" className="mr-3" />
        <span>
          <p>Mr Promise Amstel</p>
        </span>
      </div>
      <a href="https://www.yebox.io/">Connect</a>
    </section>
  )
}
