import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/images/kvLogo.jpg";
import notification from "../../assets/icons/notification.svg";
import chat from "../../assets/icons/mentorchat.svg";
import angleDown from "../../assets/icons/angleDown.svg";
import sampleUser from "../../assets/images/sampleUser.png";
import { useHistory } from "react-router-dom";
import { Notification } from "../notification/Notification";
import view from "../../assets/icons/vp.svg";
import edit from "../../assets/icons/ep.svg";
import logout from "../../assets/icons/logout.svg";
import imageRep from "../../assets/icons/mentorDetails.svg";
import { useAuth } from "./../../hooks/useAuth";

export const Header = ({ setOpen, open, disabled = false }) => {
    const { push } = useHistory();
    const { userLogout, stateAuth } = useAuth();
    const [openNotice, setOpenNotice] = useState(false);
    return (
        <div className="header-main d-flex align-items-center justify-content-between">
            <section className="d-flex align-items-center h-100">
                <div
                    className={`${open ? "hams-open" : "hams-close"} hams`}
                    onClick={() => setOpen(!open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        if (!disabled) push("/mentor/dashboard");
                    }}
                    className="header-logo"
                >
                    <img src={logo} alt="logo" />
                </span>
            </section>
            <section className="d-flex align-items-center h-100">
                <ul className="header-list">
                    {/* <li>
            <span className="header-chat d-flex align-items-center d-none d-lg-flex">
              <img src={chat} alt="chat" />
              <p className="mb-0 header-text">Chat</p>
            </span>
          </li> */}
                    <li
                        style={{ cursor: "pointer" }}
                        className="d-flex align-items-center"
                        onClick={() => setOpenNotice(!openNotice)}
                    >
                        <img src={notification} alt="notification" />
                    </li>
                </ul>

                <div className="d-flex align-items-center h-100">
                    <span className="d-flex align-items-center header-profile d-none d-lg-flex">
                        <img
                            src={
                                stateAuth?.userObj?.avatar ??
                                `https://ui-avatars.com/api/?name=${stateAuth?.firstname} ${stateAuth?.lastname}`
                            }
                            alt="profile"
                            className=""
                        />
                        <p className="mb-0 header-text">
                            {" "}
                            {stateAuth?.user?.username}{" "}
                        </p>
                    </span>
                    <div>
                        <HeaderDropdownMenu />
                    </div>
                </div>
            </section>

            <Notification
                closeNotice={() => setOpenNotice(false)}
                openNotice={openNotice}
            />
        </div>
    );
};

const HeaderDropdownMenu = () => {
    const { push } = useHistory();
    const { userLogout } = useAuth();
    return (
        <div className="dropdown">
            <button
                className="d-flex align-items-center filter-btn p-0"
                data-toggle="dropdown"
                style={{
                    columnGap: 7,
                    background: "transparent",
                    height: "fit-content",
                }}
            >
                <img src={angleDown} alt="dropdown" />
            </button>
            <div className="dropdown-menu headerMenu drop-menu px-2 py-3">
                <button
                    className="dropdown-item text-center py-2"
                    onClick={() => push("/mentor/profile")}
                >
                    {" "}
                    <img className="pe-1" src={view} alt="" /> View Profile
                </button>
                <button
                    className="dropdown-item text-center py-2 my-2"
                    onClick={() => push("/mentor/registration")}
                >
                    {" "}
                    <img className="pe-1" src={edit} alt="" /> Edit Profile
                </button>
                <button
                    className="dropdown-item text-center py-2"
                    style={{ color: "#D62828" }}
                    onClick={() => userLogout()}
                >
                    {" "}
                    <img className="pe-1" src={logout} alt="" /> Log Out
                </button>
            </div>
        </div>
    );
};
