import React, { useState } from 'react'
import { Button } from '../../mentorComponents/index'
import congrats from '../../assets/images/congrats.svg'
import { Link } from 'react-router-dom'
import { Form } from 'antd'
import './congrats.css'

export const MentorCongrats = ({ history }) => {
  const [loader, setLoader] = useState(false)

  return (
    <div className="mentor_congrats_form_wrap">
      <div className="row">
        <section className="mentor_congrats_head col-md-12 text-center">
          <img src={congrats} alt="congrats" />
          <h3 className="pt-4">Congratulations!</h3>
          <div className="mentor_congrats_text">
            <p>You are now a part of the Knight Ventures Network.</p>
            <p>
              To build your network and make meaningful connections please keep
              your <br /> profile updated using the link sent via email every 6
              months.
            </p>
            <p className="mentor_congrats_border">
              Forgot something? <Link to="#">Edit Profile</Link>
            </p>

            <div className="mentor_congrats_text text-center mt-5">
              <p>
                Want to invite a Peer? Click on this button and we will send an
                invite on your behalf
              </p>
            </div>

            <Form.Item>
              <div className="mb-4 mt-3">
                <Button
                  label="Invite a Peer"
                  loading={loader}
                  onClick={() => setLoader()}
                />
              </div>
            </Form.Item>
          </div>
        </section>
      </div>
    </div>
  )
}
