import React from "react";

export const KeyCompetitors = ({data}) => {
  return (
    <div>
      <div className="business_model_canva_card mb-4">
        <section className="p-4">
          <h3>Key Competitors</h3>
          <p className="pt-2">
            { data }
          </p>
        </section>
      </div>
    </div>
  );
};