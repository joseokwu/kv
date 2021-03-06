import React, { useState } from 'react'
import './teamMemberSignup.css'
import {
  TeamMemberAuthSide,
  AuthButton,
  AuthTextField,
  AuthPasswordField,
  LongPhoneInput,
} from '../../Startupcomponents'
import check from '../../assets/icons/checkmark.svg'
import { Form } from 'antd'
import { useAuth } from '../../hooks'

export const TeamMemberSignUp = ({ history }) => {
  const [checkSat, setCheckSat] = useState(false)
  const { stateAuth, register } = useAuth()
  const onFinish = (values) => {
    register(values)
  }

  return (
    <div className="row mx-0 mentor_auth_wrap">
      <section className="col-md-6">
        <TeamMemberAuthSide />
      </section>
      <section className="col-md-6">
        <div className="mentor_gray_card">
          <Form
            name="Sign-Up"
            className="row"
            initialValues={{
              remember: true,
            }}
            layout="vertical"
            onFinish={onFinish}
          >
            <div className="col-md-6 col-12 mb-2">
              <AuthTextField
                name="first name"
                label="First Name"
                placeholder="Enter your first name"
                className="mentor_gray_card_input"
              />
            </div>
            <div className="col-md-6 col-12 mb-2">
              <AuthTextField
                name="last name"
                label="Last Name"
                placeholder="Enter your last name"
                className="mentor_gray_card_input"
              />
            </div>

            <div className="col-12 mb-2">
              <AuthTextField
                name="email"
                label="Email"
                placeholder="Enter your email address"
                className="mentor_gray_card_input"
              />
            </div>

            <div className="col-12 mb-2">
              <AuthPasswordField
                numb={8}
                message="Password must be 8 digits"
                label="Password"
                placeholder="Password must be at least 8 characters"
                type="password"
                className="mentor_gray_card_input"
              />
            </div>

            <div className="col-12 mb-4">
              <LongPhoneInput
                label="Mobile Number"
                message="Enter a phone number"
              />
            </div>

            <div className="col-12 mb-4">
              <section className="d-flex align-items-start mentor_auth_agree">
                <span className="mentor_checkbox_input">
                  <input
                    type="checkbox"
                    name=""
                    onClick={() => setCheckSat(!checkSat)}
                    id="agreement"
                    checked={checkSat}
                  />
                  <div>
                    <img src={check} alt="check" />
                  </div>
                </span>
                <label htmlFor="agreement">
                  I certify that all the information provided by me is accurate
                  and I am willing to provide evidence for the same for KYC
                  purposes when requested.
                </label>
              </section>
            </div>

            <div className="col-12 mb-4">
              <AuthButton
                label="Create Account"
                loading={stateAuth.loading}
                disabled={stateAuth.loading}
              />
            </div>

            <div className="col-12 mb-3">
              <section
                className="d-flex align-items-center mentor_switch_auth"
                style={{ columnGap: 6 }}
              >
                <p>Already have an account?</p>{' '}
                <span
                  style={{ color: '#00ADEF', fontWeight: 'bold', cursor: 'pointer' }}
                  onClick={() => history.push('/team-member/signin')}
                >
                  Sign In
                </span>
              </section>
            </div>
          </Form>
        </div>
      </section>
    </div>
  )
}
