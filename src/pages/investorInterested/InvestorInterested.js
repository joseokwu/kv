import React from "react";
import { Tabs } from "../../components";
import down from "../../assets/icons/chevronDown.svg";
import filter from "../../assets/icons/filterFunnel.svg";
import { Interests } from "./components/Interests";

export const InvestorInterested = ({ history }) => {
  console.log(`history`, history);

  const {
    location: { hash },
  } = history;

  const renderContent = () => {
    switch (hash) {
      case "#interested":
        return <Interests />;

      default:
        return <Interests />;
    }
  };

  return (
    <div className="wrapper">
      <section>
        <h5 className="page-header">Interested</h5>
      </section>

      <section
        className="mt-5 d-flex align-items-center justify-content-between flex-wrap"
        style={{ rowGap: "1rem" }}
      >
        <Tabs tabItems={["interested"]} />

        <div
          className="d-flex align-items-center"
          style={{ columnGap: "1rem" }}
        >
          <OpportunityFilter />
        </div>
      </section>
      <section className="mt-4">{renderContent()}</section>
    </div>
  );
};

const OpportunityFilter = () => {
  return (
    <div className="dropdown">
      <button
        className="d-flex align-items-center filter-btn"
        style={{ columnGap: 7 }}
        data-toggle="dropdown"
      >
        <img src={filter} alt="filter" />
        <p>Filter</p>
        <img src={down} alt="down" />
      </button>
    </div>
  );
};

const RecentDropdown = () => {
  return (
    <div className="dropdown">
      <button
        className="d-flex align-items-center filter-btn"
        style={{ columnGap: 7 }}
        data-toggle="dropdown"
      >
        <p>Recent</p>
        <img src={down} alt="down" />
      </button>
    </div>
  );
};
