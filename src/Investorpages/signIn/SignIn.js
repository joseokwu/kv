import React, {useState} from "react";
import { AuthSide, Button, TextField, PasswordField } from "../../components/index";

import "./signIn.css";
import { Form  } from 'antd';

export const SignIn = ({ history }) => {

const [loader, setLoader] = useState(false)

  const onFinish = (values) =>{
      alert('hello world')
    console.log(values)

  }

  return (
    <div className="row mx-0 auth-wrap">
      <section className="col-md-6">
        <AuthSide />
      </section>
      <section className="col-md-6 d-flex align-items-center">
        <div className="gray-signIn">
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
     
            <TextField
              name='email'
              label="Email / Mobile No"
              placeholder="Michealsmith@gmail.com"
              className="gray-card-input"
            />
          </div>

          <div className="">
            <PasswordField 
              className="gray-card-input"
              numb={8}
              message='Password must not be less than 8'
            />
          </div>
          <a
            href="/forgot_password"
            className="d-block text-right forgot-text mb-4"
          >
            Forgot password?
          </a>
          <Form.Item>
          <div className="mb-4">
            <Button
              label="Sign in"
              loading={loader}
              onClick={()=> setLoader()}
            />  
          </div>
          </Form.Item>

          </Form>

          <section
            className="d-flex align-items-center switch-auth"
            style={{ columnGap: 6 }}
          >
            <p>Don’t have an account?</p> <a href="/signUp">Sign Up</a>
          </section>
        </div>
      </section>
    </div>
  );
};


