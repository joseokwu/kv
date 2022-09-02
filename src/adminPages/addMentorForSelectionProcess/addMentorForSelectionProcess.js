import React from "react";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "../../components";
import left from "../../assets/icons/chervonLeft.svg";
import searchIcon from "../../assets/icons/searchSm.svg";
import closeIcon from "../../assets/icons/closesm.svg";
import teamMember from "../../assets/images/sampleTeamMember.png";
import styles from "./addMentorForSelectionProcess.module.css";

export const AddMentorForSelectionProcess = () => {
    const { goBack } = useHistory();

    return (
        <div className="p-5">
            <section className={styles.assignTeam}>
                <h3>Invite Mentors</h3>

                <div
                    className="d-flex align-items-end w-100 mb-4"
                    style={{ columnGap: "1.7rem" }}
                >
                    <TextField
                        label="Invite Mentors"
                        placeholder="Enter email address"
                        className="max_fill"
                    />
                    <Button label="Invite" variant="trans" />
                </div>

                <div className="mb-4">
                    <p className="mb-3">Mentors</p>
                    <section className="search-input mb-3">
                        <img src={searchIcon} alt="search" />
                        <input
                            type="search"
                            placeholder="Search connection list"
                        />
                    </section>
                </div>
                {Array.from("connect").map((connect, i) => (
                    <ConnectionItem key={`connect-${i}`} />
                ))}

                <div
                    className="d-flex align-items-center justify-content-end mt-5"
                    style={{ columnGap: "1rem" }}
                >
                    <Button label="Back" variant="trans" />
                    <Button label="Continue" />
                </div>
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
