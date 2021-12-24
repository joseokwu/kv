import React from "react";
import { Button } from "../../components";
import { CreateSchedule } from "../investorSchedule/components/CreateSchedule";

export const ScheduleCalendar = () => {
  return (
    <div className="wrapper">
      <CreateSchedule />
      <section className="d-flex align-items-center justify-content-between mb-4">
        <h1 className="page-title">My Schedule</h1>
        <Button
          label="Create Events"
          variant="secondary"
          data-toggle="modal"
          data-target="#createScheduleModal"
        />
      </section>
    </div>
  );
};
