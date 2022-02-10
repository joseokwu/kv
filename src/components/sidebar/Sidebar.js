import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { useHistory } from "react-router";
import user from "../../assets/images/sampleUserSide.png";
import dashboard from "../../assets/icons/dashboard.svg";
import startup from "../../assets/icons/startupApplicants.svg";
import event from "../../assets/icons/eventIcon.svg";
import interested from "../../assets/icons/interestedIcon.svg";
import portfolio from "../../assets/icons/portfolioIcon.svg";
import schedule from "../../assets/icons/scheduleIcon.svg";
import evaluation from "../../assets/icons/evaluationIcon.svg";
import networking from "../../assets/icons/networkingIcon.svg";
import helpDesk from "../../assets/icons/helpDesk.svg";
import briefcase from "../../assets/icons/berifcase.svg";
import { Link } from "react-router-dom";

const investorNavigators = [
  {
    title: "Dashboard",
    activator: "dashboard",
    path: "/investor/dashboard",
    icon: dashboard,
  },
  {
    title: "Investment Opportunities",
    activator: "opportunities",
    path: "/investor/opportunities",
    icon: startup,
  },
  {
    title: "Interested",
    activator: "interested",
    path: "/investor/interested",
    icon: interested,
  },
  // {
  //   title: "Portfolio",
  //   activator: "portfolio",
  //   path: "/investor/portfolio",
  //   icon: portfolio,
  // },

  {
    title: "Events",
    activator: "events",
    path: "/investor/events",
    icon: event,
  },
  {
    title: "Schedule",
    activator: "schedule",
    path: "/investor/schedule",
    icon: schedule,
  },
  {
    title: "Evaluation",
    activator: "evaluation",
    path: "/investor/evaluation",
    icon: evaluation,
  },
  {
    title: "Networking",
    activator: "networking",
    path: "/investor/networking",
    icon: networking,
  },
  {
    title: "Deal Room",
    activator: "deal_room",
    path: "/investor/deal_room",
    icon: briefcase,
  },
];

const boosterNavigators = [
  {
    title: "Dashboard",
    activator: "dashboard",
    path: "/booster/dashboard",
    icon: dashboard,
  },
  {
    title: "Startup Applicants",
    activator: "applicants",
    path: "/booster/applicants",
    icon: startup,
  },
];

export const Sidebar = () => {
  const {
    location: { pathname, state },
    push,
  } = useHistory();

  const activateLink = (path) => {
    return pathname.includes(path) ? "active-side" : "";
  };

  const [navigator, setNavigator] = useState([]);

  useEffect(() => {
    if (pathname !== "/support") {
      if (pathname.includes("investor")) {
        setNavigator(investorNavigators);
      } else {
        setNavigator(boosterNavigators);
      }
    } else {
      state?.from === "investor"
        ? setNavigator(investorNavigators)
        : setNavigator(boosterNavigators);
    }
  }, [pathname]);

  console.log(`pathname`, pathname);
  console.log(`navigator`, navigator);
  console.log(`state`, state);

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
          {navigator.length > 0 &&
            navigator.map((nav, i) => {
              return (
                <li>
                  <Link to={nav.path}>
                    <img src={nav.icon} alt="dash" />
                    <p className={`${activateLink(nav.activator)} side-text`}>
                      {nav.title}
                    </p>
                  </Link>
                </li>
              );
            })}
        </ul>
      </section>
      <section
        className="side-footer"
        onClick={() =>
          push({
            pathname: pathname.includes("investor")
              ? "/investor/support"
              : "/booster/support",
            state: {
              from: pathname.includes("investor") ? "investor" : "partner",
            },
          })
        }
      >
        <img src={helpDesk} alt="help" />
        <p className="mb-0 side-text" role="button">
          Need help? Contact us
        </p>
      </section>
    </div>
  );
};
