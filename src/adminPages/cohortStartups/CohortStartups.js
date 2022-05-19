import React from "react";
import { GoBack, Tag } from "../../components";
import yebox from "../../assets/images/yeLogo.svg";
import styles from "./cohortStartups.module.css";
import { useParams } from "react-router-dom";

export const CohortStartups = () => {
  const { name } = useParams();
  const sampleData = [
    {
      logo: yebox,
      company: "Yebox Technology",
      tags: [
        { tag: "Tech", color: "#058DC1" },
        { tag: "Engineering", color: "#40439A" },
        { tag: "Career", color: "#E31937" },
      ],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      transactionType: "Round",
      fundingAmount: "7",
      lastFundingDate: "20/3/21",
      investRequirement: "21",
      status: "Idea stage",
    },
    {
      logo: yebox,
      company: "Yebox Technology",
      tags: [
        { tag: "Tech", color: "#058DC1" },
        { tag: "Engineering", color: "#40439A" },
        { tag: "Career", color: "#E31937" },
      ],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      transactionType: "Round",
      fundingAmount: "7",
      lastFundingDate: "20/3/21",
      investRequirement: "21",
      status: "Idea stage",
    },
    {
      logo: yebox,
      company: "Yebox Technology",
      tags: [
        { tag: "Tech", color: "#058DC1" },
        { tag: "Engineering", color: "#40439A" },
        { tag: "Career", color: "#E31937" },
      ],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      transactionType: "Round",
      fundingAmount: "7",
      lastFundingDate: "20/3/21",
      investRequirement: "21",
      status: "Idea stage",
    },
    {
      logo: yebox,
      company: "Yebox Technology",
      tags: [
        { tag: "Tech", color: "#058DC1" },
        { tag: "Engineering", color: "#40439A" },
        { tag: "Career", color: "#E31937" },
      ],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      transactionType: "Round",
      fundingAmount: "7",
      lastFundingDate: "20/3/21",
      investRequirement: "21",
      status: "Idea stage",
    },
    {
      logo: yebox,
      company: "Yebox Technology",
      tags: [
        { tag: "Tech", color: "#058DC1" },
        { tag: "Engineering", color: "#40439A" },
        { tag: "Career", color: "#E31937" },
      ],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      transactionType: "Round",
      fundingAmount: "7",
      lastFundingDate: "20/3/21",
      investRequirement: "21",
      status: "Idea stage",
    },
    {
      logo: yebox,
      company: "Yebox Technology",
      tags: [
        { tag: "Tech", color: "#058DC1" },
        { tag: "Engineering", color: "#40439A" },
        { tag: "Career", color: "#E31937" },
      ],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      transactionType: "Round",
      fundingAmount: "7",
      lastFundingDate: "20/3/21",
      investRequirement: "21",
      status: "Idea stage",
    },
  ];
  return (
    <div className="p-5">
      <GoBack />

      <section className="d-flex align-items-center justify-content-between mt-5 mb-4">
        <p className={styles.cohortCrumb}>Cohorts / {name}</p>
        <div className="d-flex align-items-center">
          <p>Sort by:</p>
          <select className="border-0" style={{ background: "transparent" }}>
            <option value="">Industry</option>
          </select>
        </div>
      </section>

      <section className="row">
        {sampleData?.length > 0 &&
          sampleData?.map((data, i) => {
            return (
              <div className="col-lg-4 mb-4" key={`startup-${i}`}>
                <StartupInCohort data={data} />
              </div>
            );
          })}
      </section>
    </div>
  );
};

/**
 *
 * @param {{company: string, tags: {tag: string, color: string}[], desc:string, status: string, transactionType: string, fundingAmount: string|number, investRequirement: string|number, lastFundingDate: date|string, logo: image}} param
 * @returns
 */
const StartupInCohort = ({ data }) => {
  return (
    <div className={styles.startup_card}>
      <section className="d-flex align-items-start justify-content-between mb-2">
        <div>
          <img src={data?.logo ?? ""} alt={data?.company} />
          <h4 className="mb-0">{data?.company}</h4>
        </div>
        <div className="d-flex align-items-end flex-column">
          <Tag name={data?.status} color={"#5D5D5E"} />
          <span className={styles.greenDot}></span>
        </div>
      </section>
      <section className="d-flex align-items-center space-out flex-wrap mb-3">
        {data?.tags?.length > 0 &&
          data?.tags?.map((tag, i) => (
            <Tag
              name={tag?.tag}
              color={tag?.color ?? ""}
              key={`startup-tag-${i}`}
            />
          ))}
      </section>
      <section className="border-bottom pb-2 mb-2">
        <p>{data?.desc}</p>
      </section>

      <section>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p>Transaction type: {data?.transactionType}</p>
          <p>Last funding date: {data?.lastFundingDate}</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p>Funding amount: ${data?.fundingAmount}</p>
          <p>Invest. requirement: ${data?.investRequirement}</p>
        </div>
      </section>
    </div>
  );
};
