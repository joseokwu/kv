import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Tabs } from "../../components";
import left from "../../assets/icons/chervonLeft.svg";
import styles from "./viewKVMemberProcess.module.css";
import { SelectionTeam } from "./components/SelectionTeam";
import { Startups } from "./components/Startups";

export const ViewKVMemberSelectionProcess = () => {
    const tabs = ["Startups", "Selection Team"];

    const {
        location: { hash, pathname },
        push,
        goBack,
    } = useHistory();

    const isMentor = pathname.includes("mentors");

    const startups = [
        { status: "evaluated" },
        { status: "pending" },
        { status: "pending" },
        { status: "evaluated" },
        { status: "pending" },
        { status: "evaluated" },
        { status: "evaluated" },
        { status: "pending" },
        { status: "pending" },
    ];

    const renderComp = () => {
        switch (hash) {
            case `#${tabs[0]}`:
                return <Startups data={startups} />;
            case `#${tabs[1]}`:
                return <SelectionTeam />;
            default:
                return <Startups data={startups} />;
        }
    };

    return (
        <div className="p-5">
            <section
                className="d-flex align-items-center mb-3"
                onClick={() => goBack()}
                role="button"
                style={{ width: "fit-content" }}
            >
                <img
                    src={left}
                    alt="left"
                    className="mr-2"
                    style={{ transform: "rotate(180deg)" }}
                />
                <p className="blue-title">Selection Process</p>
            </section>
            <section className="d-flex align-items-center justify-content-between mb-4">
                <Tabs tabItems={tabs} />
                {hash === `#${tabs[1]}` && !isMentor && (
                    <Button
                        label="Add Member"
                        variant="trans"
                        onClick={() =>
                            push("/admin/selection_process/kv_add_member/0001")
                        }
                    />
                )}
                <Button
                    label="Create New Criteria"
                    variant="secondary"
                    onClick={() =>
                        push("/admin/selection_process/new-criteria-intro")
                    }
                />
            </section>
            <section className="mb-4">
                <p className={styles.pageSubtitle}>
                    Evaluation /{" "}
                    {isMentor ? "Mentors Evaluation" : "KV Members Evaluation"}
                </p>
            </section>
            <section>{renderComp()}</section>
        </div>
    );
};
