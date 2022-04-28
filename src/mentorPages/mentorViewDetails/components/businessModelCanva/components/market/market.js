import React from "react";
import { KeyCompetitors } from "./components/keyCompetitors";
import { MarketSize } from "./components/marketSize";
import { ProblemStatement } from "./components/problem";
import { Product } from "./components/product";
import { TargetMarket } from "./components/targetMarket";

export const Market = ({ data = {} }) => {
  return (
    <section className="mb-4 mt-5">
      <div className="row">
        <div className="col-lg-10">
          <ProblemStatement data={data[0]?.tabOne} />
          <Product data={data[1]?.tabTwo} />
          <TargetMarket data={data[2]?.tabThree} />
          <MarketSize data={data[3]?.tabFour} />
          <KeyCompetitors data={data[4]?.tabFive} />
        </div>
      </div>
    </section>
  );
};
