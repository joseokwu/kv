import React, { useEffect, useState } from "react";
import "./opportunity.css";
import { Tabs } from "../../Startupcomponents";
import { OppCompanyInfo } from "./components/OppCompanyInfo";
import { FinancialDetails } from "./components/FinancialDetails";
import { FundingRound } from "./components/FundingRound";
import { Product } from "./components/product/Product";
import { PitchDeck } from "./components/pitchDeck/PitchDeck";
import { Team } from "./components/team/Team";
import { BusinessCanavas } from "./components/businessCanvas";
import { RoadMap } from "./components/roadMap/RoadMap";
import { Milestone } from "./components/milestone/Milestone";
import { getStartupProfile } from "../../services";
import { useAuth } from "../../hooks/useAuth";
import { EmptyState } from "../../mentorComponents";

export const StartupProfile = ({ history }) => {
    const {
        location: { hash, pathname },
        push,
    } = history;
    const tabItems = [
        "pitch deck",
        "team",
        "product",
        "business canvas",
        // "fundraising",
        "milestone/timeline",
        "product road map",
    ];
    const { stateAuth } = useAuth();
    const [prof, setProf] = useState(null);
    const fetchData = async () => {
        const res = await getStartupProfile();
        // console.log("getStartupProfile", res);
        setProf(res);
    };

    console.log(stateAuth);

    const renderContent = () => {
        switch (hash.replaceAll("%20", " ")) {
            case "#product":
                return <Product />;
            case "#pitch deck":
                return <PitchDeck data={stateAuth?.profileData?.startupRes?.pitchDeck} />;
            case "#business canvas":
                return <BusinessCanavas />;
            case "#product road map":
                return <RoadMap data={prof?.ProductRoadMap} />;
            case "#team":
                return <Team data={stateAuth?.profileData?.startupRes?.team} />;
            case "#milestone/timeline":
                return <Milestone data={stateAuth?.profileData?.startupRes?.mileStone} />;
            default:
                return <Product />;
        }
    };

    // if(!stateAuth?.profileData?.startupRes?.applicationCompleted){
    //   return <EmptyState message="No Profile information to display, please complete registration" />
    //  }

    return (
        <div>
            <article className="wrapper pt-3" style={{ background: "#F9F9FC" }}>
                <div className="row mt-5">
                    <div className="col-lg-7 col-12">
                        <OppCompanyInfo data={stateAuth} />
                        <FinancialDetails data={stateAuth} />
                    </div>
                    <div className="col-lg-5 col-12 ">
                        <FundingRound data={stateAuth} />
                    </div>
                </div>
            </article>

            <article className="wrapper" style={{ background: "#fdfdff" }}>
                <Tabs tabItems={tabItems} />
                <div className="py-4">{renderContent()}</div>
            </article>
        </div>
    );
};
