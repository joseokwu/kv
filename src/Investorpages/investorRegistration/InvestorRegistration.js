import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProgressBar } from "../../components";
import hi from "../../assets/icons/hiEmoji.png";
import { PersonalDetails } from "./components/personalDetails/PersonalDetails";
import { InvestorDetails } from "./components/investorDetails/InvestorDetails";
import { InvestorDetails2 } from "./components/investorDetails2/InvestorDetails2";
import { InvestmentApproach } from "./components/investmentApproach/InvestmentApproach";
import { Portfolio } from "./components/portfolio/Portfolio";
import { useAuth } from "../../hooks/useAuth";

export const InvestorRegistration = () => {

  const wrapRef = useRef();
  const [progress, setProgress] = useState();

  const {
    location: { hash },
    push,
  } = useHistory();

  const { stateAuth } = useAuth();

  const switchForm = (currentHash) => {
    push(currentHash);
  };

  useEffect(() => {
    wrapRef.current.scrollTop = 0;
    switch (hash) {
      case "#details":
        setProgress("0");
        break;
      case "#investor":
        setProgress("25");
        break;

      case "#investor2":
        setProgress("50");
        break;
      case "#approach":
        setProgress("75");
        break;

      case "#portfolio":
        setProgress("100");
        break;
      default:
        setProgress("0");
        break;
    }
  }, [hash]);

  return (
    <div className="register-wrap" ref={wrapRef}>
      <section className="register-header" style={{ maxWidth: 1440 }}>
        <div>
          <span>
            <section
              className="d-flex align-items-center"
              style={{ columnGap: 12 }}
            >
              <h4>Hi {stateAuth?.username}</h4>
              <img src={hi} alt="hi" />
            </section>
            <p>Let’s customise your experience</p>
          </span>
          <ProgressBar progress={progress} />
        </div>
      </section>

      <section className="register-grid" style={{ maxWidth: 1440 }}>
        <div className="d-none d-lg-flex">
          <ul
            className="register-list"
            style={{ position: "sticky", top: "2rem" }}
          >
            <li
              onClick={() => switchForm("#details")}
              className={(hash === "#details" || hash === "") && "active-li"}
            >
              Personal Details
            </li>
            <li
              onClick={() => switchForm("#investor")}
              className={
                (hash === "#investor" || hash === "#investor2") && "active-li"
              }
            >
              Investor Details
            </li>
            <li
              onClick={() => switchForm("#approach")}
              className={hash === "#approach" && "active-li"}
            >
              Investment Approach
            </li>
            <li
              onClick={() => switchForm("#portfolio")}
              className={hash === "#portfolio" && "active-li"}
            >
              Portfolio
            </li>
          </ul>
        </div>

        <div className="mt-2 d-flex justify-content-end">
          {hash === "" || hash === "#details" ? (
            <PersonalDetails />
          ) : hash === "#investor" ? (
            <InvestorDetails />
          ) : hash === "#investor2" ? (
            <InvestorDetails2 />
          ) : hash === "#approach" ? (
            <InvestmentApproach />
          ) : hash === "#portfolio" ? (
            <Portfolio />
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
};
