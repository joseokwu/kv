import React, { useState } from 'react'
import './signUp.css'
import {
  AuthSide,
  AuthButton,
  AuthTextField,
  AuthPasswordField,
  PhoneInput,
} from '../../mentorComponents/index';
import { useLocation }  from 'react-router-dom';
import check from '../../assets/icons/checkmark.svg'
import { Form, Select } from 'antd'
import { useAuth } from '../../hooks'
import { setType } from '../../utils/helpers'
// import { PhoneInput } from '../../components'

const { Option } = Select

export const SignUp = ({ history }) => {
  const [checkSat, setCheckSat] = useState(false)
  const { stateAuth, register } = useAuth()
  const [industry, setIndustry] = useState('')
  const [phone, setPhone] = useState('')
  const location = useLocation();
  function handleChange(value) {
    setIndustry(value)
  }
  console.log(window.location.origin)
  console.log(stateAuth?.signUpStatus)
  const onFinish = (values) => {

    if(stateAuth?.signUpStatus !== 'startup'){
      console.log({
        ...values,
        type: stateAuth?.signUpStatus,
        phone: phone?.id,
      })
      register({
        ...values,
        type: stateAuth?.signUpStatus,
        phone: phone?.id,
        origin:window.location.origin
      })
    }else{
      register({
        ...values,
        type: stateAuth?.signUpStatus,
        industry: industry,
        phone: phone?.id,
        origin:window.location.origin
      })
      console.log({
        ...values,
        type: stateAuth?.signUpStatus,
        industry: industry,
        phone: phone?.id,
      })
    }
    setType(stateAuth?.signUpStatus)
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
                name={
                  stateAuth?.signUpStatus === 'startup'
                    ? 'startupname'
                    : 'firstname'
                }
                label={
                  stateAuth?.signUpStatus === 'startup'
                    ? 'Startup Name'
                    : 'First name'
                }
                placeholder={
                  stateAuth?.signUpStatus === 'startup'
                    ? 'Enter your Startup name'
                    : 'Enter your first name'
                }
                className="mentor_gray_card_input"
              />
            </div>
            <div className="col-md-6 col-12 mb-2">
              {stateAuth?.signUpStatus === 'startup' ? (
                <div className="inputContainer">
                  <label><span>*</span> Industry</label>
                  <div className="select">
                    <Select
                      onChange={handleChange}
                      id="industry1"
                      name="industry"
                      // className="w-100"
                      style={{width: "fit-content"}}
                      placeholder="Select your industry"
                    >
                      <Option disabled selected>
                        Select your industry
                      </Option>
                      <Option value="Advanced manufacturing and materials">
                        Advanced manufacturing and materials
                      </Option>
                      <Option value="Agriculture, food and beverages">
                        Agriculture, food and beverages
                      </Option>
                      <Option value="Energy">Energy</Option>
                      <Option value="Engineering and Technology">
                        Engineering and Technology
                      </Option>
                      <Option value="Finance">Finance</Option>
                      <Option value="Health: Pharmaceuticals and Biotechnology">
                        Health: Pharmaceuticals and Biotechnology
                      </Option>
                      <Option value="Healthcare: Devices and Supplies">
                        Healthcare Devices and Supplies
                      </Option>
                      <Option value="Healthcare: Other services and Technologies">
                        Healthcare: Other services and Technologies
                      </Option>
                      <Option value="Information and Communication Technology(ICT)">
                        Information and Communication Technology(ICT)
                      </Option>
                      <Option value="Life-science Technologies">
                        Life-science Technologies
                      </Option>
                      <Option value="Micro/name-electronic and photonics">
                        Micro/name-electronic and photonics
                      </Option>
                      <Option value="Security and Connectivity">
                        Security and Connectivity
                      </Option>
                      <Option value="Space and Aerospace">
                        Space and Aerospace
                      </Option>
                      <Option value="Sustainability and circular economy">
                        Sustainability and circular economy
                      </Option>
                      <Option value="Transportation">Transportation</Option>
                      <Option value="Others">Others</Option>
                      <Option value="Financial Services">Financial Services</Option>
                      <Option value="Education">Education</Option>
                      <Option value="Health">Health</Option>
                      <Option value="Agriculture">Agriculture</Option>
                      <Option value="Insurance">Insurance</Option>
                      <Option value="Clean Energy">Clean Energy</Option>
                      <Option value="Construction">Construction</Option>
                      <Option value="Mobility/Logistics">Mobility/Logistics</Option>
                      <Option value="Social Impact">Social Impact</Option>
                      <Option value="Artificial Intelligence">Artificial Intelligence</Option>
                      <Option value="Blockchain">Blockchain</Option>
                      <Option value="Internet of Things">Internet of Things</Option>
                      <Option value="Mobile">Mobile</Option>
                      <Option value="Software as a Service">Software as a Service</Option>
                      <Option value="Sports">Sports</Option>
                      <Option value="B2B">B2B</Option>
                      <Option value="B2C">B2C</Option>
                      <Option value="D2C">D2C</Option>
                      <Option value="Marketplace">Marketplace</Option>
                    </Select>
                  </div>
                </div>
              ) : (
                <AuthTextField
                  name="lastname"
                  label="Last Name"
                  placeholder="Enter your last name"
                  className="mentor_gray_card_input"
                />
              )}
            </div>

            <div className="col-12 mb-2 email">
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
                id={'password'}
                placeholder="Password must be at least 8 characters"
                type="password"
                className="mentor_gray_card_input"
              />
            </div>

            <div className="numsign col-12 mb-4">
              <PhoneInput
                label={'* Mobile Number'} 
                onChange={setPhone}
                
              />
            </div>

            <div className="col-12 mb-4">
              <section className="d-flex align-items-start mentor_auth_agree">
                <span className="mentor_checkbox_input">
                  <input
                    type="checkbox"
                    name=""
                    onChange={() => setCheckSat(!checkSat)}
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
                  style={{
                    color: '#00ADEF',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
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
