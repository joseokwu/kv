import React from "react";
import left from "../../assets/icons/chervonLeft.svg";
import logo from "../../assets/images/sampleApplicantLogo.png";
import infoIcon from "../../assets/icons/infoIcon.svg";
import { Button, Modal, TextField } from "../../components";
import { FundingRound } from "../opportunity/components/FundingRound";
import investor from "../../assets/images/sampleinvestors.png";

import "./commitment.css";
import TermsModal from "./components/termsModal/TermsModal";
import LegalModal from "./components/legalModal/LegalModal";

export const InvestorCommitment = ({ history }) => {
  const { goBack } = history;
  const countInvestor = [1, 2, 3, 4];

  return (
    <div className="wrapper pt-3" style={{ background: "#fdfdff" }}>
      <Modal id="legalModal" title="Legal Document Info">
        <LegalModal />
      </Modal>
      <Modal id="termsModal" title="Terms and Conditions">
        <TermsModal />
      </Modal>

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
        <div className="col-xl-6 mb-4 mt-5">
          <form>
            <TextField
              label="What is your proposed investment Amount"
              placeholder="Enter Amount"
              className="commit-input"
            />
          </form>

          <article className="d-flex align-items-center justify-content-between commit-doc-card">
            <p className="commit-doc-card-title">Legal Document Info</p>
            <p
              role="button"
              className="commit-doc-view"
              data-toggle="modal"
              data-target="#legalModal"
            >
              View
            </p>
          </article>

          <article className="d-flex align-items-center justify-content-between commit-doc-card">
            <p className="commit-doc-card-title">Terms and Conditions*</p>
            <p
              role="button"
              className="commit-doc-view"
              data-toggle="modal"
              data-target="#termsModal"
            >
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

        <div className="col-xl-6 mb-4">
          <FundingRound />

          <div className="product-wrap mt-4">
            <section className="border-bottom pb-3 mb-4 d-flex align-items-center justify-content-between">
              <h3 className="mb-0">Committed Investors</h3>
              <a
                href="!#"
                className="see-all"
                style={{ textDecoration: "underline" }}
              >
                See All
              </a>
            </section>

            {countInvestor.map((c, i) => {
              return (
                <section
                  className="d-flex align-items-center justify-content-between mt-4 product-investor"
                  data-toggle="modal"
                  data-target={`#investorInfo`}
                >
                  <div className="d-flex align-items-center">
                    <img src={investor} alt="investor" className="mr-3" />
                    <span>
                      <p>Mr Promise Amstel</p>
                      <small>Lead Investor</small>
                    </span>
                  </div>
                  <div className="committed-timestamp">
                    <p>Committed</p>
                    <p>21/05/21</p>
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        <div className="col-12 mt-5">
          <section className="d-flex align-items-center mb-4">
            <img src={infoIcon} alt="info" />
            <p className="ml-3 commit-info-text">
              The Knight Ventures Network will securely store the data you
              provide to send you relevant investment opportunities
            </p>
          </section>

          <section className="d-flex align-items-center mb-5">
            <img src={infoIcon} alt="info" />
            <p className="ml-3 commit-info-text">
              once your finalise your commit, you will recieve an invoice from
              our finance team with further details for payment collection
            </p>
          </section>

          <Button label="Commit" />
        </div>
      </section>
    </div>
  );
};
