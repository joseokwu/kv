import React from "react";
import founderLg from "../../assets/images/sampleFounder.png";
import facebook from "../../assets/icons/facebookLogo.svg";
import twitter from "../../assets/icons/twitterLogo.svg";
import linkedIn from "../../assets/icons/linkedInLogo.svg";
import mail from "../../assets/icons/mail.svg";
import web from "../../assets/icons/webSm.svg";
import logo from "../../assets/images/sampleCompany.png";
import { Button, Tag } from "../../components";

import "./founderProfile.css";

export const InvestorFounderProfile = () => {
  return (
    <div className="my-4 mx-5">
      <section
        className="profile-banner"
        style={{ background: "black" }}
      ></section>

      <section className="px-5 pb-5 mb-4 founder-profile-info-card">
        <div className="founder-profile-img">
          <img src={founderLg} alt="profile" />
        </div>

        <article
          className="d-flex align-items-center justify-content-between flex-wrap mt-3"
          style={{ rowGap: 10 }}
        >
          <h2 className="founder-profile-name mb-2">Mr Promise Amstel</h2>
          <span>
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" className="mx-3" />
            <img src={linkedIn} alt="linkedIn" />
          </span>
        </article>
        <p className="founder-modal-title">CEO Applean Insteen</p>
        <span className="founder-modal-mail">
          <img src={mail} alt="mail" />
          <a href="mailto:Promise_Amstel@gmail.com">Promise_Amstel@gmail.com</a>
        </span>
        <article className="d-flex align-items-center flex-wrap founder-links">
          <span>
            <img src={web} alt="web" />
            <a href="https://www.promiseamstel.com">@promiseamstel</a>
          </span>
        </article>

        <article
          className="d-flex align-items-center mt-5"
          style={{ columnGap: 12, rowGap: 10 }}
        >
          <Button label="Schedule call" />
          <Button label="Send a message" variant="secondary" />
        </article>
      </section>

      <section className="founder-profile-info-card px-5 py-4">
        <div className="mb-5">
          <h4 className="founder-profile-sub-header">About </h4>
          <p className="founder-profile-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
            morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Enim lectus morbi elementum
            eu.
          </p>
        </div>

        <div className="mb-5 border-bottom pb-5">
          <h4 className="founder-profile-sub-header">Experience</h4>
          <span className="d-flex" style={{ columnGap: "1.5rem", rowGap: 10 }}>
            <img src={logo} alt="logo" className="profile-exp-logo" />
            <div>
              <p className="founder-profile-exp-company">Applane Insteen.</p>
              <p className="founder-modal-title mb-2">CEO Applean Insteen</p>
              <p className="founder-modal-title">United State</p>

              <p className="founder-profile-text">2015 - Present 5 yrs</p>
              <p className="founder-profile-text">
                My responsibility as the product lead is to ensure the success
                of our product team. As a B2B product team, we help our clients
                realize their product development goals. I work with the design
                and engineering teams to craft and develop cutting edge software
                that meets market standards.
              </p>
            </div>
          </span>
        </div>

        <div className="mb-5 border-bottom pb-5">
          <h4 className="founder-profile-sub-header">Education</h4>

          <div className="row">
            <section className="col-lg-6">
              <div
                className="d-flex"
                style={{ columnGap: "1.125rem", rowGap: 10 }}
              >
                <span className="edu-box"></span>
                <article>
                  <p className="founder-profile-exp-company">
                    Manchester United University
                  </p>
                  <p className="founder-profile-edu">Computer Engineering</p>
                  <p className="founder-modal-title mb-2">Master’s Degree</p>
                  <p className="founder-modal-title mb-2">2012 - 2018</p>
                </article>
              </div>
            </section>
            <section className="col-lg-6">
              <div
                className="d-flex"
                style={{ columnGap: "1.125rem", rowGap: 10 }}
              >
                <span className="edu-box"></span>
                <article>
                  <p className="founder-profile-exp-company">
                    Manchester United University
                  </p>
                  <p className="founder-profile-edu">Computer Engineering</p>
                  <p className="founder-modal-title mb-2">Master’s Degree</p>
                  <p className="founder-modal-title mb-2">2012 - 2018</p>
                </article>
              </div>
            </section>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="founder-profile-sub-header">Skills</h4>

          <section
            className="d-flex align-items-center"
            style={{ columnGap: 5, rowGap: 5 }}
          >
            <Tag name="Tech" />
            <Tag name="Engineering" color="#40439A" />
            <Tag name="Career" color="#E31937" />
            <Tag name="Engineering" color="#40439A" />
            <Tag name="Career" color="#E31937" />
          </section>
        </div>
      </section>
    </div>
  );
};
