import React, { useEffect, useState } from "react";
import { ListCard, InterestCard } from "../../../adminComponents";
import { RowOption, Tag } from "../../../components";
import styles from "../viewMentor.module.css";

export const AreaOfInterest = ({ data = {} }) => {
  const [listInfo, setListInfo] = useState({});

  console.log("data", data);
  useEffect(() => {
    setListInfo([
      {
        title:
          "In three sentences or less, tell us why you want to mentor with Knight Ventures and what experience you have with mentoring (being mentored included.)",
        list: [data?.mentorExperience],
      },
      {
        title: "Are you interested in joining a company at a particular stage?",
        list: [data?.companyInterest],
      },
      {
        title: "What do you care most about when selecting a company to join?",
        list: [data?.criterion],
      },
      {
        title: "Please list any notes you want us to know",
        list: [data?.additionalInfo],
      },
    ]);
    return () => {};
  }, []);

  const info = [
    {
      title1: "What are your top industries of expertise",
      list1: [data?.industryExpertise],
      title2: "Area of expertise",
      list2: data?.skills?.map((skill) => ({ name: skill })),
    },
    {
      title1:
        "What role(s) would you like to play within the Knight Ventures Network? ",
      list1: [data?.roleInKv],
      title2: "What mentor type would you prefer?",
      list2: [{ name: data?.mentorType, color: "#058DC1" }],
    },

    {
      title1: "What founder type roles are you interested in?",
      list1: [data?.roleAsFounder],
      title2:
        "What kind of time commitment are you willing to make as a mentor?",
      list2: [{ name: "Directory listing - By approval ", color: "#058DC1" }],
    },

    {
      title1:
        "Do you have at least 5 years of experience working in growth marketing, with startups, or in technology companies?",
      list1: [data?.growthInStartup],
    },
  ];

  return (
    <div>
      <section className="row mx-0">
        <div className="col-lg-7">
          {info?.map((d, i) => {
            return <InterestCard data={d} key={`interest-${i}`} />;
          })}

          <section
            className={`mb-0 d-flex align-items-center justify-content-between ${styles.interestCard}`}
          >
            <p>Resume</p>
            <a href="" className="view-link">
              WaleCV.pdf
            </a>
          </section>
        </div>

        <div className="col-lg-5">
          {listInfo?.length > 0 &&
            listInfo?.map((data, i) => {
              return (
                <section className="mb-4" key={`list-card-${i}`}>
                  <ListCard data={data} />
                </section>
              );
            })}
        </div>
      </section>
    </div>
  );
};
