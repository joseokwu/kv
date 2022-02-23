import React from 'react'
import './resetPassword.css'
import logo from '../../assets/icons/kvlogo.svg'
import { AuthTextField, AuthButton } from '../../mentorComponents'

export const MentorResetPassword = ({ history }) => {
  return (
    <div className="row mx-0 auth-wrap px-5">
      <section className="layout-header">
        <div className="col-lg-6 mt-5">
          <img src={logo} alt={'logo'} />
        </div>

        <div className="row">
          <section className="col-lg-5 mx-3 forgot_illustration mt-0">
            <div>
              <h2>Create New Password</h2>
              <span>
                Enter new password, different from the previous used password
              </span>
            </div>
          </section>

          <section className="col-lg-6 forgot_form mx-3 mt-2">
            <div className="gray_signIn">
              <section className="mb-4"> 
              <label className="e-label pb-2">New Password</label>
                <AuthTextField
                  placeholder="Password must be at least 8 characters"
                  className="mentor_gray_card_input"
                  type="password"
                />
              </section>

              <section className="mb-5">
              <label className="e-label pb-2">Confirm New Password</label>
                <AuthTextField
                  placeholder="Password must be at least 8 characters"
                  className="mentor_gray_card_input"
                  type="password"
                />
              </section>

              <section>
                <AuthButton
                  label="Continue"
                  onClick={() => history.push('/signin')}
                />
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
