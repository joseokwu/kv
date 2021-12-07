import React from "react";
import "./opportunity.css";
import logo from "../../assets/images/yeLogo.svg";
import { Tag } from "..";

export const OpportunityCard = () => {
  return (
    <div className="opp-card">
      <section className="d-flex align-items-center justify-content-between mb-2">
        <img src={logo} alt="logo" />
        <span class="opp-tag">Idea Stage</span>
      </section>

      <section className="mb-2 d-flex align-items-center justify-content-between">
        <h4 className="opp-company">Yebox Technology</h4>
        {/* <span className="active-dot"></span> */}
      </section>
      <section className="d-flex align-items-center" style={{ columnGap: 10 }}>
        <Tag name="Fintech" />
        <Tag name="Incubation Program" color="#40439A" />
      </section>

      <section className="opp-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
          morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit...
        </p>
      </section>

      <section className="d-flex align-items-center justify-content-between opp-footer-text">
        <div>
          <p className="mb-2">www.applane.com</p>
        </div>
        <div className="text-right">
          <p className="mb-2">Incorporation Date: 20/3/21</p>
        </div>
      </section>
    </div>
  );
};
