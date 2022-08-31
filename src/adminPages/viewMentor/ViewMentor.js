import React, { useMemo, useEffect, useState } from "react";
import styles from "./viewMentor.module.css";
import userPic from "../../assets/images/sampleUser.png";
import stars from "../../assets/icons/Stars.svg";
import twitter from "../../assets/images/profileTwitter.svg";
import linkedIn from "../../assets/images/profileLinkedIn.svg";
import location from "../../assets/icons/locationSm.svg";
import phone from "../../assets/icons/phoneSm.svg";
import web from "../../assets/icons/webSm.svg";
import left from "../../assets/icons/chervonLeft.svg";
import { Modal, Tabs } from "../../components";
import { WorkExp, AreaOfInterest, Consult, Availability } from "./components";
import { useHistory, useParams } from "react-router-dom";
import { RatingCard } from "../../adminComponents";
import { applicationManagement, getOrCreateProfile } from "../../services";
import { CircularLoader } from "../../mentorComponents/CircluarLoader";
import { EmptyState } from "../../mentorComponents";

export const ViewMentor = () => {
    const tabItems = useMemo(
        () => [
            "Work Experience",
            "Area of Interest/Skills",
            "Consulting Offerings",
            "Availability",
        ],
        []
    );

    const [mentor, setMentor] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    const getMentor = async () => {
        setLoading(true);
        try {
            const res = await getOrCreateProfile({
                userId: id,
                userType: "mentor",
            });

            if (res?.success) {
                setMentor(res?.data?.mentor_response);
            }

            console.log("res", res);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMentor();
    }, []);

    const {
        location: { hash },
        goBack,
    } = useHistory();
    const renderComponent = () => {
        switch (hash) {
            case `#${tabItems[0]}`:
                return <WorkExp data={mentor?.workExperience} />;
            case `#${tabItems[1]}`:
                return <AreaOfInterest data={mentor?.areaOfInterest} />;
            case `#${tabItems[2]}`:
                return <Consult data={mentor?.consultantOffering} />;
            case `#${tabItems[3]}`:
                return <Availability data={mentor?.assistantInfo} />;
            default:
                return <WorkExp />;
        }
    };
    if (Object.keys(mentor).length === 0) {
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
                <EmptyState message="Unable to find mentor" />
            </section>
        );
    }
    return (
        <div className="p-5" style={{ maxWidth: 2000 }}>
            <Modal id="viewRating" title="View Ratings" width={568}>
                <RatingCard />
            </Modal>
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
                    <article className="d-flex align-items-center space-out mb-2">
                        <img
                            src={mentor?.personalDetail?.logo ?? userPic}
                            alt="user"
                            className={styles.userDp}
                        />
                        <img src={stars} alt="stars" className="ml-2" />
                        <p className={`ml-2 mb-0 ${styles.rate}`}>4.5</p>
                        <p
                            className="view-link mb-0"
                            role="button"
                            data-target="#viewRating"
                            data-toggle="modal"
                        >
                            View rating
                        </p>
                    </article>

                    <h4
                        className={styles.user_name}
                    >{`${mentor?.personalDetail?.firstname} ${mentor?.personalDetail?.lastname}`}</h4>
                    <a
                        href={`https://${mentor?.personalDetail?.email}`}
                        className={`mb-4 d-block ${styles.text}`}
                    >
                        {mentor?.email}
                    </a>

                    <p className={styles.text} style={{ color: "#828282" }}>
                        {mentor?.consultantOffering?.serviceDescription || "-"}
                    </p>
                </div>

                <div className="col-lg-6 d-flex flex-column justify-content-between">
                    <section>
                        <article className="d-flex justify-content-end mb-2">
                            <a
                                href={mentor?.personalDetail?.twitter}
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
                                href={mentor?.personalDetail?.linkedin}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <img src={linkedIn} alt="linkedin" />
                            </a>
                        </article>
                        <a
                            href={mentor?.personalDetail?.website}
                            className={`mb-4 d-block text-right ${styles.text}`}
                            style={{ color: "#828282" }}
                        >
                            {mentor?.personalDetail?.website}
                        </a>
                    </section>

                    <section>
                        <div
                            className={`d-flex align-items-center justify-content-end space-out mb-2 ${styles.contact_det}`}
                        >
                            <img src={location} alt="location" />
                            <p className={styles.text}>
                                {`${mentor?.personalDetail?.city || "-"} ${
                                    mentor?.personalDetail?.country
                                }`}
                            </p>
                        </div>

                        <div
                            className={`d-flex align-items-center justify-content-end space-out mb-2 ${styles.contact_det}`}
                        >
                            <img
                                src={web}
                                alt={mentor?.personalDetail?.website}
                            />
                            <a
                                href={mentor?.personalDetail?.website}
                                className={styles.text}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                {mentor?.personalDetail?.website || "-"}
                            </a>
                        </div>

                        <div
                            className={`d-flex align-items-center justify-content-end space-out ${styles.contact_det}`}
                        >
                            <img src={phone} alt="phone" />
                            <a
                                href={`tel:${mentor?.personalDetail?.mobilenumber}`}
                                target="_blank"
                                className={styles.text}
                                rel="noreferrer noopener"
                            >
                                {mentor?.personalDetail?.mobilenumber}
                            </a>
                        </div>
                    </section>
                </div>
            </section>

            <section className="mb-3">
                <Tabs tabItems={tabItems} />
            </section>

            <section>{renderComponent()}</section>
        </div>
    );
};
