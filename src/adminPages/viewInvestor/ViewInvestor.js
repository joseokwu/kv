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
import { applicationManagement } from "../../services";
import { CircularLoader } from "../../mentorComponents/CircluarLoader";

export const ViewInvestor = () => {
    const { goBack, push } = useHistory();
    const [partnerData, setPartnerData] = useState({});
    const tabItems = useMemo(
        () => ["Investment Info", "Investor Info", "Start-up Portfolio"],
        []
    );

    const {
        location: { hash },
    } = useHistory();

    const { id } = useParams();

    useEffect(() => {
        const getMentor = async () => {
            const res = await applicationManagement({
                userId: id,
                action: "get_investor",
            });
            setPartnerData(res?.data);
            console.log("res", res?.data);
        };
        getMentor();
    }, [id]);

    const renderComponent = () => {
        switch (hash) {
            case `#${tabItems[0]}`:
                return (
                    <InvestmentInfo
                        data={partnerData?.personalDetail}
                        info={partnerData?.investorApproach}
                    />
                );
            case `#${tabItems[1]}`:
                return <InvestorInfo data={partnerData} />;
            case `#${tabItems[2]}`:
                return <StartupPortfolio partnerData={partnerData} />;
            default:
                return <InvestmentInfo />;
        }
    };
    if (Object.keys(partnerData).length === 0) {
        return (
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
                        {partnerData?.profile?.avatar && (
                            <img
                                src={partnerData?.profile?.avatar}
                                alt="user"
                                className={styles.userDp}
                            />
                        )}
                    </article>

                    <h4 className={styles.user_name}>
                        {" "}
                        {partnerData?.firstname &&
                            partnerData?.firstname +
                                " " +
                                partnerData?.lastname}{" "}
                    </h4>
                    <a href="#." className={`mb-4 d-block ${styles.text}`}>
                        {partnerData?.email}
                    </a>

                    <section className="mb-3 d-flex align-items-center flex-wrap">
                        <div
                            className={`d-flex align-items-center space-out mb-2 ${styles.contact_det}`}
                        >
                            <img src={location} alt="location" />
                            <p className={styles.text}>
                                {" "}
                                {partnerData?.profile?.address}{" "}
                            </p>
                        </div>

                        <div
                            className={`d-flex align-items-center space-out mb-2 ml-4 ${styles.contact_det}`}
                        >
                            <img src={web} alt="web" />
                            <a
                                href={
                                    partnerData?.profile?.socialMedia?.website
                                }
                                className={styles.text}
                            >
                                {partnerData?.profile?.socialMedia?.website}
                            </a>
                        </div>
                    </section>

                    <p className={styles.text} style={{ color: "#828282" }}>
                        {partnerData?.profile?.briefIntroduction}
                    </p>
                </div>

                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <section>
                        <article className="d-flex justify-content-end mb-2">
                            <img src={twitter} alt="twitter" className="mr-3" />
                            <img src={linkedIn} alt="linked in" />
                        </article>
                        <a
                            href={partnerData?.profile?.socialMedia?.website}
                            className={`mb-4 d-block text-right ${styles.text}`}
                            style={{ color: "#828282" }}
                        >
                            {partnerData?.profile?.socialMedia?.website}
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
