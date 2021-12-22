import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { useHistory } from "react-router";
import { investorNavigators , boosterNavigators } from '../../constants/sidebarRoutes';
import helpDesk from "../../assets/icons/helpDesk.svg";
import user from "../../assets/images/sampleUserSide.png";


export const DashSidebar = () => {
  const {
    location: { pathname },
    push,
  } = useHistory();

  const activateLink = (path) => {
    return pathname.includes(path) ? "active-side" : "";
  };

  const [navigator, setNavigator] = useState([]);

  useEffect(() => {
    if (pathname.includes("investor")) {
      setNavigator(investorNavigators);
    } else {
      setNavigator(boosterNavigators);
    }
  }, [pathname]);

  console.log(`navigator`, navigator);

  return (
    <div className="side-main">
      <section className="side-navigator">
        <div>
          <img src={user} alt="profile" />
        </div>
        <h5 className="mb-0 side-header">Hello Micheal Smith</h5>
        <p className="mb-0 side-text">
          {pathname.includes("investor") ? "Investor" : "Partner"}
        </p>

        <ul className="side-list">
          {investorNavigators.length > 0 &&
            investorNavigators.map((nav, i) => {
              return (
                <li>
                  <a href={nav.path}>
                    <img src={nav.icon} alt="dash" />
                    <p className={`${activateLink(nav.activator)} side-text`}>
                      {nav.title}
                    </p>
                  </a>
                </li>
              );
            })}
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
