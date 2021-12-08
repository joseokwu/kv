import React from "react";
import { Tabs } from "../../../../components";

export const Fundraising = () => {
  return (
    <div>
      <h3 className="tab-section-title">Fundraising</h3>

      <Tabs
        tabItems={[
          "funding ask",
          "fund utilization",
          "cap table",
          "previous round",
          "Financial Projection",
        ]}
      />
    </div>
  );
};
