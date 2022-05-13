import React from "react";
import twitter from "../../../assets/icons/twitterLogo.svg";
import linkedIn from "../../../assets/icons/linkedInLogo.svg";
import whatsApp from "../../../assets/icons/whatsapp.svg";
import member from "../../../assets/images/sampleTeamMember.png";

export const Team = ({ data = [] }) => {
  console.log("data", data);
  return (
    <div>
      {/* <h3 className="tab-section-title">Team</h3> */}

      <section>
        <h4 className="team-group-title">Founder & Co-Founders</h4>

        <div className="row">
          {data &&
            data
              ?.filter((x) => x?.position?.toLowerCase() === "founder and ceo")
              ?.map((c, i) => {
                return (
                  <article className="col-lg-4 mb-4">
                    <TeamMember data={c} key={i} />
                  </article>
                );
              })}
        </div>
      </section>

      <section>
        <h4 className="team-group-title mt-5">Team Members</h4>

        <div className="row">
          {data &&
            data
              ?.filter((x) => x?.position?.toLowerCase() !== "founder and ceo")
              ?.map((c, i) => {
                return (
                  <article className="col-lg-4 mb-4">
                    <TeamMember data={c} key={i} />
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
        <span className="d-flex pt-1">
          {data?.socialMedia?.map((c) => (
            <img
              className="me-1"
              src={
                c === "linkedin"
                  ? linkedIn
                  : c === "facebook"
                  ? twitter
                  : c === "Whatsapp"
                  ? whatsApp
                  : ""
              }
              alt={c}
              width="24"
              height="24"
            />
          ))}
        </span>
      </section>
    </div>
  );
};
