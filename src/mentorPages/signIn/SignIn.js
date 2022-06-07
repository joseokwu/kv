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
    stateAuth: { completedRegistration, loading, roles , user },
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
      console.log(res)
      if (res?.success) {
        if (loca) {
          console.log(loca)
          history.push(loca)
        sessionStorage.removeItem('user:redirect:location');
        return ;
        }
        console.log(res)
        if(res?.data?.user?.type[0] === 'admin'){
          history.push(`/admin/application_mgt`)
          return;
        }else if(res?.data?.user?.isRegCompleted){
          history.push(`/${res?.data?.user?.type[0]}/dashboard`)
          return;
        }else{
          history.push(`/${res?.data?.user?.type[0]}/registration`)
        }
 
        
        
      }
    } catch (err) {
      console.log('hhddjdkd')
      console.log(err)
     // toast.error(err?.response?.data?.message ?? 'Network Error')
    }
  }

  const[eye, setEye] = useState(false);


  return (
    <div className="row mx-0 mentor_auth_wrap">
    
      <section className="col-md-6">
      {/* <input type='text' value={inVal} onChange={handleChange} onKeyDown={handleKey}  /> */}
        <SignInAuthSide />
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
            <i onClick={()=> setEye(!eye)} className={`pass-eye fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
              <AuthPasswordField
                className="mentor_gray_card_input"
                numb={8}
                id={'password'}
                message="Password must not be less than 8"
                placeholder={'Password must be at least 8 characters'}
                type={eye ? "text" : "password"}
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
              onClick={() => history.push('/signup')}
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
