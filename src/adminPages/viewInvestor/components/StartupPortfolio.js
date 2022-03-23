import React from "react";
import { PortfolioCard } from "./PortfolioCard";

export const StartupPortfolio = () => {
  return (
    <div>
      <section className="row mx-0" style={{ maxWidth: 1240 }}>
        {Array.from("four").map((p, i) => (
          <div className="col-lg-4 mb-4" key={`portfolio-${i}`}>
            <PortfolioCard />
          </div>
        ))}
      </section>
    </div>
  );
};
