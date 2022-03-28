import React, { useEffect, useMemo, useState } from "react";
import { Badge, Button, Tag, TextArea } from "../../../components";
import { PortfolioCard } from "./PortfolioCard";
import yeboxLogo from "../../../assets/images/yeLogo.svg";
import styles from "../viewInvestor.module.css";

export const StartupPortfolio = () => {
  const [open, setOpen] = useState(false);
  const portfolios = useMemo(
    () => [
      { status: "In-active" },
      { status: "In-active" },
      { status: "Active" },
      { status: "In-active" },
      { status: "In-active" },
      { status: "Active" },
      { status: "Active" },
    ],
    []
  );

  const [portfolioInView, setPortfolioInView] = useState({});

  useEffect(() => {
    if (portfolios?.length > 0) {
      setPortfolioInView(portfolios[0]);
    }
  }, [portfolios]);

  return (
    <div>
      {!open ? (
        <section className="row mx-0" style={{ maxWidth: 1240 }}>
          {portfolios.map((p, i) => (
            <div className="col-lg-4 mb-4" key={`portfolio-${i}`}>
              <PortfolioCard
                data={p}
                role="button"
                onClick={() => {
                  setPortfolioInView(portfolios[i]);
                  setOpen(!open);
                }}
              />
            </div>
          ))}
        </section>
      ) : (
        <OpenPortfolio
          close={() => setOpen(false)}
          portfolio={portfolioInView}
        />
      )}
    </div>
  );
};

const OpenPortfolio = ({ close = () => {}, portfolio = {} }) => {
  const commitInfo = useMemo(
    () => [
      {
        title: "Commitment Amount",
        subtitle: "Your commitment in the startup",
        amount: "300.000",
      },
      {
        title: "Registration Fee",
        subtitle: "We charge $1,000 as one time registration fee",
        amount: "300.000",
      },
      {
        title: "Transaction Fee",
        subtitle: "We charge 5% of deal value",
        amount: "300.000",
      },
    ],
    []
  );

  const fundRoundData = [
    {
      title: "Funding Ask",
      tag: "$50,000",
      color: "#212463",
    },
    {
      title: "ROI",
      tag: "50%",
    },
    {
      title: "Dilution",
      tag: "20%",
    },
    {
      title: "Total Commitment",
      tag: "$100,000 (100%)",
      color: "#212463",
    },
    {
      title: "Round Type",
      tag: "Seed",
    },
    {
      title: "Funding Stage",
      tag: "Seed",
    },
    {
      title: "Minimum Investment",
      tag: "$100,000 ",
      color: "#212463",
    },
  ];

  const [currentStatus, setCurrentStatus] = useState(
    portfolio?.status ?? "In-active"
  );

  const statusColor = {
    active: "#0E760C",
    "in-active": "#E31919",
  };

  return (
    <section>
      <i
        className={`bi bi-arrow-left ${styles.backToPortfolios}`}
        onClick={close}
        role="button"
      ></i>
      <div
        className={`d-flex align-items-center justify-content-between ${styles.portfolioHeader}`}
      >
        <article className="d-flex align-items-center">
          <img src={yeboxLogo} alt="startup logo" />
          <h3 className="mb-0 ml-4">Yebox Technology</h3>
        </article>

        <article className="dropleft">
          <Tag
            name={
              <>
                {currentStatus ?? "In-active"}
                <i className="bi bi-chevron-down ml-4"></i>
              </>
            }
            color={statusColor[currentStatus.toLowerCase()]}
            data-toggle="dropdown"
            id="status-set"
            role="button"
            className="py-2"
          />
          <div className="dropdown-menu" aria-labelledby="status-set">
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setCurrentStatus("Active")}
            >
              Active
            </button>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setCurrentStatus("In-active")}
            >
              In-active
            </button>
          </div>
        </article>
      </div>
      <div className="row mt-5">
        <section className="col-lg-6">
          <div>
            {commitInfo?.length > 0 &&
              commitInfo.map((info, i) => {
                return (
                  <section
                    className={`d-flex align-items-center justify-content-between mb-45`}
                    key={`commit-${i}`}
                  >
                    <article className={styles?.feeDetail}>
                      <p>{info.title}</p>
                      <p>({info?.subtitle})</p>
                    </article>
                    <p className={styles?.feeAmount}>${info?.amount}</p>
                  </section>
                );
              })}

            <section
              className={`d-flex align-items-center justify-content-between ${styles.totalStrip}`}
            >
              <p>Total</p>
              <p>$900.000</p>
            </section>
          </div>
        </section>

        <section className="col-lg-6">
          <div className={styles.fundRoundCard}>
            <h4>Funding Round Summary</h4>
            <section className="row">
              {fundRoundData?.length > 0 &&
                fundRoundData?.map((data, i) => {
                  return (
                    <div
                      className={`col-lg-4 mb-4 ${
                        i === 2 || i === 5
                          ? "text-right"
                          : i === 1 || i === 4
                          ? "text-center"
                          : ""
                      }`}
                      key={`fundRound-${i}`}
                    >
                      <p>{data?.title}</p>
                      <Tag name={data?.tag} color={data?.color} />
                    </div>
                  );
                })}
            </section>
          </div>
        </section>

        <section className="col-12 my-5">
          <TextArea label="Comment" rows="6" />
          <div className="mt-2 text-right">
            <Button label="Comment" />
          </div>
        </section>

        <section className="col-12">
          <div
            className="d-flex align-items-center mb-3"
            style={{ columnGap: 14 }}
          >
            <span className={styles.commenterInit}>A</span>
            <p>Admin</p>
            <p>2 day ago</p>
            <p>3:15am</p>
          </div>
          <div className="mb-5">
            <p className={styles.comment}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
              adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing
              elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit...
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};
