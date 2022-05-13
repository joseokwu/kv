import React from "react";
import { MilestoneList } from "../../../components";

export const Milestone = ({ data }) => {
  return (
    <div>
      {/* <h3 className="tab-section-title">Milestone/Timeline</h3> */}

      <MilestoneList data={data} />
    </div>
  );
};
