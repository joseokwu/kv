import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ProgressBar } from "../../components";
import hi from "../../assets/icons/hiEmoji.png";
import { PersonalDetails } from "./components/personalDetails/PersonalDetails";

export const InvestorRegistration = () => {
  const [progress, setProgress] = useState("50");

  const {
    location: { hash },
    push,
  } = useHistory();

  const switchForm = (currentHash) => {
    push(currentHash);
  };

  return (
    <div className="register-wrap">
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
              className={hash === "#investor" && "active-li"}
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
          <PersonalDetails />
        </div>
      </section>
    </div>
  );
};
