import React from "react";
import { ExpCard } from "../../../adminComponents";

export const WorkExp = ({ data = {} }) => {
  const expData = [
    {
      title: data?.position,
      company: data?.companyName,
      industry: data?.industry,
      achievements: data?.achievements,
      amountRaised: data?.amountRaised,
    },
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
