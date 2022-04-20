import React , { useState } from 'react'
import './resetPassword.css';
import { useHistory, useParams } from 'react-router-dom';
import logo from '../../assets/icons/kvlogo.svg'
import { AuthTextField, AuthButton , AuthPasswordField} from '../../mentorComponents'
import { Form } from 'antd';
import { CircularLoader } from '../../Startupcomponents/CircluarLoader/CircularLoader';
import toast from 'react-hot-toast';
import { resetPassword } from '../../services';

export const MentorResetPassword = ({ history }) => {

  const [loading , setLoading] = useState(false);
  const { token } = useParams()

//console.log(token)

const sendForgotPassword = async(value) =>{
  try{
    const { password , confirm_password } = value;
    console.log(password)
    if(password.normalize() !== confirm_password.normalize()){
      toast.error("sorry!! password does not match");
      return ;
    }
    setLoading(true)
      const res = await resetPassword({email:password , token:token })
      if(res?.success){
      toast.success(res.message)
      setLoading(false)
      history.push('/')
      }
  }catch(err){
    setLoading(false)
    toast.error(err?.response?.data?.message ?? 'Password reset unsuccessful')
  }
}

const[eye, setEye] = useState(true);
const [showPassword, setShowPassword] = useState();
const[pass, setPass] = useState(false);

const Eye = () => {
  if(showPassword === "password") {
    setShowPassword("text");
    setEye(false);
    setPass(true);
  } else {
    setShowPassword("password");
    setEye(true);
    setPass(false);
  }
  console.log(pass)
}

const[deye, setDEye] = useState(true);
const [showD, setShowDPassword] = useState();
const[dpass, setDPass] = useState(false);

const DEye = () => {
  if(showD === "password") {
    setShowDPassword("text");
    setDEye(false);
    setDPass(true);
  } else {
    setShowDPassword("password");
    setDEye(true);
    setDPass(false);
  }
  console.log(dpass)
}



  return (
    <div className="row mx-0 mentor_auth_wrap">
      <section className="layout-header">
        <div className="col-lg-6 mt-5 px-5">
          <img src={logo} alt={'logo'} />
        </div>

        <div className="row forgot-p">
          <section className="col-lg-5 mx-1 forgot_illustration">
            <div>
              <h2>Create New Password</h2>
              <span>
                Enter new password, different from the previous used password
              </span>
            </div>
          </section>

          <section className="col-lg-6 forgot_form mx-1 mt-5">
        
            <div className="gray_signIn">
            <Form
            name="reset-password"
            className="row"
            initialValues={{
              remember: true,
            }}
            layout="vertical"
            onFinish={sendForgotPassword}
          >
              <section className="mb-4 mt-5"> 
                <i onClick={Eye} className={`re-eye fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
                <AuthPasswordField
                  placeholder="Password must be at least 8 characters"
                  className="mentor_gray_card_input"
                  id='password'
                  numb={8}
                  name="password"
                  label={'New Password'}
                  type={showPassword ? "text" : "password"}
                />
              </section>

              <section className="mb-5">
              <i onClick={DEye} className={`cre-eye fa ${deye ? "fa-eye-slash" : "fa-eye"}`}></i>
                <AuthPasswordField
                  placeholder="Password must be at least 8 characters"
                  className="mentor_gray_card_input"
                  id='confirm_password'
                  numb={8}
                  name="password"
                  label={'Confirm New Password'}
                  type={showD ? "text" : "password"}
                />
              </section>

              <section className="mb-5">
                <AuthButton
                  label="Continue"
                 type='submit'
                 loading={loading}
                />
              </section>
              </Form>
            </div>
            
          </section>
        </div>
      </section>
    </div>
  )
}
