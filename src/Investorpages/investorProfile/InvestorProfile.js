import React from "react";
import { useHistory } from "react-router";
import { InvestmentProfile } from "./components/InvestmentProfile";
import { InvestorDetails } from "./components/InvestorDetails";
import { InvestorInvestments } from "./components/InvestorInvestments";
import { InvestorTypes } from "./components/InvestorTypes";
import { SectorExpertise } from "./components/SectorExpertise";
import { useAuth } from "../../hooks";
import "./investorProfile.css";

export const InvestorProfile = () => {
  const {
    location: { hash },
    push,
  } = useHistory();

  const { stateAuth } = useAuth();  

  console.log(stateAuth);

  const renderComponent = () => {
    switch (hash) {
      case "#info":
        return (
          <div>
            <section className="mb-3">
              <InvestorInvestments data={stateAuth?.investorData} />
            </section>
            <section>
              <InvestmentProfile data={stateAuth?.investorData} />
            </section>
          </div>
        );

      default:
        return (
          <div>
            <section className="mb-3">
              <InvestorInvestments data={stateAuth?.investorData} />
            </section>
            <section>
              <InvestmentProfile data={stateAuth?.investorData} />
            </section>
          </div>
        );
    }
  };
  return (
    <section style={{ background: "#edf1f4", minHeight: "100vh" }}>
      <div className="wrapper">
        <section className="mb-3">
          <InvestorDetails data={stateAuth?.investorData} />
        </section>
        <section className="mb-3 profile-tab-investor">
          <h2
            className={(hash === "#info" || hash === "") && `active`}
            onClick={() => push("#info")}
            role="button"
          >
            Investment Info
          </h2>
          {/* <h2
          className={hash === "#portfolio" && `active`}
          onClick={() => push("#portfolio")}
          role="button"
          >
          Portfolio
        </h2> */}
        </section>

        <section className="row profile-more">
          <div className="col-lg-8 pl-0">{renderComponent()}</div>
          <div className="col-lg-4 pr-0">
            <div>
              <SectorExpertise data={stateAuth?.investorData} />
            </div>
            <div>
              <InvestorTypes data={stateAuth?.investorData} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
