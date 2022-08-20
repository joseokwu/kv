import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { useHistory } from "react-router";
import user from "../../assets/images/sampleUserSide.png";
import dashboard from "../../assets/icons/dashboard.svg";
import startup from "../../assets/icons/startupApplicants.svg";
import event from "../../assets/icons/eventIcon.svg";
import helpDesk from "../../assets/icons/helpDesk.svg";
import {
    startUpRoutes,
    mentorRoutes,
    investorRoutes,
    dashboardRoutes,
} from "../../constants/sidebarRoutes";
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
            <section className="side-navigator  d-flex flex-column align-items-center">
                <ul className="side-list-start pl-0">
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

export const MentorSideBar = () => {
    const {
        state: { path },
        changePath,
    } = useActivity();

    const history = useHistory();

    const activateLink = (pathNum) => {
        return path === pathNum ? "active-side-start" : "side-text-start";
    };
    console.log(path);

    return (
        <div className="start-main tab-wrap d-none d-lg-flex">
            <section className="side-navigator  d-flex flex-column align-items-center">
                <ul className="side-list-start pl-0">
                    {mentorRoutes &&
                        mentorRoutes.map((nav, i) => {
                            return (
                                <li key={i} style={{ marginBottom: "32px" }}>
                                    <span
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            history.push(`#${nav.hash}`);
                                            changePath(nav.path);
                                        }}
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
                        className="side-footer"
                        onClick={() => history.push("/mentor/support")}
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

export const InvestorSideBar = () => {
    const {
        state: { path },
        changePath,
    } = useActivity();

    const history = useHistory();

    const activateLink = (pathNum) => {
        return path === pathNum ? "active-side-start" : "side-text-start";
    };
    console.log(path);

    return (
        <div className="start-main tab-wrap d-none d-lg-flex">
            <section className="side-navigator  d-flex flex-column align-items-center">
                <ul className="side-list-start pl-0">
                    {investorRoutes &&
                        investorRoutes.map((nav, i) => {
                            return (
                                <li key={i} style={{ marginBottom: "32px" }}>
                                    <span
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            history.push(`#${nav.hash}`);
                                            changePath(nav.path);
                                        }}
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
                        className="side-footer"
                        onClick={() => history.push("/investor/support")}
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
