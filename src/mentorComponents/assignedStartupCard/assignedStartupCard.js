/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./assignedStartupCard.css";
import logo from "../../assets/images/yeLogo.svg";
import { Tag } from "..";

export const AssignedStartupCard = ({ onClick, data = {} }) => {
  return (
    <div className="opp-card" onClick={onClick}>
      <section className="d-flex align-items-center justify-content-between mb-2">
        <img src={logo} alt="logo" />
        <span className="opp_tag">{data?.stage}</span>
      </section>

      <section className="mb-2 d-flex align-items-center justify-content-between">
        <h4 className="opp-company">{data?.name}</h4>
        {/* <span className="active-dot"></span> */}
      </section>
      <section className="d-flex align-items-center" style={{ columnGap: 10 }}>
        <Tag name={data?.programType} />
      </section>

      <section className="opp-content">
        <p>{data?.productDescription}</p>
      </section>

      <section className="d-flex align-items-center justify-content-between opp-footer-text">
        <div>
          <p className="mb-2">
            <a href={`https://${data?.website}`} target="_blank">
              {data?.website}
            </a>
          </p>
        </div>
        <div className="text-right">
          <p className="mb-2">Incorporation Date: {data?.incorporationDate}</p>
        </div>
      </section>
    </div>
  );
};
