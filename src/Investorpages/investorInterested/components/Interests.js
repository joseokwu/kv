import React from "react";
import { OpportunityCard } from "../../../components";
import { useHistory } from "react-router";
import { EmptyState } from "../../../mentorComponents";

export const Interests = ({ data = []}) => {
  const { push } = useHistory();
  const inArr = [1, 2, 3, 4];
  return (
    <div className="row">
      {data == null && (<EmptyState />)}
      {data && data.length > 0 ? data.map((d, i) => {
        return (
          <section className="col-xl-4 col-lg-6 mb-4">
            <OpportunityCard
            data={d}
              onClick={() => push(`/investor/interested/${i}`)}
            />
          </section>
        );
      }
      ) : (
        <EmptyState message={"No Opportunities at the moment"} />
      )
    }
    </div>
  );
};
