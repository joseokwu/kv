import React, { useEffect, useRef, useState } from "react";
import "./partnerRegisteration.css";
import { ProgressBar } from "../../components/index";
import hi from "../../assets/icons/hiEmoji.png";
import { useHistory } from "react-router-dom";
import CompanyOverview from "./components/companyOverview/CompanyOverview";
import OurOffering from "./components/ourOffering/OurOffering";
import { useAuth, useActivity } from "../../hooks";

export const BoosterPartnerRegistration = () => {
    const wrapRef = useRef();
    const [progress, setProgress] = useState("50");
    const { stateAuth } = useAuth();
    const {
        changePath,
        state: { path },
    } = useActivity();

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
            changePath(2);
        } else {
            setProgress("0");
            changePath(1);
        }
    }, [hash]);

    return (
        <div className="register-wrap" ref={wrapRef}>
            <section className="register-header mb-5">
                <div className="pt-3">
                    <span>
                        <section
                            className="d-flex align-items-center"
                            style={{ columnGap: 12 }}
                        >
                            <h4>Hi {stateAuth.username}</h4>
                            <img src={hi} alt="hi" />
                        </section>
                        <p>Customise your profile</p>
                    </span>
                    <ProgressBar progress={progress} />
                </div>
            </section>
            <section className="register-grid">
                <div className="mt-2 d-flex">
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
