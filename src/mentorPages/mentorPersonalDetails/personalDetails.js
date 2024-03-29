import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import hi from "../../assets/icons/hiEmoji.png";
import { ProgressBar } from "../../mentorComponents/index";
import AssistantInfo from "./components/assistantInfo/assistantInfo";
import Consulting from "./components/consulting/consulting";
import Details from "./components/details/details";
import Interest from "./components/interest/interest";
import WorkExperience from "./components/workExperience/workExperience";
import "./personalDetails.css";
import { useAuth, useActivity } from "../../hooks";

export const MentorPersonalDetails = () => {
    const wrapRef = useRef();
    const [progress, setProgress] = useState("");

    const { getSavedMentorData } = useAuth();

    useEffect(() => {
        getSavedMentorData("mentor");
    }, []);

    const {
        location: { hash },
        push,
    } = useHistory();

    const switchForm = (currentHash) => {
        push(currentHash);
    };
    const { stateAuth } = useAuth();
    const {
        changePath,
        state: { path },
    } = useActivity();

    useEffect(() => {
        wrapRef.current.scrollTop = 0;
        switch (hash) {
            case "#assistant_info":
                setProgress("100");
                changePath(5);
                break;
            case "#consulting":
                setProgress("70");
                changePath(4);
                break;
            case "#area_of_interest":
                setProgress("50");
                changePath(3);
                break;
            case "#work_experience":
                setProgress("30");
                changePath(2);
                break;
            case "#personal_details":
                setProgress("0");
                changePath(1);
                break;
            default:
                setProgress("0");
                changePath(1);
                break;
        }
    }, [hash]);

    return (
        <div>
            <div
                className="mentor_personal_details_wrap"
                style={{ maxWidth: 2000 }}
            >
                <section className="mentor_personal_details_header mb-5 tab-wrap">
                    <div className="pt-3">
                        <span className="">
                            <section
                                className="d-flex align-items-center"
                                style={{ columnGap: 12 }}
                            >
                                <h4>Hi {stateAuth?.user?.username} </h4>
                                <img src={hi} alt={"hi"} />
                            </section>
                            <p>Let’s customise your experience</p>
                        </span>
                        <ProgressBar progress={progress} />
                    </div>
                </section>

                <section className="mentor_personal_details_grid" ref={wrapRef}>
                    <div className="mt-0 d-flex justify-content-stretch">
                        {hash === "" || hash === "#personal_details" ? (
                            <Details />
                        ) : hash === "#work_experience" ? (
                            <WorkExperience />
                        ) : hash === "#area_of_interest" ? (
                            <Interest />
                        ) : hash === "#consulting" ? (
                            <Consulting />
                        ) : hash === "#assistant_info" ? (
                            <AssistantInfo />
                        ) : (
                            hash === ""
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};
