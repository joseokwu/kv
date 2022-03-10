import React, { useState } from 'react'
import './signUp.css'
import {
  AuthSide,
  AuthButton,
  AuthTextField,
  AuthPasswordField,
  LongPhoneInput,
} from '../../mentorComponents/index'
import check from '../../assets/icons/checkmark.svg'
import { Form } from 'antd'
import { useAuth } from '../../hooks'

export const SignUp = ({ history }) => {
  const [checkSat, setCheckSat] = useState(false)
  const { stateAuth, register } = useAuth()

  console.log(stateAuth?.signUpStatus)
  const onFinish = (values) => {
    register(values)
  }

  return (
    <div className="row mx-0 mentor_auth_wrap">
      <section className="col-md-6">
        <AuthSide />
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
                name={"first name"}
                label={stateAuth?.signUpStatus === 'startup' ? "Startup Name" : "First name"}
                placeholder="Enter your first name"
                className="mentor_gray_card_input"
              />
            </div>
            <div className="col-md-6 col-12 mb-2">
              {
               stateAuth?.signUpStatus === 'startup' ? (
                <div class="inputContainer">
                <label>Industry</label>
                <div class="select">
                  <select
                    id="industry1"
                    name="industry1"
                    placeholder="Select your industry"
                  >
                    <option disabled selected>Select your industry</option>
                    <option value="Advanced manufacturing and materials">
                      Advanced manufacturing and materials
                    </option>
                    <option value="Agriculture, food and beverages">
                      Agriculture, food and beverages
                    </option>
                    <option value="Energy">Energy</option>
                    <option value="Engineering and Technology">
                      Engineering and Technology
                    </option>
                    <option value="Finance">Finance</option>
                    <option value="Health: Pharmaceuticals and Biotechnology">
                      Health: Pharmaceuticals and Biotechnology
                    </option>
                    <option value="Healthcare: Devices and Supplies">
                      Healthcare Devices and Supplies
                    </option>
                    <option value="Healthcare: Other services and Technologies">
                      Healthcare: Other services and Technologies
                    </option>
                    <option
                      value="Information and Communication Technology(ICT)"
                    >
                      Information and Communication Technology(ICT)
                    </option>
                    <option value="Life-science Technologies">
                      Life-science Technologies
                    </option>
                    <option value="Micro/name-electronic and photonics">
                      Micro/name-electronic and photonics
                    </option>
                    <option value="Security and Connectivity">
                      Security and Connectivity
                    </option>
                    <option value="Space and Aerospace">
                      Space and Aerospace
                    </option>
                    <option value="Sustainability and circular economy">
                      Sustainability and circular economy
                    </option>
                    <option value="Transportation">Transportation</option>
                    <option value="Others">Others</option>
                    <option value="Financial Services">
                      Financial Services
                    </option>
                    <option value="Education">Education</option>
                    <option value="Health">Health</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Clean Energy">Clean Energy</option>
                    <option value="Construction">Construction</option>
                    <option value="Mobility/Logistics">
                      Mobility/Logistics
                    </option>
                    <option value="Social Impact">Social Impact</option>
                    <option value="Artificial Intelligence">
                      Artificial Intelligence
                    </option>
                    <option value="Blockchain">Blockchain</option>
                    <option value="Internet of Things">
                      Internet of Things
                    </option>
                    <option value="Mobile">Mobile</option>
                    <option value="Software as a Service">
                      Software as a Service
                    </option>
                    <option value="Sports">Sports</option>
                    <option value="B2B">B2B</option>
                    <option value="B2C">B2C</option>
                    <option value="D2C">D2C</option>
                    <option value="Marketplace">Marketplace</option>
                  </select>
                </div>
              </div>
               ) :(
                <AuthTextField
                name="last name"
                label="Last Name"
                placeholder="Enter your last name"
                className="mentor_gray_card_input"
              />
               ) 
              }
            </div>

            <div className="col-12 mb-2">
              <AuthTextField
                name="email"
                label="Email"
                placeholder="Enter email address"
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
                  onClick={() => history.push('/')}
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
