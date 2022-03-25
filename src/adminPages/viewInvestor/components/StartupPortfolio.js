import React from "react";
import { PortfolioCard } from "./PortfolioCard";

export const StartupPortfolio = () => {
  const portfolios = [
    { status: "In-active" },
    { status: "In-active" },
    { status: "Active" },
    { status: "In-active" },
    { status: "In-active" },
    { status: "Active" },
    { status: "Active" },
  ];
  return (
    <div>
      <section className="row mx-0" style={{ maxWidth: 1240 }}>
        {portfolios.map((p, i) => (
          <div className="col-lg-4 mb-4" key={`portfolio-${i}`}>
            <PortfolioCard data={p} />
          </div>
        ))}
      </section>
    </div>
  );
};
