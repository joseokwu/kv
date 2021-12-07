import React from 'react'
import fanai from '../../assets/images/fanai.svg'
import kenny from '../../assets/images/kenny.svg'

export const CurrentInvestorConnectCard = () => {
  return (
    <div className="d-flex justify-content-between mt-4">
      <div className="d-flex">
        <img className="pr-3" src={kenny} alt="team member" />
        <div className="">
          <h2 className="text-left">Kenny Ann</h2>
        </div>
      </div>

      <div className="current_investor_connect">
        <a href="#!">Connect</a>
      </div>
    </div>
  )
}
