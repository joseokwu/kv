import React , { useEffect } from 'react'
import './confirmEmail.css'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/icons/kvlogo.svg'
import sentMail from '../../assets/images/mentorSentEmail.svg'
import { useAuth } from '../../hooks'
import { getType , getToken } from '../../utils/helpers';
import { resendEmail } from '../../services/user';
import toast from 'react-hot-toast';



export const MentorConfirmEmail = () => {
  const history = useHistory();
  console.log(getType())
 
  
  const handleResend = async() =>{
    try{
      const res = await resendEmail({origin: window.location.origin , token: getToken() , type:getType() });
      toast.success(res?.message);
    }catch(err){
      toast.error(err?.response?.data?.message ?? 'Email could not be sent')
    }
  }


  const renderPage = () => {
    switch (getType()) {
      case 'startup':
        return (
          <div>
            <h2> Grow your business today with our accelerator program </h2>
            <span>
              We are inviting startups to help them incubate and accelerate
              business idea to funding
            </span>
          </div>
        )
      case 'investor':
        return (
          <div>
            <h2>Invest in startups today. Become an investor</h2>
            <span>
              We are onboarding Investors to our startup eco system for mutual benefits
            </span>
          </div>
        )
      case 'mentor':
        return (
          <div>
            <h2> Build personal brand. Become a mentor </h2>
            <span>
              We are onboarding Mentors to our startup eco system for mutual
              benefits
            </span>
          </div>
        )
      case 'boosterpartner':
        return (
          <div>
            <h2> Partner with startups. Become a Booster Partner </h2>
            <span>
              We are onboarding Booster Partners to our startup eco system for
              mutual benefits
            </span>
          </div>
        )
      default:
        return <h1>
             We are onboarding Booster Partners to our startup eco system for
              mutual benefits
        </h1>
    }
  }

  return (
    <div className="row mx-0 my-0 mentor_auth_wrap">
      <section className="layout-header">
        <div className="col-lg-6 mt-5 px-5">
          <img src={logo} alt={'logo'} />
        </div>

        <div className="row forgot-p">
          <section className="col-lg-5 mx-1 forgot_illustration mt-4">
            {renderPage()}
          </section>

          <section
            className="col-lg-5 d-flex align-items-center mx-1 mb-5"
            style={{ marginTop: '150px' }}
          >
            <div className="gray_signIn confirm_email confirm_email_border">
              <section className="text-center">
                <img src={sentMail} alt="email sent" />
                <h5>Confirm your email address</h5>
                <p>
                  Please check your inbox for a confirmation email. Didn’t
                  receive the email?
                </p>
                <p  className="resend_email" onClick={handleResend} >
                  Resend Email
                </p>
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
