import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import apple from "../../assets/images/apple.svg";
import left from "../../assets/icons/chervonLeft.svg";
import contributor from "../../assets/images/sampleTeamMember.png";
import { applicationManagement } from "../../services";
import { AdminButton, Tabs, Tag } from "../../components";
import styles from "./pending.module.css";
import {
    BusinessCanvas,
    Milestone,
    PitchDeck,
    Product,
    RoadMap,
    Team,
} from "./components";
import { toast } from "react-hot-toast";
import { CircularLoader } from "../../components/CircluarLoader";

export const PendingApplication = () => {
    const tabItems = [
        "Pitch Deck",
        "Team",
        "Product",
        "Business Canvas",
        "Milestone/Timeline",
        "Future Road Map",
    ];
    const [loading, setLoading] = useState("none");
    const [startupData, setStartupData] = useState({});
    const [fetched, setFetched] = useState(false);

    const { id } = useParams();
    //console.log(id)

    const {
        location: { hash },
        push,
    } = useHistory();

    const renderComponent = () => {
        switch (hash) {
            case `#${tabItems[0]}`:
                return <PitchDeck data={startupData?.pitchDeck} />;
            case `#${tabItems[1]}`:
                return <Team data={startupData?.team} />;
            case `#${tabItems[2]}`:
                return (
                    <Product
                        data={startupData?.product}
                        founder={startupData?.team}
                    />
                );
            case `#${tabItems[3]}`:
                return <BusinessCanvas data={startupData?.businessCanvas} />;
            case `#${tabItems[4]}`:
                return <Milestone data={startupData?.mileStone} />;
            case `#${tabItems[5]}`:
                return <RoadMap data={startupData?.roadMap} />;
            default:
                return <PitchDeck data={startupData?.pitchDeck} />;
        }
    };

    const manageAccount = async (type, value) => {
        try {
            setLoading(type);
            const res = await applicationManagement({
                userId: id,
                action: "manage_account",
                values: { [type]: value, updatedAt: new Date() },
            });
            //console.log(res)
            if (res?.success) {
                setLoading("none");
                push("/admin/application_mgt");
                toast.success("successfully treated user account");
            }
        } catch (err) {
            setLoading("none");
            toast.error(err?.response?.data?.message);
        }
    };

    useEffect(() => {
        const getData = async () => {
            const res = await applicationManagement({
                userId: id,
                action: "get_account",
            });
            // console.log(res?.data)
            setStartupData(res?.data);
            setFetched(true);
        };

        getData();

        return () => {
            setStartupData();
        };
    }, [id]);

    if (!fetched)
        return (
            <div className="w-full vh-100 d-flex flex-row align-items-center justify-content-center">
                <CircularLoader color="blue" />
            </div>
        );

    return (
        <div className="p-5 bg-white" style={{ minHeight: "100vh" }}>
            <section
                className="d-flex align-items-center mb-3"
                onClick={() => push("/admin/application_mgt")}
                role="button"
                style={{ width: "fit-content" }}
            >
                <img
                    src={left}
                    alt="left"
                    className="mr-2"
                    style={{ transform: "rotate(180deg)" }}
                />
                <p className="bread-start" role="button">
                    Go back
                </p>
            </section>
            <section className={styles.card}>
                <div className="row mx-0">
                    <section className="col-lg-7">
                        <img
                            src={startupData?.startUpProfile?.logo ?? apple}
                            alt="startup logo"
                            className="mb-2"
                        />
                        <h3>{startupData?.startupname}</h3>
                        <p className="mb-4"> {startupData?.industry} </p>

                        <article className="d-flex align-items-center mb-45">
                            <p className={`${styles.statusHeader} mr-3`}>
                                Program Admission Status
                            </p>
                            <Tag name="Pending" color="#2E3192" />
                        </article>

                        <article className="d-flex align-items-center space-out">
                            <AdminButton
                                loading={
                                    loading === "approveToEvaluate"
                                        ? true
                                        : false
                                }
                                label={
                                    startupData?.approveToEvaluate
                                        ? "Approved"
                                        : "Approve to evaluate"
                                }
                                disabled={
                                    startupData?.approveToEvaluate ||
                                    startupData?.recommended
                                }
                                onClick={() =>
                                    manageAccount("approveToEvaluate", true)
                                }
                                variant={
                                    startupData?.approveToEvaluate ||
                                    startupData?.recommended
                                        ? "grey"
                                        : "primary"
                                }
                            />
                            <AdminButton
                                label="Schedule call"
                                variant="secondary"
                            />
                            <AdminButton
                                loading={
                                    loading === "recommended" ? true : false
                                }
                                disabled={
                                    startupData?.recommended ||
                                    startupData?.approveToEvaluate
                                }
                                onClick={() =>
                                    manageAccount("recommended", true)
                                }
                                label={
                                    startupData?.recommended
                                        ? "Recommended"
                                        : "Recommend"
                                }
                                variant={
                                    startupData?.recommended ||
                                    startupData?.approveToEvaluate
                                        ? "grey"
                                        : "danger"
                                }
                            />
                        </article>
                    </section>

                    <section
                        className={`${styles.stageIndustry} col-lg-5 d-flex flex-column justify-content-center`}
                    >
                        <article className="d-flex align-items-center mb-3">
                            <p className="mr-1">Stage</p>
                            <Tag
                                name={startupData?.startUpProfile?.startupStage}
                                color="#40439A"
                            />
                        </article>

                        <article className="d-flex align-items-center mb-3">
                            <p className="mr-1">Industry</p>
                            <div
                                className="d-flex align-items-center space-out"
                                style={{ columnGap: 3 }}
                            >
                                <Tag
                                    name={startupData?.industry}
                                    color="#058DC1"
                                />
                            </div>
                        </article>

                        <article className="d-flex align-items-center ">
                            <p className="mr-1">Funding Round</p>
                            <Tag
                                name={
                                    startupData?.fundRaising?.fundingAsk
                                        ?.instrumentForRound
                                }
                            />
                        </article>
                    </section>
                </div>
            </section>

            <section className="mb-4">
                <Tabs tabItems={tabItems} />
            </section>

            <section>{renderComponent()}</section>
        </div>
    );
};
