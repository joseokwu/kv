import React from "react";
import { Link, useHistory } from "react-router-dom";
import { DeleteModal, Table, ViewSession } from "../../adminComponents";
import { Modal, Tabs, Tag } from "../../components";
import apple from "../../assets/images/apple.svg";
import userPic from "../../assets/images/sampleUser.png";
import left from "../../assets/icons/chervonLeft.svg";
import { formatDate, formatTime } from "../../utils/helpers";
import styles from "../userManagement/user.module.css";
import { SkeletonLoader } from "../../components";

export const AllSessions = () => {
    const { push } = useHistory();
    // const [fetched, setFetched] = useState(false);

    const sessionHeaders = [
        { title: "Startups", accessor: "startups" },
        { title: "Mentor", accessor: "mentor" },
        { title: "Data and time", accessor: "duration" },
        { title: "Status", accessor: "status" },
        { title: "Actions", accessor: "actions" },
    ];

    const sessionData = [
        {
            mentor: (
                <div className="d-flex align-items-center space-out">
                    <img src={userPic} alt="user" className={styles.userPic} />
                    <p className="mb-0">Kate Mcbeth Joan</p>
                </div>
            ),
            status: (
                <div className="d-flex space-out flex-wrap">
                    <Tag name="Completed" color="#18A615" />
                </div>
            ),
            startups: (
                <section className="event_people">
                    {Array.from("fiver").map((item, i) => {
                        return (
                            <img
                                src={apple}
                                alt="doc"
                                key={`over-${i}`}
                                style={{ position: "relative", left: i * -5 }}
                            />
                        );
                    })}
                </section>
            ),
            duration: (
                <div>
                    <p>{formatDate(new Date(2022, 8, 13))}</p>
                    <p>
                        {formatTime(new Date(2022, 8, 13, 10, 0))}-
                        {formatTime(new Date(2022, 8, 13, 14, 0))}
                    </p>
                </div>
            ),
            actions: (
                <div className="d-flex align-items-center space-out">
                    <p
                        className="view-link"
                        data-target="#viewSession"
                        data-toggle="modal"
                        role="button"
                    >
                        View
                    </p>
                    <p
                        role="button"
                        data-target="#deleteSession"
                        data-toggle="modal"
                        className="delete-link"
                    >
                        Delete
                    </p>
                </div>
            ),
        },
        {
            mentor: (
                <div className="d-flex align-items-center space-out">
                    <img src={userPic} alt="user" className={styles.userPic} />
                    <p className="mb-0">Kate Mcbeth Joan</p>
                </div>
            ),
            status: (
                <div className="d-flex space-out flex-wrap">
                    <Tag name="Rescheduled" color="#00ADEF" />
                </div>
            ),
            startups: (
                <section className="event_people">
                    {Array.from("fiver").map((item, i) => {
                        return (
                            <img
                                src={apple}
                                alt="doc"
                                key={`over-${i}`}
                                style={{ position: "relative", left: i * -5 }}
                            />
                        );
                    })}
                </section>
            ),
            duration: (
                <div>
                    <p>{formatDate(new Date(2022, 8, 13))}</p>
                    <p>
                        {formatTime(new Date(2022, 8, 13, 10, 0))}-
                        {formatTime(new Date(2022, 8, 13, 14, 0))}
                    </p>
                </div>
            ),
            actions: (
                <div className="d-flex align-items-center space-out">
                    <p
                        className="view-link"
                        data-target="#viewSession"
                        data-toggle="modal"
                        role="button"
                    >
                        View
                    </p>
                    <p
                        role="button"
                        data-target="#deleteSession"
                        data-toggle="modal"
                        className="delete-link"
                    >
                        Delete
                    </p>
                </div>
            ),
        },
        {
            mentor: (
                <div className="d-flex align-items-center space-out">
                    <img src={userPic} alt="user" className={styles.userPic} />
                    <p className="mb-0">Kate Mcbeth Joan</p>
                </div>
            ),
            status: (
                <div className="d-flex space-out flex-wrap">
                    <Tag name="Active" color="#2E3192" />
                </div>
            ),
            startups: (
                <section className="event_people">
                    {Array.from("fiver").map((item, i) => {
                        return (
                            <img
                                src={apple}
                                alt="doc"
                                key={`over-${i}`}
                                style={{ position: "relative", left: i * -5 }}
                            />
                        );
                    })}
                </section>
            ),
            duration: (
                <div>
                    <p>{formatDate(new Date())}</p>
                    <p>
                        {formatTime(new Date(2022, 1, 13, 10, 0))}-
                        {formatTime(new Date(2022, 1, 13, 18, 0))}
                    </p>
                </div>
            ),
            actions: (
                <div className="d-flex align-items-center space-out">
                    <p
                        className="view-link"
                        data-target="#viewSession"
                        data-toggle="modal"
                        role="button"
                    >
                        View
                    </p>
                    <p
                        role="button"
                        data-target="#deleteSession"
                        data-toggle="modal"
                        className="delete-link"
                    >
                        Delete
                    </p>
                </div>
            ),
        },
    ];

    const testData = []
        .concat(sessionData)
        .concat(sessionData)
        .concat(sessionData)
        .concat(sessionData)
        .concat(sessionData);
    return (
        <div className="p-5" style={{ maxWidth: 2000 }}>
            <DeleteModal
                id="deleteSession"
                title="Delete Session"
                desc="Are you sure you want to delete session with Kate Mcbeth Joan"
            />
            <Modal id="viewSession" withHeader={false} width={723}>
                <ViewSession />
            </Modal>
            <section className="d-flex align-items-center mb-3">
                <p
                    className="bread-start"
                    role="button"
                    onClick={() => push("/admin/users#Mentor")}
                >
                    User Management
                </p>
                <img src={left} alt="left" className="mx-3" />
                <p className="bread-end">Sessions</p>
            </section>
            <section className="d-flex align-items-center justify-content-between white-strip mb-3">
                <h2 className="mb-0">Sessions (20)</h2>

                <div
                    style={{ columnGap: 10 }}
                    className="d-flex align-items-center justify-content-end"
                >
                    <Tabs
                        tabItems={["All", "Active", "Completed", "Rescheduled"]}
                        className="justify-content-end"
                        style={{ columnGap: "1.5rem" }}
                    />
                </div>
            </section>

            <section>
                <Table headers={sessionHeaders} data={testData} />
            </section>
            <div className="d-flex align-item-center pt-4 justify-content-end">
                <p className="page-num">1 of 26</p>
                <img
                    src={left}
                    alt="left"
                    className="mx-3"
                    style={{ transform: "rotate(180deg)" }}
                    role="button"
                />
                <img src={left} alt="left" className="mx-3" role="button" />
            </div>
        </div>
    );
};
