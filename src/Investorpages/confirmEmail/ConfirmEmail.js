import React from "react";
import "./confirmEmail.css";
import email from "../../assets/images/sentEmail.png";
import { AuthSide } from "../../components";

export const ConfirmEmail = () => {
  return (
    <div className="row mx-0 auth-wrap">
      <section className="col-md-6">
        <AuthSide />
      </section>
      <section className="col-md-6 d-flex align-items-center">
        <div className="gray-signIn confirm-email">
          <section className="text-center">
            <img src={email} alt="email sent" />
            <h5>Confirm your email address</h5>
            <p>
              Please check your inbox for a confirmation email. Didn’t receive
              the email?
            </p>
            <p className="resend-email">Resend email</p>
          </section>
        </div>
      </section>
    </div>
  );
};
