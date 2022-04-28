import React from "react";

export const TargetMarket = ({ data = {} }) => {
  return (
    <div>
      <div className="business_model_canva_card mb-4">
        <section className="p-4">
          <h3>{data?.title}</h3>
          <p className="pt-2">
            <ul>
              {data?.description?.map((desc, i) => {
                return <li key={`desc-${i}`}>{desc}</li>;
              })}
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
};
