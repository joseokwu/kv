import React from "react";
import twitter from "../../../../assets/icons/tweet.svg";
import linkedIn from "../../../../assets/icons/link.svg";
import whatsApp from "../../../../assets/icons/whatsapp.svg";
import member from "../../../../assets/images/sampleTeamMember.png";

import "./team.css";

export const Team = () => {
  const count = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <h3 className="tab-section-title">Team</h3>

      <section>
        <h4 className="team-group-title">Founder & Co-Founders</h4>

        <div className="row">
          {count.slice(0, 3).map((c, i) => {
            return (
              <article className="col-lg-4 mb-4">
                <TeamMember key={`founder-member-${i}`} />
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <h4 className="team-group-title mt-5">Team Members</h4>

        <div className="row">
          {count.map((c, i) => {
            return (
              <article className="col-lg-4 mb-4">
                <TeamMember key={`member-${i}`} />
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

const TeamMember = () => {
  return (
    <div className="d-flex align-items-center flex-wrap member-card">
      <img src={member} alt="team member" className="mr-4" />
      <section>
        <p>Prima Jakatar</p>
        <p className="small">Founder and CEO</p>
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
