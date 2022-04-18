import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import twitter from "../../../../assets/icons/twtsm.svg";
import linkedIn from "../../../../assets/icons/lnkdsm.svg";
import whatsApp from "../../../../assets/icons/whtsm.svg";
import member from "../../../../assets/images/sampleTeamMember.png";
import apple from "../../../../assets/images/apple.svg";
import mail from "../../../../assets/icons/mail.svg";
import globe from "../../../../assets/icons/globe.svg";
import split from "../../../../assets/icons/split.svg";
import blue from "../../../../assets/images/edublue.svg";
import navy from "../../../../assets/images/navy.svg";
import "./team.css";
import { LargeModal, Tag } from "../../../../Startupcomponents";
import founder from "../../../../assets/images/femaleFounder.svg";

export const Team = ({ data }) => {
  // const count = [1, 2, 3, 4, 5, 6]
  // const {push} = useHistory();

  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {showModal ? (
        <LargeModal id="founderModal" title="" closeModal={setShowModal}>
          <FounderModal />
        </LargeModal>
      ) : (
        <span></span>
      )}
      {/* <h3 className="tab-section-title">Team</h3> */}
      {/* <section className="d-flex justify-content-end">
        <button className="teamBtn" onClick={() => push('/startup/team/member')}>Add team member</button>
      </section> */}
      <section>
        {/* <h4 className="team-group-title">Founder & Co-Founders</h4> */}
        <h4 className="team-group-title">Founder</h4>
        <div className="row">
          {data &&
            data.slice(0, 3).map((c, i) => {
              return (
                <article
                  data-target="#founderModal"
                  onClick={() => setShowModal(true)}
                  className="col-lg-4 mb-4"
                  key={`founder-member-${i}`}
                  // data-toggle={'modal'}
                  // data-target="#founderModal"
                >
                  {/* <Modal id="founderModal" withHeader={false}>
                  <FounderModal />
                </Modal> */}
                  <TeamMember data={c} />
                </article>
              );
            })}
        </div>
      </section>

      <section>
        <h4 className="team-group-title mt-5">Team Members</h4>
        <div className="row">
          {data &&
            data.map((c, i) => {
              return (
                <article className="col-lg-4 mb-4" key={`member-${i}`}>
                  <TeamMember data={c} />
                </article>
              );
            })}
        </div>
      </section>
    </div>
  );
};

const TeamMember = ({ data }) => {
  return (
    <div className="d-flex align-items-center flex-wrap member-card">
      <img src={member} alt="team member" className="mr-4" />
      <section>
        <p> {data?.name} </p>
        <p className="small"> {data?.position} </p>
        <span className="d-flex">
          <img src={linkedIn} alt="linkedIn" width="24" height="24" />
          <img
            src={twitter}
            alt="twitter"
            className="mx-2"
            width="24"
            height="24"
          />
          <img src={whatsApp} alt="whatsapp" />
        </span>
      </section>
    </div>
  );
};

const FounderModal = () => {
  return (
    <section className="container dashboard_profle mt-4">
      <div className="row founder_profile px-5">
        <div className="col-lg-2 me-5">
          <img src={founder} alt="" />
        </div>
        <div className="col-lg-9 mt-3">
          <div className="d-flex justify-content-between ">
            <div>
              <h1>Prima Jakatar</h1>
              <p>Founder and CEO</p>
            </div>
            <div className="">
              <img src={linkedIn} alt="linkedIn" />
              <img className="px-3" src={twitter} alt="twitter" />
              <img src={whatsApp} alt="whatsApp" />
            </div>
          </div>

          <div className="my-2">
            <p>
              <img className="pr-2" src={mail} alt="mail" />
              Promise_Amstel@gmail.com
            </p>
          </div>

          <div className="pb-3">
            <span>
              <img className="pr-1" src={globe} alt="globe" />
              @promiseamstel
            </span>

            <span className="mx-2">
              <img className="pr-1" src={split} alt="split" />
              @promiseamstel
            </span>

            <span>
              <img className="pr-1" src={split} alt="split" />
              @promiseamstel
            </span>
          </div>
        </div>
      </div>

      <div className="col">
        {/* <div className="dashboard_profile_banner"></div> */}
        <div className="dashboard_profile_info">
          <section className="row founder_main mt-5 pb-5 mb-5 py-5">
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

              <div className="p-4 industry border-bottom">
                <h3>Experience</h3>
                <div className="mt-4 mb-4 d-flex">
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

              <div className="row p-4 education mt-4">
                <h3>Education</h3>
                <div className="col-lg-5 d-flex mt-4">
                  <div>
                    <img src={blue} alt="blue" />
                  </div>
                  <div className="mx-4">
                    <h6>Manchester University</h6>
                    <p className="py-2">Computer Engineering</p>
                    <article>Master’s Degree</article>
                    <article className="py-2">2012 - 2018</article>
                  </div>
                </div>

                <div className="col-lg-6 d-flex mt-4">
                  <div>
                    <img src={navy} alt="navy" />
                  </div>
                  <div className="mx-4">
                    <h6>Manchester University</h6>
                    <p className="py-2">Computer Engineering</p>
                    <article>Master’s Degree</article>
                    <article className="py-2">2012 - 2018</article>
                  </div>
                </div>
              </div>

              <section className="col-lg mt-4 mb-5">
                <h3 className="pb-3">Skills</h3>
                <span
                  className="d-flex align-items-center flex-wrap"
                  style={{ columnGap: 10, rowGap: 10 }}
                >
                  <Tag name="Tech" color="#058DC1" bg="#DEF6FF" />
                  <Tag name="Engineering" color="#40439A" bg="#F1F2FF" />
                  <Tag name="Career" color="#E31937" bg="#FFF1F3" />
                  <Tag name="Engineering" color="#40439A" bg="#F1F2FF" />
                  <Tag name="Career" color="#E31937" bg="#FFF1F3" />
                </span>
              </section>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
