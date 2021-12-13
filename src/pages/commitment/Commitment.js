import React from "react";
import left from "../../assets/icons/chervonLeft.svg";
import logo from "../../assets/images/sampleApplicantLogo.png";
import { TextField } from "../../components";
import { FundingRound } from "../opportunity/components/FundingRound";
import "./commitment.css";

export const Commitment = ({ history }) => {
  const { goBack } = history;
  return (
    <div className="wrapper pt-3" style={{ background: "#fdfdff" }}>
      <section
        className="d-flex align-items-center"
        role="button"
        onClick={goBack}
      >
        <img src={left} alt="left" style={{ transform: "rotate(180deg)" }} />
        <p className="ml-2 bread-start">Go Back</p>
      </section>

      <section>
        <h1 className="commit-header">Commitment</h1>

        <div className="commit-company-card">
          <img src={logo} alt="logo" />
          <p>Applane Insteen.</p>
        </div>
      </section>

      <section className="row mt-5">
        <div className="col-xl-6">
          <form>
            <TextField
              label="What is your proposed investment Amount"
              placeholder="Enter Amount"
              className="commit-input"
            />
          </form>

          <article className="d-flex align-items-center justify-content-between commit-doc-card">
            <p className="commit-doc-card-title">Legal Document Info</p>
            <p role="button" className="commit-doc-view">
              View
            </p>
          </article>

          <article className="d-flex align-items-center justify-content-between commit-doc-card">
            <p className="commit-doc-card-title">Terms and Conditions*</p>
            <p role="button" className="commit-doc-view">
              View
            </p>
          </article>

          <article className="d-flex align-items-center justify-content-between mb-4">
            <div>
              <p className="commit-doc-card-title">Commitment Amount</p>
              <p className="commit-extra-comment">
                (Your commitment in the startup)
              </p>
            </div>
            <p className="commit-money">$300.000</p>
          </article>

          <article className="d-flex align-items-center justify-content-between mb-4">
            <div>
              <p className="commit-doc-card-title">Registration Fee</p>
              <p className="commit-extra-comment">
                (We charge $1,000 as one time registration fee)
              </p>
            </div>
            <p className="commit-money">$300.000</p>
          </article>

          <article className="d-flex align-items-center justify-content-between mb-4">
            <div>
              <p className="commit-doc-card-title">Transaction Fee</p>
              <p className="commit-extra-comment">
                (We charge 5% of deal value)
              </p>
            </div>
            <p className="commit-money">$300.000</p>
          </article>

          <article className="d-flex align-items-center justify-content-between commit-total">
            <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>Total</p>
            <p>$600.000</p>
          </article>
        </div>

        <div className="col-xl-6">
          <FundingRound />
        </div>
      </section>
    </div>
  );
};
