import React, { useState } from "react";
import { Tabs } from "../../../components";
import { AllApplied } from "./AllApplied";

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

  const data = [
    { status: "pending" },
    { status: "declined" },
    { status: "approved" },
    { status: "declined" },
    { status: "expired" },
    { status: "declined" },
    { status: "expired" },
    { status: "pending" },
    { status: "pending" },
    { status: "approved" },
  ];

  const renderComponent = () => {
    switch (active) {
      case `${tabItems[0]}`:
        return <AllApplied data={data} />;
      case `${tabItems[1]}`:
        return (
          <AllApplied data={data?.filter((x) => x.status === "pending")} />
        );
      case `${tabItems[2]}`:
        return (
          <AllApplied data={data?.filter((x) => x.status === "approved")} />
        );
      case `${tabItems[3]}`:
        return (
          <AllApplied data={data?.filter((x) => x.status === "declined")} />
        );
      case `${tabItems[4]}`:
        return (
          <AllApplied data={data?.filter((x) => x.status === "expired")} />
        );
      case `${tabItems[5]}`:
        return <AllApplied data={data} />;
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

      <section style={{ maxWidth: 1540 }}>{renderComponent()}</section>
    </div>
  );
};
