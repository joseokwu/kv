import React from "react";
import { MilestoneCard } from "../milestoneCard/MilestoneCard";

export const MilestoneList = ({ data = [] }) => {
  return (
    <div>
      <h2 className="text-center milestone-header mb-5">Company Milestone</h2>

      <section className="mile-line">
        {data?.length > 0 &&
          data?.map((x, i) => {
            if (i % 2 === 0) {
              return (
                <div className="mb-5 mile-item d-flex justify-content-end mile-item-left">
                  <MilestoneCard side="left" data={x} />
                </div>
              );
            } else {
              return (
                <div className="mb-5 d-flex justify-content-start mile-item-right">
                  <MilestoneCard side="right" data={x} />
                </div>
              );
            }
          })}
      </section>
    </div>
  );
};
