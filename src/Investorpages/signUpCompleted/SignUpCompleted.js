import React from "react";
import "./signUpCompleted.css";
import { Button } from "../../components/index";
import completed from "../../assets/images/signUpComplete.svg";

export const SignUpCompleted = () => {
  return (
    <div className="complete-signUp">
      <div>
        <section className="text-center mb-5">
          <img src={completed} alt="completed illustration" />
          <h3>Thank you for signing up</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            pharetra diam odio amet dictum eget aliquet.{" "}
          </p>
        </section>
        <section className="text-center">
          <Button label="Back to homepage" />
        </section>
      </div>
    </div>
  );
};
