import React, { useState } from "react";
import logo from "../../assets/icons/kvlogo.svg";
import { AuthContent } from "../authContent/authContent";
import AuthData from '../../constants/AuthData'
import "./authSide.css";
import { useAuth } from './../../hooks/useAuth';
import { setType, getType } from '../../utils/helpers';


export const AuthSide = ({ history }) => {
  const [ active, setActive ] = useState('startup')
  const { changeSignup } = useAuth();
  const userType = getType();

  return (
    <div className="py-5">
      <div className="mentor_auth_side">
          <div className="mb-3">
            <img src={logo} alt={"logo"}/>
          </div>
        <section className="mentor_switch_signUp mb-4">
          <button onClick={() => {setType('startup'); changeSignup('startup')}} className={ userType === 'startup' ? 'activ' : ''} >Startup</button>
          <button onClick={() => {setType('investor'); changeSignup('investor')}}  className={ userType === 'investor' ? 'activ' : ''} >Investor</button>
          <button onClick={() => {setType('mentor'); changeSignup('mentor')}} className={ userType === 'mentor' ? 'activ' : ''}>Mentor</button>
          <button onClick={() => {setType('boosterpartner'); changeSignup('boosterpartner')}} className={ userType === 'boosterpartner' ? 'activ' : ''} >Booster Partner</button>
        </section>

        { userType === 'startup' && <AuthContent authData={AuthData} authDataIndex={0} /> }
        
        { userType === 'investor' && <AuthContent authData={AuthData} authDataIndex={1} /> }
        
        { userType === 'mentor' && <AuthContent authData={AuthData} authDataIndex={2} /> }
        
        { userType === 'boosterpartner' && <AuthContent authData={AuthData} authDataIndex={3}  /> }
      </div>
    </div>
  )
}