import React from "react";
import { Button, Tabs } from "../../components/index";
import calender from "../../assets/icons/calender.svg";
import "./investorSchedule.css";
import { Upcoming } from "./components/Upcoming";
import { CreateSchedule } from "./components/CreateSchedule";
import { Past } from "./components/Past";

export const InvestorSchedule = ({ history }) => {
  const {
    location: { hash },
    push,
  } = history;

  const renderComponent = () => {
    switch (hash.replaceAll("%20", " ")) {
      case "#upcoming":
        return <Upcoming />;
      case "#past":
        return <Past />;
      default:
        return <Upcoming />;
    }
  };
  return (
    <div className="wrapper">
      <CreateSchedule />
      <section className="d-flex align-items-center justify-content-end mb-4">
        {/* <h1 className="page-title">My Schedule</h1> */}
        <Button
          label="Create Events"
          variant="secondary"
          data-toggle="modal"
          data-target="#createScheduleModal"
        />
      </section>

      <section
        className="d-flex align-items-center justify-content-between tab-wrap"
        style={{ marginBottom: "1rem" }}
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
            onClick={() => push("/investor/schedule-calendar")}
          />
        </div>
      </section>

      <section>{renderComponent()}</section>
    </div>
  );
};
