import React from "react";
import { OpportunityCard } from "../../../components";
import { useHistory } from "react-router";

export const Opportunities = ({ data = []}) => {
  const { push } = useHistory();
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="row">
      {data.map((item, i) => {
        return (
          <section className="col-xl-4 col-lg-6 mb-4">
            <OpportunityCard
              data={item}
              onClick={() => push(`/investor/opportunities/${i}`)}
            />
          </section>
        );
      })}
    </div>
  );
};

