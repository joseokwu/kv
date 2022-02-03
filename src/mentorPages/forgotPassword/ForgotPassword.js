import React, { useEffect, useState } from 'react'
import './forgotPassword.css'
import logo from '../../assets/icons/kvlogo.svg'
import { AuthTextField, AuthButton } from '../../mentorComponents'
import { emailRegex } from '../../utils/utils'

export const ForgotPassword = ({ history }) => {
  const [input, setInput] = useState('')
  const [nextPath, setNextPath] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    if (Number(input) && input.length > 6) {
      setNextPath('/verify/otp')
    } else if (emailRegex.test(input)) {
      setNextPath('/forgot/password/check/mail')
    } else {
      setNextPath('')
    }
  }, [input])
  return (
    <div className="row mx-0 auth-wrap pt-5">
      <section className="layout-header">
        <div className="col-lg-6">
          <img src={logo} alt={'logo'} />
        </div>
      </section>
      <section className="col-lg-6 forgot_illustration">
        <div>
          <h2>Forgot Password?</h2>
          <p>
            Enter the email associated with your account, and we would send an
            email with instruction to reset your password
          </p>
        </div>
      </section>
      <section className="col-lg-6 forgot_form">
        <div className="gray_signIn">
          <section className="mb-4">
            <AuthTextField
              label="Email"
              placeholder="Michealsmith@gmail.com"
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
  )
}
