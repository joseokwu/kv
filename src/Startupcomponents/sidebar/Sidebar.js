import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { useHistory } from "react-router";
import user from "../../assets/images/sampleUserSide.png";
import dashboard from "../../assets/icons/dashboard.svg";
import startup from "../../assets/icons/startupApplicants.svg";
import event from "../../assets/icons/eventIcon.svg";
import helpDesk from "../../assets/icons/helpDesk.svg";
import { startUpRoutes, dashboardRoutes } from "../../constants/sidebarRoutes";
import { useActivity } from "../../hooks/useBusiness";

export const StartupSideBar = () => {
    const {
        state: { path },
        changePath,
    } = useActivity();

    const history = useHistory();

    const activateLink = (pathNum) => {
        return path === pathNum ? "active-side-start" : "side-text-start";
    };

    return (
        <div className="start-main tab-wrap d-none d-lg-flex">
            <section className="side-navigator">
                <ul className="side-list-start">
                    {startUpRoutes &&
                        startUpRoutes.map((nav, i) => {
                            return (
                                <li key={i} style={{ marginBottom: "32px" }}>
                                    <span
                                        style={{ cursor: "pointer" }}
                                        onClick={() => changePath(nav.path)}
                                    >
                                        <p
                                            className={`${activateLink(
                                                nav.path
                                            )} side-text-start`}
                                        >
                                            {nav.title}
                                        </p>
                                    </span>
                                </li>
                            );
                        })}

                    <section
                        className="side-footer  "
                        onClick={() => history.push("/startup/support")}
                    >
                        <p className=" side-text" role="button">
                            Need help? Contact us
                        </p>
                    </section>
                </ul>
            </section>
        </div>
    );
};
