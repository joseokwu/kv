import React, { useEffect, useRef, useState } from "react";
import "./partnerRegisteration.css";
import { ProgressBar } from "../../components/index";
import hi from "../../assets/icons/hiEmoji.png";
import { useHistory } from "react-router-dom";
import CompanyOverview from "./components/companyOverview/CompanyOverview";
import OurOffering from "./components/ourOffering/OurOffering";

export const BoosterPartnerRegistration = () => {
  const wrapRef = useRef();
  const [progress, setProgress] = useState("50");

  const {
    location: { hash },
    push,
  } = useHistory();

  const switchForm = (currentHash) => {
    push(currentHash);
  };

  useEffect(() => {
    wrapRef.current.scrollTop = 0;
    if (hash === "#offerings") {
      setProgress("90");
    } else {
      setProgress("50");
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
            <p>Customise your profile</p>
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
              onClick={() => switchForm("#offerings")}
              className={hash === "#offerings" && "active-li"}
            >
              Our Offerings
            </li>
          </ul>
        </div>

        <div className="mt-2 d-flex justify-content-end">
          {hash === "#details" ? (
            <CompanyOverview />
          ) : hash === "#offerings" ? (
            <OurOffering />
          ) : (
            <CompanyOverview />
          )}
        </div>
      </section>
    </div>
  );
};
