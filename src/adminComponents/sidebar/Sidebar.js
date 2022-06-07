import React, { useEffect, useMemo, useState } from "react";
import "./sidebar.css";
import { useHistory } from "react-router";
import user from "../../assets/images/kvLogo.png";
import dashboard from "../../assets/icons/dashboard.svg";
import program from "../../assets/icons/program.svg";
import event from "../../assets/icons/eventIcon.svg";
import helpDesk from "../../assets/icons/helpDesk.svg";
import booster from "../../assets/icons/booter.svg";
import appMgt from "../../assets/icons/appMgt.svg";
import selectProcess from "../../assets/icons/selectProcess.svg";
import userMgt from "../../assets/icons/userMgt.svg";
import todo from "../../assets/icons/list_alt.svg";
import academy from "../../assets/icons/school.svg";
import documentMgt from "../../assets/icons/documentMgt.svg";
import permissionControl from "../../assets/icons/permissionControl.svg";
import { useAuth } from './../../hooks/useAuth';
import { Link } from "react-router-dom";

export const Sidebar = () => {

  const { stateAuth } = useAuth();
  const adminNavigation = useMemo(
    () => [
      {
        title: "Dashboard",
        activator: "dashboard",
        path: "/admin/dashboard",
        icon: dashboard,
      },
      {
        title: "Application Mgt.",
        activator: "application_mgt",
        path: "/admin/application_mgt",
        icon: appMgt,
      },

      {
        title: "Selection Process",
        activator: "selection_process",
        path: "/admin/selection_process",
        icon: selectProcess,
      },
      {
        title: "program",
        activator: "program",
        path: "/admin/program",
        icon: program,
      },

      {
        title: "User Management",
        activator: "users",
        path: "/admin/users",
        icon: userMgt,
      },
      // {
      //   title: "Booster Partners",
      //   activator: "booster_partners",
      //   path: "/admin/booster_partners",
      //   icon: booster,
      // },
      {
        title: "To-Do List",
        activator: "todo",
        path: "/admin/todo",
        icon: todo,
      },
      {
        title: "Events",
        activator: "events",
        path: "/admin/events",
        icon: event,
      },
      {
        title: "E-Academy",
        activator: "academy",
        path: "/admin/academy",
        icon: academy,
      },
      {
        title: "Documents",
        activator: "documents",
        path: "/admin/documents",
        icon: documentMgt,
      },
      {
        title: "Permission Control",
        activator: "permission",
        path: "/admin/permission",
        icon: permissionControl,
      },
    ],
    []
  );
  const {
    location: { pathname, state },
    push,
  } = useHistory();

  const activateLink = (path) => {
    if (pathname.includes("interested") && path === "opportunities") {
      return "active-side";
    } else {
      return pathname.includes(path) ? "active-side" : "";
    }
  };

  const [navigator, setNavigator] = useState([]);

  useEffect(() => {
    setNavigator(adminNavigation);
  }, []);

  return (
    <div className="side-main">
      <section className="side-navigator">
        <div>
          <img src={`https://ui-avatars.com/api/?name=${stateAuth?.firstname}`} style={{width:'60px', height:'60px', borderRadius:'60px'}} alt="profile" />
        </div>
        <h5 className="mb-0 side-header">{stateAuth?.firstname + ' ' +  stateAuth?.lastname}</h5>
        <p className="mb-0 side-text">Admin</p>

        <ul className="side-list">
          {navigator.length > 0 &&
            navigator.map((nav, i) => {
              return (
                <li key={i}>
                  <Link to={nav.path}>
                    <img src={nav.icon} alt="dash" />
                    <p
                      className={`${activateLink(
                        nav.activator
                      )} side-text-admin`}
                    >
                      {nav.title}
                    </p>
                  </Link>
                </li>
              );
            })}
        </ul>
      </section>
      <section className="side-footer" onClick={() => push("/booster/support")}>
        <img src={helpDesk} alt="help" />
        <p className="mb-0 side-text text-white" role="button">
          Need help? Contact us
        </p>
      </section>
    </div>
  );
};
