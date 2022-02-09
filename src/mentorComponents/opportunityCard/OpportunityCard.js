import React from "react";
import "./opportunity.css";
import logo from "../../assets/images/yeLogo.svg";
import { Tag } from "..";

export const OpportunityCard = ({ onClick }) => {
  return (
    <div className="opp_card" onClick={onClick}>
      <section className="d-flex align-items-center justify-content-between mb-2">
        <img src={logo} alt="logo" />
        <span class="opp_tag">Idea Stage</span>
      </section>

      <section className="mb-2 d-flex align-items-center justify-content-between">
        <h4 className="opp_company">Yebox Technology</h4>
        <span className="active_dot"></span>
      </section>
      <section className="d-flex align-items-center" style={{ columnGap: 4 }}>
        <Tag name="Tech" />
        <Tag name="Engineering" color="#40439A" />
        <Tag name="Career" color="#E31937" />
      </section>

      <section className="opp_content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
          morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit...
        </p>
      </section>

      <section className="d-flex align-items-center justify-content-between opp_footer_text">
        <div>
          <p className="mb-2">Transaction type: Round</p>
          <p>Funding amount: $7</p>
        </div>
        <div className="text-right">
          <p className="mb-2">Last funding date: 20/3/21</p>
          <p>Invest. requirement: $21</p>
        </div>
      </section>
    </div>
  );
};
