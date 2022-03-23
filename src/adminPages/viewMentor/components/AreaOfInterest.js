import { List } from "antd";
import React from "react";
import { ListCard, InterestCard } from "../../../adminComponents";
import { RowOption, Tag } from "../../../components";
import styles from "../viewMentor.module.css";

export const AreaOfInterest = () => {
  const data = [
    {
      title1: "What are your top industries of expertise",
      list1: ["Career", "Tech", "Engineering", "Career"],
      title2: "Area of expertise",
      list2: [
        { name: "Tech", color: "#058DC1" },
        { name: "Engineering", color: "#40439A" },
        { name: "Career", color: "#E31937" },
      ],
    },
    {
      title1:
        "What role(s) would you like to play within the Knight Ventures Network? ",
      list1: ["Career", "Tech", "Engineering", "Career"],
      title2: "What mentor type would you prefer?",
      list2: [{ name: "Directory listing - By approval ", color: "#058DC1" }],
    },

    {
      title1: "What founder type roles are you interested in?",
      list1: ["Career", "Tech", "Engineering", "Career"],
      title2:
        "What kind of time commitment are you willing to make as a mentor?",
      list2: [{ name: "Directory listing - By approval ", color: "#058DC1" }],
    },

    {
      title1:
        "Do you have at least 5 years of experience working in growth marketing, with startups, or in technology companies?",
      list1: ["Yes"],
      title2:
        "What kind of time commitment are you willing to make as a mentor?",
      list2: [{ name: "Directory listing - By approval ", color: "#058DC1" }],
    },
  ];

  const listData = [
    {
      title:
        "In three sentences or less, tell us why you want to mentor with Knight Ventures and what experience you have with mentoring (being mentored included.)",
      list: [
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.",
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.",
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.",
      ],
    },
    {
      title: "Are you interested in joining a company at a particular stage?",
      list: [
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.",
      ],
    },

    {
      title: "​​What do you care most about when selecting a company to join?",
      list: [
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.",
      ],
    },
    {
      title: "Please list any notes you want us to know",
      list: [
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.",
      ],
    },
  ];
  return (
    <div>
      <section className="row mx-0">
        <div className="col-lg-7">
          {data?.map((d, i) => {
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
          {listData?.length > 0 &&
            listData?.map((data, i) => {
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
