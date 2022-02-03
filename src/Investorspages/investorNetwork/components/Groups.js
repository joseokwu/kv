import React from "react";
import { GroupCard } from "../../../components";

export const Groups = () => {
  return (
    <div>
      <section className="row">
        {Array.from("coding").map((c, i) => {
          return (
            <div className="col-xl-6 mb-4" key={`group-${i}`}>
              <GroupCard />
            </div>
          );
        })}
      </section>
    </div>
  );
};
