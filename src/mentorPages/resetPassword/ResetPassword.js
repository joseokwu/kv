import React from 'react'
import './resetPassword.css'
import logo from '../../assets/icons/kvlogo.svg'
import { AuthTextField, AuthButton } from '../../mentorComponents'

export const ResetPassword = ({ history }) => {
  return (
    <div className="row mx-0 auth-wrap">
      <section className="layout-header">
        <div className="col-lg-6">
          <img src={logo} alt={'logo'} />
        </div>
      </section>
      <section className="col-lg-6 forgot_illustration align-items-center">
        <div>
          <h2>Create New Password</h2>
          <p>Enter new password, different from the previous used password</p>
        </div>
      </section>

      <section className="col-lg-6 d-flex align-items-center justify-content-center">
        <div className="gray_signIn">
          <section>
            <AuthTextField
              label="New Password"
              placeholder="Enter new password"
              className="mentor_gray_card_input"
              type="password"
            />
          </section>

          <section className="mb-4">
            <p className="text-right password-require">
              Password must be 8 digits
            </p>
          </section>

          <section className="mb-5">
            <AuthTextField
              label="Confirm New Password"
              placeholder="Password must be 8 digits"
              className="mentor_gray_card_input"
              type="password"
            />
          </section>

          <section>
            <AuthButton label="Reset" onClick={() => history.push('/signin')} />
          </section>
        </div>
      </section>
    </div>
  )
}
