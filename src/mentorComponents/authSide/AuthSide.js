import React from "react";
import logo from "../../assets/icons/kvlogo.svg";
import "./authSide.css"

export const AuthSide = () => {
  return (
    <div className="mentor_auth">
      <div className="mentor_auth_side">
          <div className="mb-5">
            <img src={logo} alt={"logo"}/>
          </div>
        <section className="mentor_switch_signUp mb-5">
          <button>Startup</button>
          <button>Investor</button>
          <button className="mentor_active_signUp">Mentor</button>
          <button>Booster Partner</button>
        </section>
        <h1>Build personal brand. Become a mentor</h1>
        <p>
          We are onboarding Mentors to our startup eco system for mutual
          benefits
        </p>
      </div>
    </div>
  )
}
