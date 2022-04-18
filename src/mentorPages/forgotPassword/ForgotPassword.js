import React, { useEffect, useState } from 'react'
import './forgotPassword.css'
import logo from '../../assets/icons/kvlogo.svg'
import { AuthTextField, AuthButton } from '../../mentorComponents'
import { emailRegex } from '../../utils/utils';
import { setAuthToken } from '../../utils/helpers';
import { forgotPassword } from '../../services/user';
import { CircularLoader } from '../../Startupcomponents/CircluarLoader/CircularLoader';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom'
import { Form } from 'antd';


export const MentorForgotPassword = () => {
  const [input, setInput] = useState('')
  const [nextPath, setNextPath] = useState('')
  const [loading , setLoading] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const sendForgotPassword = async(value) =>{
    try{
      setLoading(true)
      console.log(value)
      const res = await forgotPassword(value);
     
     console.log(res?.data?.token)
      setAuthToken(res?.data?.token);
      toast.success(res?.message);
      history.push('/reset/password')
     return setLoading(false)
  
    }catch(err){
      setLoading(false);
      toast.error(err?.response?.data?.message);
    }

  }

  // useEffect(() => {
  //   if (Number(input) && input.length > 6) {
  //     setNextPath('/verify/otp')
  //   } else if (emailRegex.test(input)) {
  //     setNextPath('/check/mail')
  //   } else {
  //     setNextPath('')
  //   }
  // }, [input])

  return (
    <div className="row mx-0 mentor_auth_wrap">
      <section className="layout-header">
        <div className="col-lg-6 mt-5 px-5">
          <img src={logo} alt={'logo'} />
        </div>

        <div className="row forgot-p">
          <section className="col-lg-5 mx-3 forgot_illustration mt-4">
            <div className="">
              <h2>Forgot Password?</h2>
              <span>
                Enter the email associated with your account, and we would send an email with instruction to reset your password
              </span>
            </div>
          </section>
          
          <section className="col-lg-6 forgot_form mt-4">
            <div className="gray_signIn mx-3">
              <section className="mb-4 ">
              <div>
              <Form
            name="login"
            className="row"
            initialValues={{
              remember: true,
            }}
            layout="vertical"
            onFinish={sendForgotPassword}
          >
<div className="col-12 mb-2">
              <AuthTextField
                name="email"
                label="Email"
                placeholder="Enter your email address"
                className="mentor_gray_card_input"
              />
            </div>
            <section className="mb-5">
                <AuthButton
                  label={"Submit"}
                  onClick={sendForgotPassword}
                  loading={loading}
                />
              </section>
          </Form>
              
              </div>
                
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
