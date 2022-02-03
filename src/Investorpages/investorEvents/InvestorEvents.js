import React from "react";
import { Tabs } from "../../components/index";

export const InvestorEvents = ({ history }) => {
  const {
    location: { hash },
  } = history;
  const tabsItems = [
    "all events",
    "selection day",
    "pitching session",
    "others",
  ];

  const renderComponents = () => {
    switch (hash?.replaceAll("%20", " ")) {
      case "#all events":
        return <div>All Events</div>;
      case "#selection day":
        return <div>Selection Day</div>;
      case "#pitching session":
        return <div>Pitching Session</div>;
      case "#others":
        return <div>Others</div>;
      default:
        return <div>all events</div>;
    }
  };
  return (
    <div className="wrapper">
      <section className="mb-4">
        <h1>Events</h1>
      </section>

      <section className="mb-4">
        <Tabs tabItems={tabsItems} />
      </section>
      <section>{renderComponents()}</section>
    </div>
  );
};
