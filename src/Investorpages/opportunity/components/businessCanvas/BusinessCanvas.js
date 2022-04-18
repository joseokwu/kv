import React from "react";
import "./businessCanvas.css";

export const BusinessCanvas = ({data = []}) => {
  return (
    <div>
      {/* <h3 className="tab-section-title">Business Model</h3> */}

      <section className="biz-card mb-4">
        <h4>Problem Statement</h4>
        <p>
          {data?.problem}
        </p>
      </section>

      <section className="biz-card mb-4">
        <h4>Solution</h4>
        <p>
          {data?.solution}
        </p>
      </section>

      <section className="biz-card mb-4">
        <h4>Go to Market Strategy</h4>
        <p>
          {data?.goToMarket}
        </p>
      </section>

      <section className="biz-card mb-4">
        <h4>Market Size / Opportunity</h4>
        <p>
          {data?.marketSize}
        </p>
      </section>

      <section className="biz-card mb-4">
        <h4>Key Competitors</h4>

        <ul>

        {
           data?.competitors?.map((item , i) =>(
            <li key={i} > { item} </li>
           ))
        }  
        </ul>
      </section>

      <section className="biz-card mb-4">
        <h4>Competitive Advantage (USP)</h4>
        <p>
          {data?.competitiveAdvantage}
        </p>
      </section>

      <section className="biz-card mb-4">
        <h4>Value Proposition</h4>
        <p>
          {data?.valueProposition}
        </p>
      </section>

      <section className="biz-card mb-4">
        <h4>Target Customer Market</h4>
        <p>
          {data?.targetMarket}
        </p>
      </section>

      <section className="biz-card mb-4">
        <h4>Partnership & Alliance</h4>
        <p>
          {data?.marketAlliance}
        </p>
      </section>
    </div>
  );
};
