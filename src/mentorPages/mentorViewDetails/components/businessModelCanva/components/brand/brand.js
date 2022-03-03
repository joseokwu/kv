import React from "react";
import { BrandBuilding } from "./components/brandBuilding";
import { BrandValue } from "./components/brandValue";
import { Competitive } from "./components/competitive";
import { Map } from "./components/productRoadMap";
import { ValueProposition } from "./components/valueProposition";

export const Brand = ({ data = [] }) => {
  console.log("data", data);
  return (
    <section className="mb-4 mt-5">
      <div className="row">
        {data?.length > 0 &&
          data?.map((d, i) => {
            return (
              <div className="col-lg-10">
                <ValueProposition data={Object.values(d)[0]} />
              </div>
            );
          })}
      </div>
    </section>
  );
};
