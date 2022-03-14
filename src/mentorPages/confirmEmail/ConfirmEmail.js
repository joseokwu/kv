import React from 'react'
import './confirmEmail.css'
import logo from '../../assets/icons/kvlogo.svg'
import sentMail from '../../assets/images/mentorSentEmail.svg'

export const MentorConfirmEmail = () => {
  return (
    <div className="row mx-0 my-0 auth-wrap px-5">
      <section className="layout-header">
        <div className="col-lg-6 mt-5">
          <img src={logo} alt={'logo'} />
        </div>

        <div className="row">
          <section className="col-lg-5 mx-3 forgot_illustration mt-4">
            <div>
              <h2>Grow your business today with our accelerator program</h2>
              <span>
                We are inviting startups to help them incubate and accelerate business idea to funding
              </span>
            </div>
          </section>

          <section className="col-lg-6 d-flex align-items-center mx-3" style={{marginTop: '100px'}}>
            <div className="gray_signIn confirm_email confirm_email_border">
              <section className="text-center">
                <img src={sentMail} alt="email sent" />
                <h5>Confirm your email address</h5>
                <p>
                  Please check your inbox for a confirmation email. Didn’t
                  receive the email?
                </p>
                <a className="resend_email" href="#!">
                  Resend email
                </a>
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
