import React, { useState } from "react";
import logo from "../../assets/icons/kvlogo.svg";
import { AuthContent } from "../authContent/authContent";
import AuthData from '../../constants/AuthData'
import "./authSide.css";
import { useAuth } from './../../hooks/useAuth';

export const AuthSide = ({ history }) => {
  const [ active, setActive ] = useState('startup')
  const { changeSignup } = useAuth();

  return (
    <div className="py-5">
      <div className="mentor_auth_side">
          <div className="mb-3">
            <img src={logo} alt={"logo"}/>
          </div>
        <section className="mentor_switch_signUp mb-4">
          <button onClick={() => {setActive('startup'); changeSignup('startup')}} className={active === 'startup' ? 'activ' : ''} >Startup</button>
          <button onClick={() => {setActive('investor'); changeSignup('investor')}}  className={active === 'investor' ? 'activ' : ''} >Investor</button>
          <button onClick={() => {setActive('mentor'); changeSignup('mentor')}} className={active === 'mentor' ? 'activ' : ''}>Mentor</button>
          <button onClick={() => {setActive('boosterpartner'); changeSignup('boosterpartner')}} className={active === 'boosterpartner' ? 'activ' : ''} >Booster Partner</button>
        </section>

        { active === 'startup' && <AuthContent authData={AuthData} authDataIndex={0} /> }
        
        { active === 'investor' && <AuthContent authData={AuthData} authDataIndex={1} /> }
        
        { active === 'mentor' && <AuthContent authData={AuthData} authDataIndex={2} /> }
        
        { active === 'boosterpartner' && <AuthContent authData={AuthData} authDataIndex={3}  /> }
      </div>
    </div>
  )
}