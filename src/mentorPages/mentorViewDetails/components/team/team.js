import React from "react";
import twitter from "../../../../assets/icons/tweet.svg";
import linkedIn from "../../../../assets/icons/link.svg";
import whatsApp from "../../../../assets/icons/whatsapp.svg";
import member from "../../../../assets/images/sampleTeamMember.png";
import { useActivity } from "../../../../hooks";
import "./team.css";

export const Team = () => {
  const {
    state: { teams },
  } = useActivity();
  return (
    <div>
      {/* <h3 className="tab-section-title">Team</h3> */}

      <section>
        <h4 className="team-group-title">Founder & Co-Founders</h4>

        <div className="row">
          {teams.slice(0, 3).map((member, i) => {
            return (
              <article className="col-lg-4 mb-4">
                <CoFounders key={`founder-member-${i}`} data={member} />
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <h4 className="team-group-title mt-5">Team Members</h4>

        <div className="row">
          {teams.slice(3, teams?.length).map((member, i) => {
            return (
              <article className="col-lg-4 mb-4">
                <TeamMember key={`member-${i}`} data={member} />
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

const CoFounders = ({ data = {} }) => {
  return (
    <div className="d-flex align-items-center flex-wrap member-card">
      <img src={member} alt="team member" className="mr-4" />
      <section>
        <p>{data?.name}</p>
        <p className="small">{data?.designation}</p>
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

const TeamMember = ({ data = {} }) => {
  return (
    <div className="d-flex align-items-center flex-wrap member-card">
      <img src={member} alt="team member" className="mr-4" />
      <section>
        <p>{data?.name}</p>
        <p className="small">{data?.designation}</p>
        <span className="d-flex">
          <img src={linkedIn} alt="linkedIn" width="24" height="24" />
          <img
            src={twitter}
            alt="twitter"
            className="mx-2"
            width="24"
            height="24"
          />
          {/* <img src={whatsApp} alt="whatsapp" /> */}
        </span>
      </section>
    </div>
  );
};
