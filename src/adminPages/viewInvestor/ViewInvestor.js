import React, { useMemo, useEffect, useState } from "react";
import userPic from "../../assets/images/sampleUser.png";
import twitter from "../../assets/images/profileTwitter.svg";
import linkedIn from "../../assets/images/profileLinkedIn.svg";
import location from "../../assets/icons/locationSm.svg";
import web from "../../assets/icons/webSm.svg";
import left from "../../assets/icons/chervonLeft.svg";
import styles from "./viewInvestor.module.css";
import { useHistory, useParams } from "react-router-dom";
import { Tabs } from "../../components";
import { InvestmentInfo, InvestorInfo, StartupPortfolio } from "./components";
import { applicationManagement, getOrCreateProfile } from "../../services";
import { CircularLoader } from "../../mentorComponents/CircluarLoader";
import { EmptyState } from "../../mentorComponents";

export const ViewInvestor = () => {
    const { goBack, push } = useHistory();
    const [investorData, setInvestorData] = useState({});
    const [loading, setLoading] = useState(false);
    const tabItems = useMemo(
        () => ["Investment Info", "Investor Info", "Start-up Portfolio"],
        []
    );

    const {
        location: { hash },
    } = useHistory();

    const { id } = useParams();

    useEffect(async () => {
        setLoading(true);
        try {
            const res = await getOrCreateProfile({
                userId: id,
                userType: "investor",
            });
            if (res) {
                setInvestorData(res?.data?.data);
                console.log("res", res?.data?.data);
            }
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    }, [id]);

    console.log(investorData);

    const renderComponent = () => {
        switch (hash) {
            case `#${tabItems[0]}`:
                return (
                    <InvestmentInfo
                        data={investorData?.personalDetail}
                        info={investorData?.investorApproach}
                    />
                );
            case `#${tabItems[1]}`:
                return <InvestorInfo data={investorData} />;
            case `#${tabItems[2]}`:
                return <StartupPortfolio investorData={investorData} />;
            default:
                return <InvestmentInfo />;
        }
    };
    if (Object.keys(investorData).length === 0) {
        return loading ? (
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <CircularLoader color="#000000" />
            </div>
        ) : (
            <section>
                <section className="d-flex align-items-center mb-3 p-5">
                    <img
                        src={left}
                        alt="left"
                        className="mr-2"
                        style={{ transform: "rotate(180deg)" }}
                    />
                    <p
                        className="bread-start"
                        role="button"
                        onClick={() => goBack()}
                    >
                        Go back
                    </p>
                </section>
                <EmptyState message="Unable to find investor" />
            </section>
        );
    }
    return (
        <div className="p-5" style={{ maxWidth: 2000 }}>
            <section className="d-flex align-items-center mb-3">
                <img
                    src={left}
                    alt="left"
                    className="mr-2"
                    style={{ transform: "rotate(180deg)" }}
                />
                <p
                    className="bread-start"
                    role="button"
                    onClick={() => push("/admin/users#Investor")}
                >
                    Go back
                </p>
            </section>
            <section className={`${styles.contact_card} row mx-0 p-5 mb-5`}>
                <div className="col-lg-6">
                    <article className="d-flex align-items-center space-out mb-2">
                        <img
                            src={
                                investorData?.userId?.avatar ??
                                `https://ui-avatars.com/api/?name=${investorData?.userId?.firstname} ${investorData?.userId?.lastname}`
                            }
                            alt="user"
                            className={styles.userDp}
                        />
                    </article>

                    <h4 className={styles.user_name}>
                        {investorData?.profile?.firstName
                            ? `${investorData?.profile?.firstName} ${investorData?.profile?.lastName}`
                            : `${investorData?.userId?.firstname} ${investorData?.userId?.lastname}`}
                    </h4>
                    <a
                        href={`mailto:${
                            investorData?.profile?.email
                                ? investorData?.profile?.email
                                : investorData?.userId?.email
                        }`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={`mb-4 d-block ${styles.text}`}
                    >
                        {investorData?.profile?.email
                            ? investorData?.profile?.email
                            : investorData?.userId?.email}
                    </a>

                    <section className="mb-3 d-flex align-items-center flex-wrap">
                        <div
                            className={`d-flex align-items-center space-out mb-2 ${styles.contact_det}`}
                        >
                            <img src={location} alt="location" />
                            <p className={styles.text}>
                                {" "}
                                {investorData?.profile?.address}{" "}
                            </p>
                        </div>

                        <div
                            className={`d-flex align-items-center space-out mb-2 ml-4 ${styles.contact_det}`}
                        >
                            <img src={web} alt="web" />
                            <a
                                href={
                                    investorData?.profile?.socialMedia?.website
                                        ? investorData?.profile?.socialMedia
                                              ?.website
                                        : null
                                }
                                className={styles.text}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                {investorData?.profile?.socialMedia?.website}
                            </a>
                        </div>
                    </section>

                    <p className={styles.text} style={{ color: "#828282" }}>
                        {investorData?.profile?.briefIntroduction}
                    </p>
                </div>

                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <section>
                        <article className="d-flex justify-content-end mb-2">
                            <a
                                href={
                                    investorData?.profile?.socialMedia?.twitter
                                        ? investorData?.profile?.socialMedia
                                              ?.twitter
                                        : null
                                }
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <img
                                    src={twitter}
                                    alt="twitter"
                                    className="mr-3"
                                />
                            </a>
                            <a
                                href={
                                    investorData?.profile?.socialMedia?.linkedIn
                                        ? investorData?.profile?.socialMedia
                                              ?.linkedIn
                                        : null
                                }
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <img src={linkedIn} alt="linked in" />
                            </a>
                        </article>
                        <a
                            href={
                                investorData?.profile?.socialMedia?.website
                                    ? investorData?.profile?.socialMedia
                                          ?.website
                                    : null
                            }
                            className={`mb-4 d-block text-right ${styles.text}`}
                            style={{ color: "#828282" }}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            {investorData?.profile?.socialMedia?.website || "-"}
                        </a>
                        <a
                            href={
                                investorData?.profile?.mobile_number
                                    ? investorData?.profile?.mobile_number
                                    : investorData?.profile?.phone
                            }
                            className={`mb-4 d-block text-right ${styles.text}`}
                            style={{ color: "#828282" }}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            {investorData?.profile?.mobile_number
                                ? investorData?.profile?.mobile_number
                                : investorData?.userId?.phone}
                        </a>
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
