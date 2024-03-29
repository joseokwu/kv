import React from 'react'
import logo from '../../assets/icons/kvlogo.svg'
import './signInAuthSide.css'

export const SignInAuthSide = () => {
  return (
    <div className="mentor_auth">
      <div className="mentor_auth_side">
        <div className="mb-3">
          <img src={logo} alt={'logo'} />
        </div>
        <h1>Grow your business ideas with our incubator, accelerator and investor platform.</h1>
        <p className="py-4">
          We are inviting startups to help them incubate and accelerate their business
          ideas to funding.
        </p>
      </div>
    </div>
  )
}
