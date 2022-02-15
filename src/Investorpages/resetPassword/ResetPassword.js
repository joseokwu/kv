import React from "react";
import "./resetPassword.css";
import illustration from "../../assets/images/resetVector.svg";
import { TextField, Button } from "../../components";

export const ResetPassword = ({ history }) => {
  return (
    <div className="row mx-0 auth-wrap">
      <section className="col-lg-6 forgot-illustration align-items-center">
        <div>
          <h2>Create New Password</h2>
          <p>Enter new password, different from the previous used password</p>
          <div className="text-center">
            <img src={illustration} alt="illustration" />
          </div>
        </div>
      </section>

      <section className="col-lg-6 d-flex align-items-center justify-content-center">
        <div className="gray-signIn">
          <section>
            <TextField
              label="New Password"
              placeholder="Enter new password"
              className="gray-card-input"
              type="password"
            />
          </section>

          <section className="mb-4">
            <p className="text-right password-require">
              Password must be 8 digits
            </p>
          </section>

          <section className="mb-5">
            <TextField
              label="Confirm New Password"
              placeholder="Password must be 8 digits"
              className="gray-card-input"
              type="password"
            />
          </section>

          <section>
            <Button label="Reset" onClick={() => history.push("/")} />
          </section>
        </div>
      </section>
    </div>
  );
};
