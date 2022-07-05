import React from "react";
import twitter from "../../../assets/icons/twitterLogo.svg";
import linkedIn from "../../../assets/icons/linkedInLogo.svg";
import whatsApp from "../../../assets/icons/whatsapp.svg";
import member from "../../../assets/images/sampleTeamMember.png";

export const Team = ({ data }) => {
    console.log("data", data);
    return (
        <div>
            {/* <h3 className="tab-section-title">Team</h3> */}

            <section>
                <h4 className="team-group-title">Founder & Co-Founders</h4>

                <div className="row">
                    <article className="col-lg-4 mb-4">
                        <TeamMember data={data} />
                    </article>
                </div>
            </section>

            <section>
                <h4 className="team-group-title mt-5">Team Members</h4>

                <div className="row">
                    {data &&
                        data?.coFounder?.map((c, i) => {
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
            {data?.avatar && (
                <img
                    src={data?.avatar}
                    alt="team member"
                    className="mr-4"
                    style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "60px",
                    }}
                />
            )}
            <section>
                <p> {data?.firstName + " " + data?.lastName} </p>
                <p className="small"> {data?.position} </p>
                <span className="d-flex">
                    <a href={data?.socialMedia?.linkedIn} target="_blank">
                        <img
                            src={linkedIn}
                            alt="linkedIn"
                            to={data?.socialMedia?.linkedIn}
                            width="20"
                            height="20"
                        />
                    </a>
                    <a href={data?.socialMedia?.twitter} target="_blank">
                        <img
                            src={twitter}
                            alt="twitter"
                            className="mx-3"
                            width="20"
                            to={data?.socialMedia?.twitter}
                            height="20"
                        />
                    </a>
                    <a
                        href={`https://wa.me/${data?.mobile_number}?text=`}
                        target="_blank"
                    >
                        <img
                            src={whatsApp}
                            alt="whatsapp"
                            width="20"
                            height="20"
                        />
                    </a>
                </span>
            </section>
        </div>
    );
};
