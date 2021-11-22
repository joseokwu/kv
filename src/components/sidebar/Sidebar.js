import React from "react";
import "./sidebar.css";
import { useHistory } from "react-router";
import user from "../../assets/images/sampleUserSide.png";
import dashboard from "../../assets/icons/dashboard.svg";
import startup from "../../assets/icons/startupApplicants.svg";
import helpDesk from "../../assets/icons/helpDesk.svg";

export const Sidebar = () => {
  const {
    location: { pathname },
    push,
  } = useHistory();

  const activateLink = (path) => {
    return pathname.includes(path) ? "active-side" : "";
  };

  return (
    <div className="side-main">
      <section className="side-navigator">
        <div>
          <img src={user} alt="profile" />
        </div>
        <h5 className="mb-0 side-header">Hello Micheal Smith</h5>
        <p className="mb-0 side-text">Partner</p>

        <ul className="side-list">
          <li>
            <a href="/dashboard">
              <img src={dashboard} alt="dash" />
              <p className={`${activateLink("dashboard")} side-text`}>
                Dashboard
              </p>
            </a>
          </li>
          <li>
            <a href="/applicants">
              <img src={startup} alt="dash" />
              <p className={`${activateLink("applicants")} side-text`}>
                Startup Applicants
              </p>
            </a>
          </li>
        </ul>
      </section>
      <section className="side-footer" onClick={() => push("/support")}>
        <img src={helpDesk} alt="help" />
        <p className="mb-0 side-text" role="button">
          Need help? Contact us
        </p>
      </section>
    </div>
  );
};
