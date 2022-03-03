import React from "react";
import { MarketStrategy } from "./components/marketStrategy";
import { SalesStrategy } from "./components/salesStrategy";

export const Planning = ({ data = [] }) => {
  return (
    <section className="mb-4 mt-5">
      <div className="row">
        {data?.length > 0 &&
          data?.map((d, i) => {
            return (
              <div className="col-lg-10">
                <MarketStrategy data={Object.values(d)[0]} />
                {/* <SalesStrategy /> */}
              </div>
            );
          })}
      </div>
    </section>
  );
};
