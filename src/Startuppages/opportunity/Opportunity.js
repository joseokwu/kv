import React from "react";
import left from "../../assets/icons/chervonLeft.svg";
import "./opportunity.css";
import { Tabs, Tag } from "../../Startupcomponents";
import { OppCompanyInfo } from "./components/OppCompanyInfo";
import { FinancialDetails } from "./components/FinancialDetails";
import { FundingRound } from "./components/FundingRound";
import { Product } from "./components/product/Product";
import { PitchDeck } from "./components/pitchDeck/PitchDeck";
import { Team } from "./components/team/Team";
import { BusinessCanavas } from "./components/businessCanvas";
import { RoadMap } from "./components/roadMap/RoadMap";



export const Opportunity = ({ history }) => {
  const {
    location: { hash },
  } = history;
  const tabItems = [
    "pitch deck",
    "team",
    "product",
    "business canvas",
    // "fundraising",
    "Milestone/Timeline",
    "Product Road Map",
  ];

  const renderContent = () => {
    switch (hash.replaceAll("%20", " ")) {
      case "#product":
        return <Product />;
      case "#pitch deck":
        return <PitchDeck />;
        case "#business canvas":
        return <BusinessCanavas />;
      case "#Product Road Map":
        return <RoadMap />;
      case "#team":
        return <Team />;
      case "#Milestone/Timeline":
        return <div>Milestone/Timeline</div>;
      default:
        return <Product />;
    }
  };
  return (
    <div>
      <article className="wrapper pt-2" style={{ background: "#F9F9FC" }}>


        <div className="row mt-5">
          <div className="col-lg-7 col-12">
            <OppCompanyInfo />
            <FinancialDetails />
          </div>
          <div className="col-lg-5 col-12 ">
            <FundingRound />
          </div>
        </div>
      </article>

      <article className="wrapper">
        <Tabs tabItems={tabItems} />
        <div className="py-4">{renderContent()}</div>
      </article>
    </div>
  );
};
