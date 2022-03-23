import React, { useState } from "react";
import { Tabs } from "../../../components";

export const AppliedStartup = () => {
  const [active, setActive] = useState("All");
  const tabItems = [
    "All",
    "Pending",
    "Approved",
    "Declined",
    "Expired",
    "Re-Applied",
  ];

  const renderComponent = () => {
    switch (active) {
      case `${tabItems[0]}`:
        return "All";
      case `${tabItems[1]}`:
        return "Pending";
      case `${tabItems[2]}`:
        return "Approved";
      case `${tabItems[3]}`:
        return "Declined";
      case `${tabItems[4]}`:
        return "Expired";
      case `${tabItems[5]}`:
        return "Re-Applied";
      default:
        return "All";
    }
  };
  return (
    <div>
      <section className="d-flex justify-content-end mb-4">
        <Tabs
          tabItems={tabItems}
          withState={true}
          state={active}
          setState={setActive}
          className="justify-content-end"
        />
      </section>

      <section>{renderComponent()}</section>
    </div>
  );
};
