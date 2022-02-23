import React, { useState , useEffect } from 'react'
import {
  AuthSide,
  AuthButton,
  AuthTextField,
  AuthPasswordField,
} from '../../mentorComponents/index'
import { useHistory } from 'react-router-dom';
import './signIn.css'
import { Form } from 'antd';
import { useAuth } from '../../hooks';
import { getLocationHistory } from '../../utils/helpers';
import toast from 'react-hot-toast';


export const SignIn = () => {
  const [loader, setLoader] = useState(false)
  const { stateAuth : { authenticated , loading , roles} , newLogin } = useAuth();
  
  const history = useHistory()
  const onFinish = async(values) => {
    
    try{

      const res = await newLogin(values);
      const loca = getLocationHistory();
      if(res?.status){
        if(loca !== null){

          history.push(loca)
          sessionStorage.removeItem('user:redirect:location')
        }else {
          console.log(loca)
          history.push(`/${res?.roles[0]}/dashboard`)
        }
      }

    }catch(err){
      console.log('error')
      toast.error('Network Error')
    }
   
  }



  return (
    <div className="row mx-0 mentor_auth_wrap">
      <section className="col-md-6">
        <AuthSide />
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
            <div className="col-lg-12 col-12 mb-4">
              <AuthTextField
                name="email"
                label="Email"
                placeholder="Enter your email address"
                className="mentor_gray_card_input"
              />
            </div>

            <div className="col-12 col-lg-12 mb-4">
              <AuthPasswordField
                label={'Password'}
                className="mentor_gray_card_input"
                numb={8}
                message="Password must not be less than 8"
                placeholder={"Password must be at least 8 characters"}
              />
            </div>
            <a
              href="/forgot_password"
              className="d-block text-right forgot_text mb-4 mt-3"
            >
              Forgot password?
            </a>
            <Form.Item>
              <div className="col-12 mb-4">
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
            <p>Don’t have an account?</p> <span style={{color:'#00adef', fontWeight: 'bold', cursor: 'pointer'}}  onClick={()=> history.push("/signup")} >Sign Up</span>
          </section>
        </div>
      </section>
    </div>
  )
}
