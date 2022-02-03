import React from "react";
import "./milestone.css";

export const MilestoneCard = ({ side = "" }) => {
  return (
    <div
      className={`flex-align position-relative`}
      style={side === "left" ? { left: 11 } : { right: 11 }}
    >
      {side === "right" && (
        <section className="flex-align">
          <span className="mile-dot shadow-sm"></span>
          <span className="mile-triangle-left ml-2"></span>
        </section>
      )}
      <div className="d-flex align-items-center mile-card shadow">
        <section className="mile-info">
          <p className="title mb-2">Company Inauguration</p>
          <p className="desc mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non.
          </p>
          {/* <span className="d-flex align-items-center mile-actions">
            <p className="mr-3 edit">Edit Milestone</p>
            <p className="delete">Delete</p>
          </span> */}
        </section>

        <section className="date-card">
          <p className="month">Oct.</p>
          <p className="day">20</p>
          <p className="year">2021</p>
        </section>
      </div>
      {side === "left" && (
        <section className="flex-align">
          <span className="mile-triangle-right mr-2"></span>

          <span className="mile-dot shadow-sm"></span>
        </section>
      )}
    </div>
  );
};
