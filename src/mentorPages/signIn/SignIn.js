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

export const MentorSignIn = () => {
  const [loader, setLoader] = useState(false)
  const { stateAuth : { authenticated , loading , roles} , newLogin } = useAuth();
  
  const history = useHistory()
  const onFinish = (values) => {
    
     newLogin(values).then(res =>{
        
        const loca = getLocationHistory();
        if(loca !== null){

          history.push(loca)
          sessionStorage.removeItem('user:redirect:location')
        }else {
          console.log(loca)
          history.push(`/${res?.roles[0]}/dashboard`)
        }
       
       
     })  
    // console.log(stateAuth.roles)
  }

  // useEffect(() =>{
  //     if(authenticated){
  //     const loca = getLocationHistory();
  //     if(loca !== null){ 
  //     window.open(loca, '_self')
  //     console.log('worked')
  //     }
  //     window.open(`/${roles[0]}/dashboard`, '_self')

  //     }
  // },[authenticated, roles])

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
            <p>Don’t have an account?</p> <span style={{color:'#212198'}}  onClick={()=> history.push("/signup")} >Sign Up</span>
          </section>
        </div>
      </section>
    </div>
  )
}
