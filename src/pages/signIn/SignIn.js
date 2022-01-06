import React, { useState } from 'react'
import {
  AuthSide,
  AuthButton,
  AuthTextField,
  AuthPasswordField,
} from '../../components/index'

import './signIn.css'
import { Form } from 'antd'

export const SignIn = ({ history }) => {
  const [loader, setLoader] = useState(false)

  const onFinish = (values) => {
    alert('hello world')
    console.log(values)
  }

  return (
    <div className="row mx-0 auth-wrap">
      <section className="col-md-6">
        <AuthSide />
      </section>
      <section className="col-md-6 d-flex align-items-center">
        <div className="gray_signIn">
          <Form
            name="login"
            className=""
            initialValues={{
              remember: true,
            }}
            layout="vertical"
            onFinish={onFinish}
          >
            <div className="mb-4">
              <AuthTextField
                name="email"
                label="Email"
                placeholder="Michealsmith@gmail.com"
                className="mentor_gray_card_input"
              />
            </div>

            <div className="">
              <AuthPasswordField
                className="mentor_gray_card_input"
                numb={8}
                message="Password must not be less than 8"
              />
            </div>
            <a
              href="/forgot_password"
              className="d-block text-right forgot_text mb-4 mt-3"
            >
              Forgot password?
            </a>
            <Form.Item>
              <div className="mb-4">
                <AuthButton
                  label="Sign In"
                  loading={loader}
                  onClick={() => setLoader()}
                />
              </div>
            </Form.Item>
          </Form>

          <section
            className="d-flex align-items-center mentor_switch_auth"
            style={{ columnGap: 6 }}
          >
            <p>Don’t have an account?</p> <a href="/signup">Sign Up</a>
          </section>
        </div>
      </section>
    </div>
  )
}
