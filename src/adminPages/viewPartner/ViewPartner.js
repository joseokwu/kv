import React, { useMemo, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import left from "../../assets/icons/chervonLeft.svg";
import twitter from "../../assets/images/profileTwitter.svg";
import linkedIn from "../../assets/images/profileLinkedIn.svg";
import location from "../../assets/icons/locationSm.svg";
import web from "../../assets/icons/webSm.svg";
import phone from "../../assets/icons/phoneSm.svg";
import digitalLogo from "../../assets/icons/digitalOceanLogo.png";
import styles from "./viewPartner.module.css";
import { Tabs } from "../../components";
import { AppliedStartup, Offerings } from "./components";
import { applicationManagement, getOrCreateProfile } from "../../services";
import { CircularLoader } from "../../mentorComponents/CircluarLoader";
import { EmptyState } from "../../mentorComponents";

export const ViewPartner = () => {
    const {
        location: { hash },
        goBack,
    } = useHistory();

    const [partner, setPartner] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const getPartner = async () => {
        setLoading(true);
        try {
            const res = await getOrCreateProfile({
                userId: id,
                userType: "boosterpartner",
            });

            if (res?.success) {
                setPartner(res?.data?.data);
            }

            console.log("res", res);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPartner();
    }, []);

    const tabItems = useMemo(() => ["Our Offerings", "Start-up Applied"], []);

    const renderComponent = () => {
        switch (hash) {
            case `#${tabItems[0]}`:
                return <Offerings partner={partner} />;
            case `#${tabItems[1]}`:
                return <AppliedStartup partner={partner} />;
            default:
                return <Offerings partner={partner} />;
        }
    };

    if (Object.keys(partner).length === 0) {
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
                <EmptyState message="Unable to find Booster Partner" />
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
                    onClick={() => goBack()}
                >
                    Go back
                </p>
            </section>

            <section className={`${styles.contact_card} row mx-0 p-5 mb-5`}>
                <div className="col-lg-6">
                    <div className="w-100">
                        <article className="d-flex align-items-center space-out mb-2 w-100">
                            <img
                                src={partner?.userId?.avatar || digitalLogo}
                                alt="user"
                                className={styles.userDp}
                            />
                        </article>

                        <h4 className={styles.user_name}>
                            {partner?.companyName}
                        </h4>
                        <div
                            className={`d-flex align-items-center mb-3 ${styles.partnerContact}`}
                        >
                            <p>CONTACT : {partner?.coordinatorName}</p>
                            <p className="d-flex align-items-center">
                                <span></span>
                                {partner?.designation}
                            </p>
                            <p>Category : {partner?.categories}</p>
                        </div>

                        <section className="mb-3 d-flex align-items-center flex-wrap">
                            <div
                                className={`d-flex align-items-center space-out mb-2`}
                            >
                                <img src={location} alt="location" />
                                <p className={styles.text}>
                                    {`${partner?.state}, ${partner?.country}`}
                                </p>
                            </div>

                            <div
                                className={`d-flex align-items-center space-out mb-2 ml-4`}
                            >
                                <img src={phone} alt="phone" />
                                <a href="" className={styles.text}>
                                    {partner?.phoneNumber}
                                </a>
                            </div>

                            <div
                                className={`d-flex align-items-center space-out mb-2 ml-4`}
                            >
                                <img src={web} alt="web" />
                                <a href="" className={styles.text}>
                                    {partner?.website}
                                </a>
                            </div>
                        </section>

                        <p className={styles.text} style={{ color: "#828282" }}>
                            {partner?.companyDescription}
                        </p>
                    </div>
                </div>

                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <section>
                        <article className="d-flex justify-content-end mb-2">
                            <a
                                href={partner?.twitter}
                                rel="no-referrer no-opener"
                                target="_blank"
                            >
                                <img
                                    src={twitter}
                                    alt="twitter"
                                    className="mr-3"
                                />
                            </a>
                            <a
                                href={partner?.linkedin}
                                rel="no-referrer no-opener"
                                target="_blank"
                            >
                                <img src={linkedIn} alt="linked in" />
                            </a>
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
