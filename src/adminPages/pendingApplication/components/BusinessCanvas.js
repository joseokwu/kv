import React from "react";

export const BusinessCanvas = ({ data }) => {
  return (
    <div>
      {/* <h3 className="tab-section-title">Business Model</h3> */}

      <section className="biz-card mb-4">
        <h4>Problem Statement</h4>
        <p>{data?.market?.problemStatement}</p>
      </section>

      {/* <section className="biz-card mb-4">
        <h4>Solution</h4>
        <p>{data?.solution}</p>
      </section> */}

      <section className="biz-card mb-4">
        <h4>Go to Market Strategy</h4>
        <p>{data?.plan?.marketStrategy}</p>
      </section>

      <section className="biz-card mb-4">
        <h4>Market Size / Opportunity</h4>
        <p>{data?.market?.marketSize}</p>
      </section>

      <section className="biz-card mb-4">
        <h4>Key Competitors</h4>

        <p className="pt-2">
            { data?.market?.keyCompetitors }
          </p>
        
      </section>

      <section className="biz-card mb-4">
        <h4>Competitive Advantage (USP)</h4>
        <p>{data?.brand?.competitiveAdvantage}</p>
      </section>

      <section className="biz-card mb-4">
        <h4>Value Proposition</h4>
        <p>{data?.brand?.valueProposition}</p>
      </section>

      <section className="biz-card mb-4">
        <h4>Target Customer Market</h4>
        <p>{data?.market?.targetMarket}</p>
      </section>

      <section className="biz-card mb-4">
        <h4>Partnership & Alliance</h4>
        <p>{data?.businessModel?.keyPartners}</p>
      </section>
    </div>
  );
};
