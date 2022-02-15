import React, { useEffect, useState } from "react";
import "./forgotPassword.css";
import illustration from "../../assets/images/forgot-passowrd.svg";
import { TextField, Button } from "../../components";
import { emailRegex } from "../../utils/utils";

export const ForgotPassword = ({ history }) => {
  const [input, setInput] = useState("");
  const [nextPath, setNextPath] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (Number(input) && input.length > 6) {
      setNextPath("/forgot_otp");
    } else if (emailRegex.test(input)) {
      setNextPath("/forgot_password/check_mail");
    } else {
      setNextPath("");
    }
  }, [input]);
  return (
    <div className="row mx-0 auth-wrap">
      <section className="col-lg-6 forgot-illustration">
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
      <section className="col-lg-6 forgot-form">
        <div className="gray-signIn">
          <section className="mb-4">
            <TextField
              label="Email / Mobile No."
              placeholder="Michealsmith@gmail.com"
              className="gray-card-input"
              type="text"
              onChange={handleChange}
            />
          </section>
          <div>
            <Button
              label="Submit"
              onClick={() => history.push(nextPath)}
              disabled={nextPath.length === 0}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
