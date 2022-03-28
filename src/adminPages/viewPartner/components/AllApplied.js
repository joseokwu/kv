import React from "react";
import { AppliedCard } from "./AppliedCard";

export const AllApplied = ({ data = [] }) => {
  return (
    <div>
      <section className="row">
        {data?.length > 0 &&
          data?.map((d, i) => {
            return (
              <div className="col-lg-4 mb-4" key={`applied-${i}`}>
                <AppliedCard data={d} />
              </div>
            );
          })}
      </section>
    </div>
  );
};
