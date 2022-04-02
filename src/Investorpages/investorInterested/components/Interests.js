import React from "react";
import { OpportunityCard } from "../../../components";
import { useHistory } from "react-router";

export const Interests = ({ data = []}) => {
  const { push } = useHistory();
  const inArr = [1, 2, 3, 4];
  return (
    <div className="row">
      {data.map((d, i) => {
        return (
          <section className="col-xl-4 col-lg-6 mb-4">
            <OpportunityCard
            data={d}
              onClick={() => push(`/investor/interested/${i}`)}
            />
          </section>
        );
      })}
    </div>
  );
};
