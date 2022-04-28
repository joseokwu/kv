import React from "react";
import { useActivity } from "../../../../hooks";
import { MilestoneList } from "../../../../mentorComponents";

export const Milestone = ({ data = [] }) => {
  return (
    <div>
      {/* <h3 className="tab-section-title">Milestone/Timeline</h3> */}
      <MilestoneList data={data} />
    </div>
  );
};
