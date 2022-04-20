import React from "react";
import { TextField, TextArea, Button } from "../../Startupcomponents/index";
import map from "../../assets/images/mapBlue.svg";
import phone from "../../assets/icons/phoneBlue.svg";
import web from "../../assets/icons/webBlue.svg";
import mail from "../../assets/icons/mailIcon.svg"
import twitter from "../../assets/icons/twitterLogo.svg";
import instagram from "../../assets/icons/instagram.svg"
import linkedIn from "../../assets/icons/linkedInLogo.svg";
import "./contactUs.css";

export const StartupContactUs = () => {
  return (
    <div className="wrapper">
      <section>
        <h1 className="contact-header">Contact Us</h1>
        <p className="contact-txt">
          Fill up the form and our team would get in touch with you within 2
          hours
        </p>
      </section>

      <section className="row mt-5">
        <article className="col-lg-6 mt-2">
          <div className="d-flex align-items-center contact-us-info">
            <img src={map} alt="location" />
            <p>274, Ikorodu Road, Anthony, Lagos State, Nigeria.</p>
          </div>

          <div className="d-flex align-items-center contact-us-info">
            <img src={map} alt="location" />
            <p>4652 Ripley Manor Terr, Olney MD 20832 USA</p> 
          </div>

          <div className="d-flex align-items-center contact-us-info">
            <img src={phone} alt="phone" />
            <p><a style={{textDecoration: 'none', color: '#2e3192'}} href="tel:+234 913 4444 859">+234 913 4444 859</a></p>
          </div>

          <div className="d-flex align-items-center contact-us-info">
            <img src={mail} alt="web" />
            <p><a style={{textDecoration: 'none', color: '#2e3192'}} href="mailto:info@knight.ventures">info@knight.ventures</a> </p>
          </div>

          <div className="d-flex align-items-center social-links">
            <img src={twitter} alt="twitter" />

            <a href="https://www.instagram.com/knightventures/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a>
            
            <a href="https://www.linkedin.com/company/knightnbishopventures/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="linkedIn" /></a>
          </div>
        </article>

        <article className="col-lg-6">
          <section className="message-card">
            <header className="message-header">Send a message</header>
            <div className="mb-4">
              <TextField
                label="Full Name"
                placeholder=""
                className="message-input"
              />
            </div>

            <div className="mb-4">
              <TextField
                label="Email Address"
                placeholder=""
                type="email"
                className="message-input"
              />
            </div>

            <div className="mb-4">
              <TextArea label="Message" placeholder="Enter Message" rows="5" />
            </div>

            <div className="text-right">
              <Button label="Send" />
            </div>
          </section>
        </article>
      </section>
    </div>
  );
};
