import React from 'react'
import './confirmEmail.css'
import logo from '../../assets/icons/kvlogo.svg'
import sentMail from '../../assets/images/mentorSentEmail.svg'

export const MentorConfirmEmail = () => {
  return (
    <div className="row mx-0 auth-wrap pt-5">
      <section className="layout-header">
        <div className="col-lg-6">
          <img src={logo} alt={'logo'} />
        </div>
      </section>
      <section className="col-lg-6 forgot_illustration align-items-center">
        <div>
          <h2>Forgot Password?</h2>
          <p>
            Enter the email associated with your account, and we would send an
            email with instruction to reset your password
          </p>
        </div>
      </section>

      <section className="col-md-6 d-flex align-items-center">
        <div className="gray_signIn confirm_email confirm_email_border">
          <section className="text-center">
            <img src={sentMail} alt="email sent" />
            <h5>Confirm your email address</h5>
            <p>
              Please check your inbox for a confirmation email. Didn’t receive
              the email?
            </p>
            {/* <p className="resend_email">Resend email</p> */}
            <a className="resend_email" href="#!">
              Resend email
            </a>
          </section>
        </div>
      </section>
    </div>
  )
}
