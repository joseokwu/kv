import React, { useState } from "react";
import { Tabs } from "../../../../components";
import FundingAsk from "./components/FundingAsk";

export const Fundraising = () => {
  const tabItems = [
    "funding ask",
    "fund utilization",
    "cap table",
    "previous round",
    "Financial Projection",
  ];

  const renderComponents = () => {
    switch (currentTab) {
      case "funding ask":
        return <FundingAsk />;

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

      <section className="mt-4">{renderComponents()}</section>
    </div>
  );
};
