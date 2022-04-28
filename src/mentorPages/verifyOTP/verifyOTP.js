import React, { useState } from 'react'
import logo from '../../assets/icons/kvlogo.svg'
import './verifyOTP.css'
import { AuthButton, AuthTextField } from '../../mentorComponents'

export const MentorVerifyOTP = ({ history }) => {
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
    <div className="row mx-0 auth-wrap px-5">
      <section className="layout-header">
        <div className="col-lg-6 mt-5">
          <img src={logo} alt={'logo'} />
        </div>

        <div className="row">
          <section className="col-lg-5 forgot_illustration mx-3 mt-4">
            <div>
              <h2>OTP Verification</h2>
              <span>
                Enter the OTP code sent to your phone to verify your account.
              </span>
            </div>
          </section>

          <section className="col-lg-6 forgot_form mt-4">
            <div className="gray_signIn otp_form">
              <section className="mb-4">
                <label className="e-label pb-2">Enter OTP Number</label>
                <AuthTextField
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
          </section>
        </div>
      </section>
    </div>
  )
}
