import React, { useState } from "react";
import { Tabs } from "../../../../components";
import CapTable from "./components/CapTable";
import FinancialProjection from "./components/FinancialProjection";
import FundingAsk from "./components/FundingAsk";
import FundUtilization from "./components/FundUtilization";
import PreviousRound from "./components/PreviousRound";
import "./fundraising.css";

export const Fundraising = () => {
  const tabItems = [
    "funding ask",
    "fund utilization",
    "cap table",
    "previous round",
    "financial projection",
  ];

  const renderComponents = () => {
    switch (currentTab) {
      case "funding ask":
        return <FundingAsk />;
      case "fund utilization":
        return <FundUtilization />;
      case "cap table":
        return <CapTable />;
      case "previous round":
        return <PreviousRound />;
      case "financial projection":
        return <FinancialProjection />;

      default:
        return <FundingAsk />;
    }
  };
  const [currentTab, setCurrentTab] = useState(tabItems[0]);
  return (
    <div>
      <h3 className="tab-section-title">Fundraising</h3>

      <Tabs
        tabItems={tabItems}
        state={currentTab}
        setState={setCurrentTab}
        withState={true}
      />

      <section className="mt-5">{renderComponents()}</section>
    </div>
  );
};
