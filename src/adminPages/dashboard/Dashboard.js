import React, { useEffect, useState } from "react";
import { DashCard } from "../../components";
import founder from "../../assets/images/sampleFounder.png";
import styles from "./dashboard.module.css";
import { EventCard } from "../events/components";
import { EventDashboard } from "./components/EventDashboard";
import { AppMgtDash } from "./components/AppMgtDash";
import { UserMgtDash } from "./components/UserMgtDash";
import { getStakeHolders, getAdminDashboardData } from "../../services";
import { CircularLoader } from "../../mentorComponents/CircluarLoader";

export const Dashboard = () => {
    const res = {};

    const [numOfApplications, setNumOfApplications] = useState(0);
    const [fetched, setFetched] = useState(true);
    const [dashCardData, setDashCardData] = useState({});

    const getAdminDashData = async () => {
        const res = await getAdminDashboardData();
        return res;
    };
    const cardDetails = [
        {
            name: "Total Applications",
            count: numOfApplications,
            color: "#DEF6FF",
        },
        {
            name: "Incubation Cohort",
            // count: 20,
            color: "#D5D6F4",
        },
        {
            name: "Accelerator Cohort",
            // count: 30,
            color: "#DEF6FF",
        },
        {
            name: "Investor Connect",
            count: dashCardData?.totalinvestor,
            color: "#D5D6F4",
        },

        {
            name: "Mentors",
            count: dashCardData?.totalMentor,
            color: "#DEF6FF",
        },
        {
            name: "Partners",
            count: dashCardData?.totalBoosterPartner,
            color: "#DEF6FF",
        },
    ];

    useEffect(async () => {
        setFetched(false);
        try {
            const res = await getAdminDashData();
            console.log(res);
            setDashCardData(res?.data?.data);
            // setNumOfApplications(res?.data?.metadata?.total);
        } catch (e) {
            console.log(e);
        }
        setFetched(true);
    }, []);

    return (
        <div className="p-5">
            <section
                className="d-flex align-items-center dashboard-cards
       mb-5"
            >
                {cardDetails.length > 0 &&
                    cardDetails.map((card, i) => {
                        return (
                            <DashCard
                                name={card?.name}
                                color={card.color}
                                count={card?.count || 0}
                                fetched={fetched}
                            />
                        );
                    })}
            </section>

            <section
                className="d-flex align-items-center flex-wrap mb-5"
                style={{ columnGap: "1.5rem" }}
            >
                <Box
                    title="Total Fund Raised"
                    content={`$${res?.value || 0}`}
                />
                <Box
                    title="Total Last Funding Rounds"
                    content={`$${res?.value || 0}`}
                    variant="secondary"
                />

                <Box
                    title="Total Valuation"
                    content={`$${res?.value || 0}`}
                    variant="secondary"
                />
            </section>

            <section className="row">
                <article className="col-lg-8">
                    <EventDashboard />
                </article>

                <article className="col-lg-4">
                    {/* <div className="mb-4">
                        <AppMgtDash />
                    </div> */}
                    {/* <div>
                        <UserMgtDash />
                    </div> */}
                </article>
            </section>
        </div>
    );
};

const Box = ({ title = "", content = "", variant = "primary" }) => {
    const variants = {
        primary: "#2E3192",
        secondary: "#00ADEF",
    };
    return (
        <div className={styles?.box} style={{ background: variants[variant] }}>
            <p>{title}</p>
            <div>{content}</div>
        </div>
    );
};
