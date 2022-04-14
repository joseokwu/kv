import React, { useState, useEffect } from 'react'
import {
  TeamMemberAuthSide,
  AuthButton,
  AuthTextField,
  AuthPasswordField,
} from '../../Startupcomponents'
import { useHistory } from 'react-router-dom'
import './teamMemberSignIn.css'
import { Form } from 'antd'
import { useAuth } from '../../hooks'
import { getLocationHistory } from '../../utils/helpers'

export const TeamMemberSignIn = () => {
  const [loader, setLoader] = useState(false)
  const {
    stateAuth: { authenticated, loading, roles },
    newLogin,
  } = useAuth()

  const history = useHistory()
  const onFinish = (values) => {
    newLogin(values).then((res) => {
      const loca = getLocationHistory()
      if (loca !== null) {
        history.push(loca)
        sessionStorage.removeItem('user:redirect:location')
      } else {
        console.log(loca)
        history.push(`/${res?.roles[0]}/dashboard`)
      }
    })
  }

  return (
    <div className="row mx-0 mentor_auth_wrap">
      <section className="col-md-6">
        <TeamMemberAuthSide />
      </section>
      <section className="col-md-6">
        <div className="mentor_gray_card">
          <Form
            name="login"
            className="row"
            initialValues={{
              remember: true,
            }}
            layout="vertical"
            onFinish={onFinish}
          >
            <div className="col-12 mb-2">
              <AuthTextField
                name="email"
                label="Email"
                placeholder="Enter your email address"
                className="mentor_gray_card_input"
              />
            </div>

            <div className="col-12 mb-1">
              <AuthPasswordField
                className="mentor_gray_card_input"
                numb={8}
                message="Password must be at least 8 characters"
                placeholder="Password must be at least 8 characters"
              />
            </div>
            <span
              onClick={() => history.push('/forgot/password')}
              // href="/forgot/password"
              className="d-block text-right forgot_text mb-2 mt-0"
            >
              Forgot password?
            </span>
            {/* <Form.Item> */}
              <div className="col-12 mb-2">
                <AuthButton
                  className="px-5"
                  label="Sign In"
                  loading={loading}
                  disabled={loading}
                  onClick={() => setLoader()}
                />
              </div>
            {/* </Form.Item> */}
          

          <div className="col-12 mb-3 mt-2">
          <section
            className="d-flex align-items-center mentor_switch_auth"
            style={{ columnGap: 6 }}
          >
            <p>Don’t have an account?</p>{' '}
            <span
              style={{
                color: '#00adef',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
              onClick={() => history.push('/team-member/signup')}
            >
              Sign Up
            </span>
          </section>
          </div>
          </Form>
        </div>
      </section>
    </div>
  )
}
