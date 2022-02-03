import React from 'react'
import { TextField, TextArea, Button } from '../../mentorComponents/index'
import map from '../../assets/images/mapBlue.svg'
import phone from '../../assets/icons/phoneBlue.svg'
import web from '../../assets/icons/webBlue.svg'
import twitter from '../../assets/icons/twitterLogo.svg'
import facebook from '../../assets/icons/facebookLogo.svg'
import linkedIn from '../../assets/icons/linkedInLogo.svg'
import './contactUs.css'

export const MentorContactUs = () => {
  return (
    <div className="mx-5 my-2">
      <section>
        <h1 className="contact-header">Contact Us</h1>
        <p className="contact-txt">
          Fill up the form and our team would get in touch with you within 2
          hours
        </p>
      </section>

      <section className="row mt-3">
        <article className="col-lg-6 mt-4">
          <div className="d-flex align-items-center contact-us-info">
            <img src={map} alt="location" />
            <span>San francisco United State</span>
          </div>

          <div className="d-flex align-items-center contact-us-info">
            <img src={phone} alt="phone" />
            <span>+234 789 504 345</span>
          </div>

          <div className="d-flex align-items-center contact-us-info">
            <img src={web} alt="web" />
            <span>www.michealsmith.com</span>
          </div>

          <div className="d-flex align-items-center social-links">
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
            <img src={linkedIn} alt="linkedIn" />
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
  )
}
