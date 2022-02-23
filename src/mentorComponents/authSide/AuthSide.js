import React, { useState } from "react";
import logo from "../../assets/icons/kvlogo.svg";
import { AuthContent } from "../authContent/authContent";
import { AuthTabs } from "../authTabs/authTabs";
import AuthData from '../../constants/AuthData'
import "./authSide.css"

export const AuthSide = ({ history }) => {
  const [ active, setActive ] = useState('')
  // const { location: { hash }, } = history

  // const renderContent = () => {
  //   switch (hash.replaceAll('%20', '')) {
  //     case '#Startup':
  //       return <div>Startup</div>

  //     case '#Investor':
  //       return <div>Investor</div>

  //     case '#Mentor':
  //       return <div>Mentor</div>

  //     case '#Booster Partner':
  //       return <div>Booster Partner</div>

  //     default: 
  //       return <span></span>
  //   }
  // }

  // const tabAuthItems = [
  //   'Startup',
  //   'Investor',
  //   'Mentor',
  //   'Booster Partner'
  // ]

  return (
    // <div className="mentor_auth">
    //   <div className="mentor_auth_side">
    //       <div className="mb-3">
    //         <img src={logo} alt={"logo"}/>
    //       </div>
    //       <section className="mentor_switch_signUp mb-4">
    //         <AuthTabs tabAuthItems={tabAuthItems} />
    //       </section>
    //       <section className="">{renderContent()}</section>
    //   </div>
    // </div>

    // <div className="mentor_auth">
    <div className="py-5">
      <div className="mentor_auth_side">
          <div className="mb-3">
            <img src={logo} alt={"logo"}/>
          </div>
        <section className="mentor_switch_signUp mb-4">
          <button onClick={() => setActive('startup')}>Startup</button>
          <button onClick={() => setActive('investor')}>Investor</button>
          <button onClick={() => setActive('mentor')} className="">Mentor</button>
          <button onClick={() => setActive('boosterpartner')}>Booster Partner</button>
        </section>

        { active === 'startup' && <AuthContent authData={AuthData} authDataIndex={0} /> }
        
        { active === 'investor' && <AuthContent authData={AuthData} authDataIndex={1} /> }
        
        { active === 'mentor' && <AuthContent authData={AuthData} authDataIndex={2} /> }
        
        { active === 'boosterpartner' && <AuthContent authData={AuthData} authDataIndex={3}  /> }
      </div>
    </div>
  )
}
