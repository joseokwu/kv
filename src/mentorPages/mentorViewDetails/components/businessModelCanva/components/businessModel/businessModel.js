import React from "react";
import { Channels } from "./components/channels";
import { CustomerRelationship } from "./components/customerRelationship";
import { KeyActivities } from "./components/keyActivities";
import { KeyPartners } from "./components/keyPartners";
import { KeyResources } from "./components/keyResources";
import { RevenueStreams } from "./components/revenueStreams";

export const BusinessModel = ({ data = {} }) => {
  return (
    <section className="mb-4 mt-5">
      <div className="row">
        {data?.length > 0 &&
          data?.map((d, i) => {
            if (Array.isArray(Object.values(d)[0].description)) {
              return (
                <div className="col-lg-10">
                  <Channels data={Object.values(d)[0]} />
                </div>
              );
            } else {
              return (
                <div className="col-lg-10">
                  <CustomerRelationship data={Object.values(d)[0]} />
                </div>
              );
            }
          })}
      </div>
    </section>
  );
};
