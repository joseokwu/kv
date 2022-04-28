import React from "react";
import illustration from "../../assets/images/authIllustration.svg";
import "./authSide.css";

export const AuthSide = () => {
  return (
    <div className="auth-vector">
      <div>
        <div className="text-center">
          <img src={illustration} alt="auth illustration" />
        </div>
        <h1 className>Partner with Start-ups. Become a Booster Partner</h1>
        <p>
          We are onboarding Booster PArtners to our startup eco system for
          mutual benefits
        </p>
      </div>
    </div>
  );
};
