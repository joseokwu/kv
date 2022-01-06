import React, { useState } from 'react'
import logo from '../../assets/icons/kvlogo.svg'
import './verifyOTP.css'
import { AuthButton, AuthTextField } from '../../components'

export const VerifyOTP = ({ history }) => {
  const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' })

  const handleOTPChange = (e) => {
    if (Number(e.target.value)) {
      setOtp({
        ...otp,
        [e.target.id]: e.target.value[e.target.value.length - 1],
      })
    } else {
      setOtp({ ...otp, [e.target.id]: '' })
    }
  }

  return (
    <div className="row mx-0 auth-wrap pt-5">
      <section className="layout-header">
        <div className="col-lg-6">
          <img src={logo} alt={'logo'} />
        </div>
      </section>
      <section className="col-lg-6 forgot_illustration">
        <div>
          <h2>OTP Verification</h2>
          <p>Enter the OTP code sent to your phone to verify your account.</p>
        </div>
      </section>

      <section className="col-lg-6 d-flex forgot_form">
        <article className="w-100">
          <div className="gray_signIn otp_form">
            <section className="d-flex align-items-center justify-content-center mb-4"></section>

            <section className="mb-5">
              <AuthTextField
                label="Enter OTP Number"
                placeholder="Number must be 8 digits"
                className="mentor_gray_card_input"
                type="number"
              />
            </section>

            <section>
              <AuthButton
                label="Continue"
                onClick={() => history.push('/reset/password')}
              />
            </section>
          </div>
        </article>
      </section>
    </div>
  )
}
