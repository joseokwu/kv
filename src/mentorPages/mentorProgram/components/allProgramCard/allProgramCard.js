import React from "react";
import { Accepted } from "../accepted/accepted";
import { Declined } from "../declined/declined";
import { Pending } from "../pending/pending";
import { Rescheduled } from "../rescheduled/rescheduled";
import "./allProgramCard.css";

export const AllProgramCard = ({ data = [] }) => {
  return (
    <div>
      {data?.length > 0 &&
        data?.map((d, i) => {
          if (d?.status?.toLowerCase() === "pending") {
            return (
              <div className="mt-3">
                <Pending data={d} />
              </div>
            );
          } else if (d?.status?.toLowerCase() === "accepted") {
            return (
              <div className="mt-3">
                <Accepted data={d} />
              </div>
            );
          } else if (d?.status?.toLowerCase() === "rescheduled") {
            return (
              <div className="mt-3">
                <Rescheduled data={d} />
              </div>
            );
          } else if (d?.status?.toLowerCase() === "declined") {
            return (
              <div className="mt-3">
                <Declined data={d} />
              </div>
            );
          }
        })}
    </div>
  );
};
