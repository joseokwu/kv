import React, { useState, useEffect } from "react";
import logo from "../../assets/icons/kvlogo.svg";
import { AuthContent } from "../authContent/authContent";
import AuthData from "../../constants/AuthData";
import "./authSide.css";
import { useAuth } from "./../../hooks/useAuth";
import { setType, getType } from "../../utils/helpers";
import { useLocation } from "react-router-dom";

export const AuthSide = ({ history }) => {
    const { changeSignup, stateAuth } = useAuth();
    const [userType, setUserType] = useState(getType());
    const search = useLocation().search;
    const name = new URLSearchParams(search).get("name");

    useEffect(() => {
        if (name !== null) {
            setType(name);
        }
    }, [name]);

    useEffect(() => {
        if (!userType || userType === "admin") {
            setType("startup");
            setUserType("startup");
            changeSignup("startup");
        } else {
            changeSignup(userType);
        }
    }, []);

    console.log("stateAuth", stateAuth);

    return (
        <div className="py-5">
            <div className="mentor_auth_side">
                <div className="mb-3">
                    <img src={logo} alt={"logo"} />
                </div>

                {name === null && (
                    <section className="mentor_switch_signUp mb-4">
                        <button
                            onClick={() => {
                                setUserType("startup");
                                setType("startup");
                                changeSignup("startup");
                            }}
                            className={
                                stateAuth?.signUpStatus === "startup"
                                    ? "activ"
                                    : ""
                            }
                        >
                            Startup
                        </button>
                        <button
                            onClick={() => {
                                setUserType("investor");
                                setType("investor");
                                changeSignup("investor");
                            }}
                            className={
                                stateAuth?.signUpStatus === "investor"
                                    ? "activ"
                                    : ""
                            }
                        >
                            Investor
                        </button>
                        <button
                            onClick={() => {
                                setUserType("mentor");
                                setType("mentor");
                                changeSignup("mentor");
                            }}
                            className={
                                stateAuth?.signUpStatus === "mentor"
                                    ? "activ"
                                    : ""
                            }
                        >
                            Mentor
                        </button>
                        <button
                            onClick={() => {
                                setUserType("boosterpartner");
                                setType("boosterpartner");
                                changeSignup("boosterpartner");
                            }}
                            className={
                                stateAuth?.signUpStatus === "boosterpartner"
                                    ? "activ"
                                    : ""
                            }
                        >
                            Booster Partner
                        </button>
                    </section>
                )}

                {stateAuth?.signUpStatus === "startup" && (
                    <AuthContent authData={AuthData} authDataIndex={0} />
                )}

                {stateAuth?.signUpStatus === "investor" && (
                    <AuthContent authData={AuthData} authDataIndex={1} />
                )}

                {stateAuth?.signUpStatus === "mentor" && (
                    <AuthContent authData={AuthData} authDataIndex={2} />
                )}

                {stateAuth?.signUpStatus === "boosterpartner" && (
                    <AuthContent authData={AuthData} authDataIndex={3} />
                )}
            </div>
        </div>
    );
};
