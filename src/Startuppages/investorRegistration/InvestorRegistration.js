import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProgressBar } from "../../Startupcomponents";
import hi from "../../assets/icons/hiEmoji.png";
import { PersonalDetails } from "./components/personalDetails/PersonalDetails";
import { InvestorDetails } from "./components/investorDetails/InvestorDetails";
import { InvestorDetails2 } from "./components/investorDetails2/InvestorDetails2";
import { InvestmentApproach } from "./components/investmentApproach/InvestmentApproach";
import { Portfolio } from "./components/portfolio/Portfolio";

export const InvestorRegistration = () => {
  const wrapRef = useRef();
  const [progress, setProgress] = useState("25");

  const {
    location: { hash },
    push,
  } = useHistory();

  const switchForm = (currentHash) => {
    push(currentHash);
  };

  useEffect(() => {
    wrapRef.current.scrollTop = 0;
    switch (hash) {
      case "#details":
        setProgress("25");
        break;
      case "#investor":
        setProgress("50");
        break;

      case "#investor2":
        setProgress("55");
        break;
      case "#approach":
        setProgress("75");
        break;

      case "#portfolio":
        setProgress("95");
        break;
      default:
        setProgress("25");
        break;
    }
  }, [hash]);

  return (
    <div className="register-wrap" ref={wrapRef}>
      <section className="register-header">
        <div>
          <span>
            <section
              className="d-flex align-items-center"
              style={{ columnGap: 12 }}
            >
              <h4>Hi Micheal</h4>
              <img src={hi} alt="hi" />
            </section>
            <p>Let’s customise your experience</p>
          </span>
          <ProgressBar progress={progress} />
        </div>
      </section>

      <section className="register-grid">
        <div>
          <ul className="register-list">
            <li
              onClick={() => switchForm("#details")}
              className={(hash === "#details" || hash === "") && "active-li"}
            >
              Partner Details
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
