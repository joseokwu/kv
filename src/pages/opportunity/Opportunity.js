import React from "react";
import left from "../../assets/icons/chervonLeft.svg";
import "./opportunity.css";
import { Tabs, Tag } from "../../components";
import { OppCompanyInfo } from "./components/OppCompanyInfo";
import { FinancialDetails } from "./components/FinancialDetails";
import { FundingRound } from "./components/FundingRound";
import { Product } from "./components/product/Product";
import { PitchDeck } from "./components/pitchDeck/PitchDeck";
import { Team } from "./components/team/Team";
import { BusinessCanvas } from "./components/businessCanvas/BusinessCanvas";
import { Fundraising } from "./components/fundraising/Fundraising";
import { Milestone } from "./components/milestone/Milestone";
import { RoadMap } from "./components/roadMap/RoadMap";

export const Opportunity = ({ history }) => {
  const {
    location: { hash },
  } = history;
  const tabItems = [
    "product",
    "pitch deck",
    "team",
    "business canvas",
    "fundraising",
    "Milestone/Timeline",
    "product road map",
  ];

  const renderContent = () => {
    switch (hash.replaceAll("%20", " ")) {
      case "#product":
        return <Product />;
      case "#pitch deck":
        return <PitchDeck />;
      case "#team":
        return <Team />;
      case "#business canvas":
        return <BusinessCanvas />;

      case "#fundraising":
        return <Fundraising />;

      case "#Milestone/Timeline":
        return <Milestone />;

      case "#product road map":
        return <RoadMap />;

      default:
        return <Product />;
    }
  };
  return (
    <div>
      <article className="wrapper pt-3" style={{ background: "#F9F9FC" }}>
        <section className="d-flex align-items-center">
          <p className="bread-start">Investment Opportunities</p>
          <img src={left} alt="left" className="mx-3" />
          <p className="bread-end">Applane Insteen.</p>
        </section>

        <div className="row mt-5">
          <div className="col-lg-7">
            <OppCompanyInfo />
            <FinancialDetails />
          </div>
          <div className="col-lg-5">
            <FundingRound />
          </div>
        </div>
      </article>

      <article className="wrapper" style={{ background: "#fdfdff" }}>
        <Tabs tabItems={tabItems} />

        <div className="py-4">{renderContent()}</div>
      </article>
    </div>
  );
};
