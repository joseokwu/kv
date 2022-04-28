import React, { useState } from "react";
import { useActivity } from "../../../../hooks";
import { Tabs } from "../../../../mentorComponents";
import "./businessModelCanva.css";
import { Brand } from "./components/brand/brand";
import { BusinessModel } from "./components/businessModel/businessModel";
import { Market } from "./components/market/market";
import { Planning } from "./components/planning/planning";

export const BusinessModelCanva = () => {
  const {
    state: {
      dash_view: { businessModelCanva },
    },
  } = useActivity();
  const renderContent = () => {
    switch (currentTab) {
      case "Market":
        return <Market data={businessModelCanva?.market} />;

      case "Brand":
        return <Brand data={businessModelCanva?.brand} />;

      case "Business Modeling":
        return <BusinessModel data={businessModelCanva?.businessModelling} />;

      case "Planning":
        return <Planning data={businessModelCanva?.planning} />;

      default:
        return <Market data={businessModelCanva?.market} />;
    }
  };

  const tabItems = ["Market", "Brand", "Business Modeling", "Planning"];

  const [currentTab, setCurrentTab] = useState(tabItems[0]);

  return (
    <div className="pt-3">
      <section className="model_canva_title mb-3">
        {/* <h3 className="mb-4">Business Model Canva</h3> */}
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
