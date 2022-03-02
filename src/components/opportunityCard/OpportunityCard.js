import React from "react";
import "./opportunity.css";
import logo from "../../assets/images/yeLogo.svg";
import { Tag } from "..";

export const OpportunityCard = ({ onClick , data }) => {
  return (
    <div className="opp-card" onClick={onClick}>
      <section className="d-flex align-items-center justify-content-between mb-2">
        <img src={logo} alt="logo" />
        <span class="opp-tag"> { data?.stage} </span>
      </section>

      <section className="mb-2 d-flex align-items-center justify-content-between">
        <h4 className="opp-company"> { data?.name } </h4>
        <span className="active-dot"></span>
      </section>
      <section className="d-flex align-items-center" style={{ columnGap: 4 }}>
      {
        data?.industry?.map((item, i) =>(
          <Tag name={item} color={item === 'Engineering' ? '#40439A' : item === 'Career' ? '#E31937' : '#3f3f3f3' } /> 
        ))
      }
   
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
