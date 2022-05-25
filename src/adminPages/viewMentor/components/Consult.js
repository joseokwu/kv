import React from "react";
import { InterestCard, ListCard } from "../../../adminComponents";

export const Consult = ({ data = {} }) => {
  const serviceArea = {
    title1: "What are your areas of service?",
    list1: data?.areaofService,
  };

  const offerData = {
    title:
      "If any, what is your offer / promotion for the Alchemist community?",
    list: [data?.promotion],
  };

  const serviceDesc = {
    title: "Write a short description of your service.",
    list: [data?.serviceDescription],
  };
  return (
    <div className="row mx-0">
      <div className="col-lg-7">
        <InterestCard data={serviceArea} />
        <section>
          <ListCard data={offerData} bullet={false} />
        </section>
      </div>

      <div className="col-lg-5">
        <ListCard data={serviceDesc} bullet={false} />
      </div>
    </div>
  );
};
