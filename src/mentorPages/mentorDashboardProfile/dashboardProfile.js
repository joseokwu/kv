import React, { useState, useEffect } from "react";
import "./dashboardProfile.css";
import founderPic from "../../assets/images/dashImg.svg";
import twitter from "../../assets/images/dashtwitter.svg";
import facebook from "../../assets/images/dashfb.svg";
import linkedIn from "../../assets/images/dashIn.svg";
import mail from "../../assets/icons/mail.svg";
import globe from "../../assets/icons/globe.svg";
import split from "../../assets/icons/split.svg";
import apple from "../../assets/icons/appleSmall.svg";
import blue from "../../assets/icons/blue.svg";
import gray from "../../assets/icons/gray.svg";
import { AuthButton, Button, Tag } from "../../mentorComponents";
import { getStartupFounderProfile } from "../../services";
import { PageLoader } from "../../components";

export const MentorDashboardProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProfile = async () => {
    setLoading(true);
    const res = await getStartupFounderProfile();
    setProfile(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchProfile();

    return () => {
      setProfile();
    };
  }, []);

  if (loading) {
    return <PageLoader dashboard={true} num={[profile]} />;
  }

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
                  <h3> {profile?.name} </h3>
                </div>
                <div>
                  <p className="pt-3"> {profile?.position} </p>
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
                  {profile?.email}
                </p>
              </div>

              <div className="d-flex">
                <div className="mr-3">
                  <span>
                    <img className="pr-2" src={globe} alt="mail" />
                    {profile?.socialMedia?.twitter}
                  </span>
                </div>

                <div className="mr-3">
                  <span>
                    <img className="pr-2" src={split} alt="mail" />
                    {profile?.socialMedia?.facebook}
                  </span>
                </div>
                <div>
                  <span>
                    <img className="pr-2" src={split} alt="mail" />
                    {profile?.socialMedia?.linkedIn}
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
                <p>{profile?.about}</p>
              </div>

              <div className="p-4 industry">
                <h3>Experience</h3>

                {profile?.experience.length > 0 &&
                  profile?.experience.map((item, i) => (
                    <>
                      <div key={i} className="mt-4 d-flex">
                        <div
                          style={{
                            width: "170px",
                            height: "40px",
                            borderRadius: "50%",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={`${item?.companyLogo}`}
                            alt="apple"
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </div>
                        <div className="founder_experience ml-4">
                          <h3 className=""> {item?.companyName} </h3>
                          <p className="pt-2 pb-2"> {item?.postionHeld} </p>
                          <p className="pb-4"> {item?.companyLocation} </p>

                          <h4> {item?.duration} </h4>
                          <p className="pt-3">{item?.roleDescription}</p>
                        </div>
                      </div>
                    </>
                  ))}
              </div>

              <section className="industry">
                <div className="p-4">
                  <h3>Education</h3>
                  <div className="row">
                    {profile?.education.length > 0 &&
                      profile?.education.map((item, i) => {
                        let start_date = new Date(item?.startDate);
                        let end_date = new Date(item?.endDate);
                        return (
                          <div className="col-lg mt-4 d-flex mr-5">
                            <div>
                              <img src={blue} alt="blue" />
                            </div>
                            <div className="founder_experience ml-4">
                              <h3 className=""> {item?.schoolName} </h3>
                              <p className="pt-2 pb-2">
                                {" "}
                                {item?.courseOfStudy}{" "}
                              </p>
                              <p className="pb-2"> {item?.degree} </p>
                              <p>
                                {" "}
                                {`${start_date.getFullYear()} - ${end_date.getFullYear()}`}{" "}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </section>

              <section className="col-lg mt-4 mb-5">
                <h3 className="pb-3">Skills</h3>
                <span
                  className="d-flex align-items-center flex-wrap"
                  style={{ columnGap: 10, rowGap: 10 }}
                >
                  {profile?.skills.map((item, i) => (
                    <Tag
                      name={item}
                      color={
                        item === "Engineering"
                          ? "#40439A"
                          : item === "Career"
                          ? "#E31937"
                          : "#ACACAC"
                      }
                    />
                  ))}
                </span>
              </section>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
