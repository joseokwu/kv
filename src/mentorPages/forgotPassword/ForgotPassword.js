import React, { useEffect, useState } from 'react'
import './forgotPassword.css'
import logo from '../../assets/icons/kvlogo.svg'
import { AuthTextField, AuthButton } from '../../mentorComponents'
import { emailRegex } from '../../utils/utils'

export const MentorForgotPassword = ({ history }) => {
  const [input, setInput] = useState('')
  const [nextPath, setNextPath] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    if (Number(input) && input.length > 6) {
      setNextPath('/verify/otp')
    } else if (emailRegex.test(input)) {
      setNextPath('/check/mail')
    } else {
      setNextPath('')
    }
  }, [input])
  return (
    <div className="row mx-0 auth-wrap px-5">
      <section className="layout-header">
        <div className="col-lg-6 mt-5">
          <img src={logo} alt={'logo'} />
        </div>

        <div className="row">
          <section className="col-lg-5 mx-3 forgot_illustration mt-4">
            <div className="">
              <h2>Forgot Password?</h2>
              <span>
                Enter the email associated with your account, and we would send an email with instruction to reset your password
              </span>
            </div>
          </section>
          
          <section className="col-lg-6 forgot_form mx-3 mt-4">
            <div className="gray_signIn">
              <section className="mb-4 ">
                <label className="e-label pb-2">Email</label>
                <AuthTextField
                  placeholder="Enter your email address"
                  className="mentor_gray_card_input"
                  type="text"
                  onChange={handleChange}
                />
              </section>
              <section>
                <AuthButton
                  label="Submit"
                  onClick={() => history.push(nextPath)}
                  // disabled={nextPath.length === 0}
                />
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
