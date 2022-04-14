import React from 'react'
import logo from '../../assets/icons/kvlogo.svg'
import sentMail from '../../assets/images/mentorSentEmail.svg'
import { Link } from 'react-router-dom';

export const MentorCheckMail = () => {
  return (
    <div className="row mx-0 mentor_auth_wrap my-0">
      <section className="layout-header">
        <div className="col-lg-6 mt-5 px-5">
          <img src={logo} alt={'logo'} />
        </div>

        <div className="row forgot-p">
          <section className="col-lg-5 forgot_illustration mt-4 mx-1">
            <div>
              <h2 className="" style={{ fontSize: '75px' }}>
                Build personal brand. Become a mentor
              </h2>
              <span>
                We are onboarding Mentors to our startup eco system for mutual
                benefits
              </span>
            </div>
          </section>

          <section className="col-lg-5 d-flex align-items-center mx-1 mb-5" style={{marginTop: '150px'}}>
            <div className="gray_signIn confirm_email confirm_email_border">
              <section className="text-center">
                <img src={sentMail} alt="email sent" />
                <h5>Confirm your email address</h5>
                <p>
                  Please check your inbox for a confirmation email. Didn’t
                  receive the email?
                </p>
                <Link className="resend_email" href="#!">
                  Resend email
                </Link>
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
