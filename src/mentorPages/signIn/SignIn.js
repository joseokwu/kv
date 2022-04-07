import React, { useState, useEffect } from 'react'
import {
  AuthButton,
  AuthTextField,
  AuthPasswordField,
  SignInAuthSide,
} from '../../mentorComponents/index'
import { useHistory } from 'react-router-dom'
import './signIn.css'
import { Form } from 'antd'
import { useAuth } from '../../hooks'
import { getLocationHistory , getRole } from '../../utils/helpers'
import toast from 'react-hot-toast'

export const SignIn = () => {
  const [loader, setLoader] = useState(false);
  const [inVal , setVal] = useState('');
  const skills = [];
  const {
    stateAuth: { authenticated, loading, roles , user },
    newLogin,
  } = useAuth()

  const history = useHistory(); 

  // const handleChange = (e) =>{
  //  // console.log(e.target.value)
  //   setVal(e.target.value);
  // }

  // const handleKey = (e) =>{
  //   if(e.keyCode === 32){
  //     console.log(inVal);
  //     setVal('');
  //   }
  // }

  const onFinish = async (values) => {
    try {
      console.log('eegggggggg')
      console.log(values)
      const res = await newLogin(values)
      const loca = getLocationHistory()
     
      if (res?.status) {
        if (loca !== null) {
          history.push(loca)
         return sessionStorage.removeItem('user:redirect:location')
        }
        
        history.push(`/${res?.data?.user?.type[0]}/registration`)
        
      }
    } catch (err) {
      console.log('hhddjdkd')
      console.log(err)
      toast.error(err?.response?.data?.message ?? 'Network Error')
    }
  }

  return (
    <div className="row mx-0 auth-wrap">
    
      <section className="col-md-6">
      {/* <input type='text' value={inVal} onChange={handleChange} onKeyDown={handleKey}  /> */}
        <SignInAuthSide />
      </section>
      <section className="col-md-6 px-5 d-flex align-items-center">
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
            <div className="">
              <AuthTextField
                name="email"
                label="Email"
                placeholder="Enter your email address"
                className="mentor_gray_card_input"
              />
            </div>

            <div className="">
              <AuthPasswordField
                className="mentor_gray_card_input"
                numb={8}
                message="Password must not be less than 8"
                placeholder={'Password must be at least 8 characters'}
              />
            </div>
            <a
              href="/forgot/password"
              className="d-block text-right forgot_text mb-2 mt-3"
            >
              Forgot password?
            </a>
            <Form.Item>
              <div className="mb-2">
                <AuthButton
                  label="Sign In"
                  loading={loading}
                  disabled={loading}
                  onClick={() => setLoader()}
                />
              </div>
            </Form.Item>
          </Form>

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
              onClick={() => history.push('/signup')}
            >
              Sign Up
            </span>
            
          </section>
        </div>
      </section>
    </div>
  )
}
