import React from "react";
import right from "../../assets/icons/right.svg";
import "./productDemo.css";
import { CompanyDetails } from "./components/companyDetails";
import { FinancialDetails } from "./components/financialDetails";
import { FundingRound } from "./components/FundingRound";
import { useHistory } from "react-router-dom";
import { useActivity } from "../../hooks/index";

export const ProductDemo = ({ data = {} }) => {
  const { push } = useHistory();

  const {
    state: { dash_view },
  } = useActivity();

  return (
    <div>
      <article className="pt-2">
        <section className="d-flex align-items-center">
          <span
            className="bread-start"
            role="button"
            onClick={() => {
              push("/mentor/dashboard");
            }}
          >
            Startups
          </span>
          <img src={right} alt="left" className="mx-3" />
          <span className="bread-end">{data?.name}</span>
        </section>

        <div className="row mt-5">
          <div className="col-lg-7">
            <CompanyDetails data={data} />
            <FinancialDetails data={data?.financialDetails} />
          </div>
          <div className="col-lg-5">
            <FundingRound data={data?.fundingRoundSummary} />
          </div>
        </div>
      </article>
    </div>
  );
};
