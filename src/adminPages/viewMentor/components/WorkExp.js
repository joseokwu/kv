import React from "react";
import { ExpCard } from "../../../adminComponents";

export const WorkExp = () => {
  const expData = [
    { title: "CEO", company: "Wales Digital Agency" },
    { title: "IT Specialist", company: "Wales Digital Agency" },
    { title: "CEO", company: "Wales Digital Agency" },
    { title: "IT Specialist", company: "Wales Digital Agency" },
  ];
  return (
    <div className="row">
      {expData?.length > 0 &&
        expData?.map((data, i) => {
          return (
            <section className="col-lg-6" key={`expData-${i}`}>
              <ExpCard data={data} />
            </section>
          );
        })}
    </div>
  );
};
