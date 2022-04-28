import React from "react";
import illustration from "../../assets/images/forgot-passowrd.svg";
import mail from "../../assets/images/sentEmail.png";

export const CheckMail = () => {
  return (
    <div className="row mx-0 auth-wrap">
      <section className="col-lg-6 forgot-illustration align-items-center">
        <div>
          <h2>Forgot Password?</h2>
          <p>
            Enter the email associated with your account, and we would send an
            email with instruction to reset your password
          </p>
          <div className="text-center">
            <img src={illustration} alt="illustration" />
          </div>
        </div>
      </section>

      <section className="col-lg-6  d-flex align-items-center justify-content-center">
        <div className="gray-signIn text-center confirm-email">
          <section>
            <img src={mail} alt="mail" />
          </section>
          <h4 className="my-4">Check your mail</h4>
          <p>We have sent a password recover instruction to your email</p>
          <p role="button" className="resend-email">
            Open email app
          </p>
        </div>
      </section>
    </div>
  );
};
