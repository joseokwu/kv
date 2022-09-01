import { css } from "styled-components/macro";
import React, { useState, useEffect, useRef } from "react";
import { WelcomeMessage, RegCard } from "./startup.styled";
import { ProgressBar } from "../../Startupcomponents";
import { StartupProfile } from "./components/startupProfile";
import { useActivity } from "../../hooks/useBusiness";
import { PitchDeck } from "./components/pitchdeck/Pitchdeck";
import { TeamProfile } from "./components/teams";
import { Product } from "./components/product";
import { FundRaising } from "./components/fundraising";
import { useAuth } from "../../hooks/useAuth";

export const StartUpRegistration = () => {
    const {
        state: { path },
    } = useActivity();
    const { stateAuth } = useAuth();
    const [progressStat, setProgressStat] = useState();
    const wrapRef = useRef();

    // console.log(stateAuth)

    useEffect(() => {
        wrapRef.current.scrollTop = 0;
        switch (path) {
            case 1:
                return setProgressStat(0);
            case 2:
                return setProgressStat(20);
            case 3:
                return setProgressStat(40);
            case 4:
                return setProgressStat(60);
            case 5:
                return setProgressStat(100);
            default:
                return progressStat;
        }
    }, [path, progressStat]);

    return (
        <>
            <div className="mx-1">
                <div className="">
                    <div
                        className="px-1"
                        style={{ zIndex: "", background: "#FFFFFF" }}
                        css={css`
                            margin-bottom: 1rem;
                            padding-right: 7rem !important;
                            @media (max-width: 1140px) {
                                margin: 0 16px;
                            }
                            @media (max-width: 1024px) {
                                padding-right: 0 !important;
                            }
                        `}
                    >
                        <WelcomeMessage>
                            <h5>
                                Hi {stateAuth?.startupname}
                                <span
                                    style={{
                                        color: "rgb(199, 249, 15)",
                                        marginLeft: "9px",
                                    }}
                                >
                                    {" "}
                                    &#128075;
                                </span>{" "}
                            </h5>
                            <p>Let's customize your experience</p>
                        </WelcomeMessage>
                        <div style={{ width: "100%" }}>
                            <ProgressBar progress={progressStat} />
                        </div>
                    </div>

                    <RegCard className="" ref={wrapRef}>
                        <div className="reg-card">
                            {path === 1 && <StartupProfile />}
                            {path === 2 && <PitchDeck />}

                            {path === 3 && <TeamProfile />}

                            {path === 4 && <Product />}
                            {path === 5 && <FundRaising />}
                        </div>
                    </RegCard>
                </div>
            </div>
        </>
    );
};
