import React, { useState } from "react";
import "./fundraising.css";
import { Tabs } from "../../../../mentorComponents";
import { FundingAsk } from "./components/fundingAsk";
import FundUtilization from "./components/fundUtilization";
import CapTable from "./components/capTable";
import PreviousRound from "./components/previousRound";
import FinancialProjection from "./components/financialProjection";
import { useActivity } from "../../../../hooks";

export const Fundraising = ({ data = {} }) => {
  // const {
  //   state: {
  //     dash_view: { fundRaising },
  //   },
  // } = useActivity();

  const renderContent = () => {
    switch (currentTab) {
      case "Funding Ask":
        return <FundingAsk data={data?.fundAsk} />;

      case "Fund Utilization":
        return <FundUtilization data={data?.fundUtilization} />;

      case "Cap Table":
        return <CapTable data={data?.capTable} />;

      case "Previous Round":
        return <PreviousRound data={data?.previousRound} />;

      case "Financial Projection":
        return <FinancialProjection data={data?.financialProjection} />;

      default:
        return null;
    }
  };

  // console.log(fundRaising)

  const tabItems = [
    "Funding Ask",
    "Fund Utilization",
    "Cap Table",
    "Previous Round",
    "Financial Projection",
  ];

  const [currentTab, setCurrentTab] = useState(tabItems[0]);

  return (
    <div className="pt-3">
      <section className="model_canva_title mb-3">
        {/* <h3 className="mb-4">Fundraising</h3> */}
        <Tabs
          tabItems={tabItems}
          state={currentTab}
          setState={setCurrentTab}
          withState={true}
        />
      </section>
      <section className="mt-1">{renderContent()}</section>
    </div>
  );
};
