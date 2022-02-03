import React from "react";
import { OpportunityCard } from "../../../Startupcomponents";

export const Opportunities = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <div className="row">
      {data.map((d, i) => {
        return (
          <section className="col-xl-4 col-lg-6 mb-4">
            <OpportunityCard />
          </section>
        );
      })}
    </div>
  );
};
