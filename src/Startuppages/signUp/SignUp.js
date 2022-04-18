import React, {useState} from "react";
import "./signUp.css";
import { AuthSide, Button, TextField, PasswordField } from "../../Startupcomponents/index";
import check from "../../assets/icons/checkmark.svg";
import { Form,   } from 'antd';


export const SignUp = ({ history }) => {

const [checkSat, setCheckSat] = useState(false)

  const onFinish = (values) =>{
    if(checkSat){
      console.log(values)
    }else{
      alert('click check')
    }


}

  return (
    <div className="row mx-0 auth-wrap my-0">
      <section className="col-md-6">
        <AuthSide />
      </section>
      <section className="col-md-6">
        <div className="gray-card">
          <section className="switch-signUp">
            <button>Startup</button>
            <button>Investor</button>
            <button>Mentor</button>
            <button className="active-signUp">Booster Partner</button>
          </section>
          <Form 
              name='Sign-Up'
              className="row"
          		initialValues={{
                remember: true,
              }}
              layout="vertical"
              onFinish={onFinish}
          >
            <div className="col-md-6 col-12 mb-4">
              <TextField
                name='First-name'
                label="First Name"
                placeholder="Enter your first name"
                className="gray-card-input"
              />
            </div>
            <div className="col-md-6 col-12 mb-4">
              <TextField
              name='Last-name'
                label="Last Name"
                placeholder="Enter your last name"
                className="gray-card-input"
              />
            </div>

            <div className="col-12 mb-4">
              <TextField
                name='email'
                label="Email"
                placeholder="Enter email address"
                className="gray-card-input"
              />
            </div>

            <div className="col-12 mb-4">
              <TextField
                name='Phone-number'
                label="Mobile Number"
                placeholder="Enter your phone number"
                className="gray-card-input"
              />
            </div>

            <div className="col-12 mb-4">
              <PasswordField
                numb={8}
                message='Password must be 8 digits'
                label="Create Password"
                placeholder="Password must be 8 digits"
                type="password"
                className="gray-card-input"
              />
            </div>

            <div className="col-12 mb-4">
              <section className="d-flex align-items-start auth-agree">
                <span className="checkbox-input">
                <input type="checkbox" name="" onClick={()=> setCheckSat(!checkSat)} id="agreement" checked={checkSat} />
                  <div>
                    <img  src={check} alt="check" />
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
              <Button
                label="Create Account"
              />
            </div>

            <div className="col-12">
              <section
                className="d-flex align-items-center switch-auth"
                style={{ columnGap: 6 }}
              >
                <p>Already have an account?</p> <a href="/">Sign In</a>
              </section>
            </div>
          </Form>
        </div>
      </section>
    </div>
  );
};
