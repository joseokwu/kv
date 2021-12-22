import React from "react";
import { Button, Tabs } from "../../components/index";
import calender from "../../assets/icons/calender.svg";
import "./investorSchedule.css";
import { Upcoming } from "./components/Upcoming";

export const InvestorSchedule = ({ history }) => {
  const {
    location: { hash },
  } = history;

  const renderComponent = () => {
    switch (hash.replaceAll("%20", " ")) {
      case "#upcoming":
        return <Upcoming />;
      case "#past":
        return <div>Past</div>;

      default:
        return <Upcoming />;
    }
  };
  return (
    <div className="wrapper">
      <section className="d-flex align-items-center justify-content-between mb-4">
        <h1 className="page-title">My Schedule</h1>
        <Button label="Create Events" variant="secondary" />
      </section>

      <section
        className="d-flex align-items-center justify-content-between"
        style={{ marginBottom: "2.5rem" }}
      >
        <Tabs tabItems={["upcoming", "past"]} />

        <div>
          <Button
            label={
              <div className="d-flex align-items-center">
                <img src={calender} alt="calender" className="mr-2" />
                View in calender
              </div>
            }
            variant="secondary"
            className="calender-btn"
          />
        </div>
      </section>

      <section>{renderComponent()}</section>
    </div>
  );
};
