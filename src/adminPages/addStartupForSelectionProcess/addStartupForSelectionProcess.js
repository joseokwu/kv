import React from "react";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "../../components";
import left from "../../assets/icons/chervonLeft.svg";
import searchIcon from "../../assets/icons/searchSm.svg";
import closeIcon from "../../assets/icons/closesm.svg";
import teamMember from "../../assets/images/sampleTeamMember.png";
import styles from "./addStartupForSelectionProcess.module.css";

export const AddStartupForSelectionProcess = () => {
    const { goBack } = useHistory();

    return (
        <div className="p-5">
            <section className={styles.assignTeam}>
                <h3>Add Startups</h3>

                {/* <div
                    className="d-flex align-items-end w-100 mb-4"
                    style={{ columnGap: "1.7rem" }}
                >
                    <TextField
                        label="Assign KV members"
                        placeholder="Enter email address"
                        className="max_fill"
                    />
                    <Button label="Assign" variant="trans" />
                </div> */}

                <div className="mb-4">
                    <p className="mb-3">
                        Select startups that will be evaluated for the
                        acceleration program
                    </p>
                    <section className="d-flex flex-row align-items-start gap-3 w-100">
                        <section className="search-input mb-3 w-100">
                            <img src={searchIcon} alt="search" />
                            <input
                                type="search"
                                placeholder="Search connection list"
                            />
                        </section>
                        <Button label="Assign" variant="trans" />
                    </section>
                </div>
                {Array.from("connect").map((connect, i) => (
                    <ConnectionItem key={`connect-${i}`} />
                ))}

                {/* <div
                    className="d-flex align-items-center justify-content-end mt-5"
                    style={{ columnGap: "1rem" }}
                >
                    <Button label="Back" variant="trans" />
                    <Button label="Continue" />
                </div> */}
            </section>
        </div>
    );
};

const ConnectionItem = () => {
    return (
        <div
            className={`d-flex align-items-center justify-content-between mb-3 ${styles.connectionItem}`}
        >
            <section className="d-flex align-items-center space-out">
                <img
                    src={teamMember}
                    alt="team member"
                    className={styles.teamMember}
                />
                <p>Kate Mcbeth Joan</p>
            </section>
            <img src={closeIcon} alt="close" role="button" />
        </div>
    );
};
