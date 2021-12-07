import React from "react";
import left from "../../assets/icons/chervonLeft.svg";
import logo from "../../assets/images/yeLogo.svg";
import "./opportunity.css";

export const Opportunity = () => {
  return (
    <div>
      <article className="wrapper pt-2" style={{ background: "#F9F9FC" }}>
        <section className="d-flex align-items-center">
          <p className="bread-start">Investment Opportunities</p>
          <img src={left} alt="left" className="mx-3" />
          <p className="bread-end">Applane Insteen.</p>
        </section>

        <div className="row">
          <div className="col-lg-7">
            <section className="d-flex align-items-center justify-content-between mt-5 opp-page-card">
              <div>
                <img src={logo} alt="logo" className="mb-3" />
                <h3 className="opp-page-card-title">Yebox Tech.</h3>
              </div>

              <div>
                <section className="d-flex align-items-center">
                  <p>Industry</p>
                  <span>Tech</span>
                </section>
              </div>
            </section>
          </div>

          <div className="col-lg-5"></div>
        </div>
      </article>
    </div>
  );
};
