import React, { useState } from "react";
import { Tabs } from "../../../../components";
import CapTable from "./components/CapTable";
import FinancialProjection from "./components/FinancialProjection";
import FundingAsk from "./components/FundingAsk";
import FundUtilization from "./components/FundUtilization";
import PreviousRound from "./components/PreviousRound";
import "./fundraising.css";

export const Fundraising = ({data}) => {
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
        return <FundingAsk data={data?.fundAsk} />;
      case "fund utilization":
        return <FundUtilization data={data?.fundUtilization} />;
      case "cap table":
        return <CapTable data={data?.capTable} />;
      case "previous round":
        return <PreviousRound data={data?.previousRound} />;
      case "financial projection":
        return <FinancialProjection data={data?.financialProjection} />;

      default:
        return <FundingAsk data={data?.fundAsk} />;
    }
  };
  const [currentTab, setCurrentTab] = useState(tabItems[0]);
  return (
    <div>
      {/* <h3 className="tab-section-title">Fundraising</h3> */}

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
