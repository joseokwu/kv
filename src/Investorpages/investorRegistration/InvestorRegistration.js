import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProgressBar } from "../../components";
import hi from "../../assets/icons/hiEmoji.png";
import { PersonalDetails } from "./components/personalDetails/PersonalDetails";
import { InvestorDetails } from "./components/investorDetails/InvestorDetails";
import { InvestorDetails2 } from "./components/investorDetails2/InvestorDetails2";
import { InvestmentApproach } from "./components/investmentApproach/InvestmentApproach";
import { Portfolio } from "./components/portfolio/Portfolio";
import { useAuth, useActivity } from "../../hooks";

export const InvestorRegistration = () => {
    const wrapRef = useRef();
    const [progress, setProgress] = useState();

    const {
        location: { hash },
        push,
    } = useHistory();

    const { stateAuth, getDashboardProfile } = useAuth();
    const {
        changePath,
        state: { path },
    } = useActivity();

    const switchForm = (currentHash) => {
        push(currentHash);
    };

    console.log(stateAuth);

    // useEffect(async () => {
    //     const profileRes = await getDashboardProfile();
    // }, [stateAuth?.investorData]);

    console.log(stateAuth?.investorData);

    useEffect(() => {
        wrapRef.current.scrollTop = 0;
        switch (hash) {
            case "#details":
                setProgress("0");
                changePath(1);
                break;
            case "#investor":
                setProgress("25");
                changePath(2);
                break;

            case "#investor2":
                setProgress("50");
                changePath(2);
                break;
            case "#approach":
                setProgress("75");
                changePath(3);
                break;

            case "#portfolio":
                setProgress("100");
                changePath(4);
                break;
            default:
                setProgress("0");
                changePath(1);
                break;
        }
    }, [hash]);

    return (
        <div className="register-wrap">
            <section
                className="register-header mb-5"
                style={{ maxWidth: 1440 }}
            >
                <div className="pt-3">
                    <span>
                        <section
                            className="d-flex align-items-center"
                            style={{ columnGap: 12 }}
                        >
                            <h4>Hi {stateAuth?.username}</h4>
                            <img src={hi} alt="hi" />
                        </section>
                        <p>Let’s customise your experience</p>
                    </span>
                    <ProgressBar progress={progress} />
                </div>
            </section>

            <section
                className="register-grid"
                style={{ maxWidth: 1440 }}
                ref={wrapRef}
            >
                <div className="mt-2 d-flex">
                    {hash === "" || hash === "#details" ? (
                        <PersonalDetails />
                    ) : hash === "#investor" ? (
                        <InvestorDetails />
                    ) : hash === "#investor2" ? (
                        <InvestorDetails2 />
                    ) : hash === "#approach" ? (
                        <InvestmentApproach />
                    ) : hash === "#portfolio" ? (
                        <Portfolio />
                    ) : (
                        ""
                    )}
                </div>
            </section>
        </div>
    );
};
