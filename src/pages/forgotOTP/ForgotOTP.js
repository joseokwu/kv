import React, { useState } from "react";
import illustration from "../../assets/images/forgot-passowrd.svg";
import clock from "../../assets/icons/clock.svg";
import "./forgotOTP.css";
import { Button } from "../../components";

export const ForgotOTP = ({ history }) => {
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "" });

  const handleOTPChange = (e) => {
    if (Number(e.target.value)) {
      setOtp({
        ...otp,
        [e.target.id]: e.target.value[e.target.value.length - 1],
      });
    } else {
      setOtp({ ...otp, [e.target.id]: "" });
    }
  };

  return (
    <div className="row mx-0 auth-wrap">
      <section className="col-lg-6 forgot-illustration">
        <div>
          <h2>Forgot Password?</h2>
          <p>Enter the 4 digit code sent to your phone number</p>
          <div>
            <img src={illustration} alt="illustration" />
          </div>
        </div>
      </section>

      <section className="col-lg-6 d-flex forgot-form">
        <article className="w-100">
          <div className="gray-signIn otp-form">
            <section className="d-flex align-items-center justify-content-center mb-4">
              <img src={clock} alt="clock" />
              <p className="clock-count">00:30</p>
            </section>

            <section className="otp-input">
              <input
                type="text"
                id="1"
                onChange={handleOTPChange}
                value={otp["1"]}
              />
              <input
                type="text"
                id="2"
                onChange={handleOTPChange}
                value={otp["2"]}
              />
              <input
                type="text"
                id="3"
                onChange={handleOTPChange}
                value={otp["3"]}
              />
              <input
                type="text"
                id="4"
                onChange={handleOTPChange}
                value={otp["4"]}
              />
            </section>

            <section>
              <Button
                label="Send"
                onClick={() => history.push("/reset_password")}
              />
            </section>
          </div>

          <div className="resend-code">
            <p>Haven't gotten an code?</p> <p role="link">Re-send Code</p>
          </div>
        </article>
      </section>
    </div>
  );
};
