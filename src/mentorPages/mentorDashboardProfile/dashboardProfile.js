import React from 'react'
import './dashboardProfile.css'
import founderPic from '../../assets/images/dashImg.svg'
import twitter from '../../assets/images/dashtwitter.svg'
import facebook from '../../assets/images/dashfb.svg'
import linkedIn from '../../assets/images/dashIn.svg'
import mail from '../../assets/icons/mail.svg'
import globe from '../../assets/icons/globe.svg'
import split from '../../assets/icons/split.svg'
import apple from '../../assets/icons/appleSmall.svg'
import blue from '../../assets/icons/blue.svg'
import gray from '../../assets/icons/gray.svg'
import { AuthButton, Button, Tag } from '../../mentorComponents'

export const DashboardProfile = () => {
  return (
    <section className="container dashboard_profle mt-4">
      <div className="col">
        <div className="dashboard_profile_banner"></div>
        <div className="dashboard_profile_info">
          <span className="dashboard_profile_image">
            <img src={founderPic} alt="founder pic" />
          </span>

          <article className="mx-5 mt-4">
            <section className="d-flex">
              <div className="mr-5 founder_details">
                <div>
                  <h3>Mr Promise Amstel</h3>
                </div>
                <div>
                  <p className="pt-3">CEO Applean Insteen</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <img className="pr-3" src={twitter} alt="twitter" />
                </div>
                <div>
                  <img className="pr-3" src={facebook} alt="facebook" />
                </div>
                <div>
                  <img className="pr-3" src={linkedIn} alt="linkedIn" />
                </div>
              </div>
            </section>

            <section className="mt-5 details_founder">
              <div className="mb-2">
                <p>
                  <img className="pr-2" src={mail} alt="mail" />
                  Promise_Amstel@gmail.com
                </p>
              </div>

              <div className="d-flex">
                <div className="mr-3">
                  <span>
                    <img className="pr-2" src={globe} alt="mail" />
                    @promiseamstel
                  </span>
                </div>

                <div className="mr-3">
                  <span>
                    <img className="pr-2" src={split} alt="mail" />
                    @promiseamstel
                  </span>
                </div>
                <div>
                  <span>
                    <img className="pr-2" src={split} alt="mail" />
                    @promiseamstel
                  </span>
                </div>
              </div>
            </section>

            <section className="d-flex mt-4">
              <Button className="mr-4" label="Schedule Call" />
              <AuthButton className="" label="Send a message" />
            </section>
          </article>

          <section className="row founder_main mt-5 mb-5">
            <div className="col-lg-11 founder_card">
              <div className="p-4">
                <h3 className="pb-3">About </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                  lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Enim lectus morbi elementum
                  eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Enim lectus morbi elementum eu.
                </p>
              </div>

              <div className="p-4 industry">
                <h3>Experience</h3>
                <div className="mt-4 d-flex">
                  <div>
                    <img src={apple} alt="apple" />
                  </div>
                  <div className="founder_experience ml-4">
                    <h3 className="">Applane Insteen</h3>
                    <p className="pt-2 pb-2">CEO Applean Insteen</p>
                    <p className="pb-4">United State</p>

                    <h4>2015 - Present 5 yrs</h4>
                    <p className="pt-3">
                      My responsibility as the product lead is to ensure the
                      success of our product team. As a B2B product team, we
                      help our clients realize their product development goals.
                      I work with the design and engineering teams to craft and
                      develop cutting edge software that meets market standards.
                    </p>
                  </div>
                </div>
              </div>

              <section className="industry">
                <div className="p-4">
                  <h3>Education</h3>
                  <div className="row">
                    <div className="col-lg mt-4 d-flex mr-5">
                      <div>
                        <img src={blue} alt="blue" />
                      </div>
                      <div className="founder_experience ml-4">
                        <h3 className="">Manchester United University</h3>
                        <p className="pt-2 pb-2">Computer Enginerring</p>
                        <p className="pb-2">Master’s Degree</p>
                        <p>2012 - 2018</p>
                      </div>
                    </div>

                    <div className="mt-4 d-flex">
                      <div>
                        <img src={gray} alt="gray" />
                      </div>
                      <div className="founder_experience ml-4">
                        <h3 className="">Manchester United University</h3>
                        <p className="pt-2 pb-2">Computer Enginerring</p>
                        <p className="pb-2">Master’s Degree</p>
                        <p>2012 - 2018</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="col-lg mt-4 mb-5">
                <h3 className="pb-3">Skills</h3>
                <span
                  className="d-flex align-items-center flex-wrap"
                  style={{ columnGap: 10, rowGap: 10 }}
                >
                  <Tag name="Technology" />
                  <Tag name="Engineering" color="#40439A" />
                  <Tag name="Career" color="#E31937" />
                  <Tag name="Engineering" color="#40439A" />
                  <Tag name="Tech" />
                </span>
              </section>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
