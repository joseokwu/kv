import React from 'react'
import logo from '../../assets/icons/kvlogo.svg'
import './teamMemberAuthSide.css'

export const TeamMemberAuthSide = () => {
  return (
    <div className="mentor_auth">
      <div className="mentor_auth_side">
        <div className="mb-3">
          <img src={logo} alt={'logo'} />
        </div>
        <h1>Grow your startups. Become a KV member today.</h1>
        <p className="py-4">
          We are inviting startups to help them incubate and accelerate business
          idea to funding
        </p>
      </div>
    </div>
  )
}
