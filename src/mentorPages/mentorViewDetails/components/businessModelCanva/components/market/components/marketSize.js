import React from "react";

export const MarketSize = ({ data = {} }) => {
  return (
    <div>
      <div className="business_model_canva_card mb-4">
        <section className="p-4">
          <h3>{data?.title}</h3>
          <p className="pt-2">{data?.description}</p>
        </section>
      </div>
    </div>
  );
};
