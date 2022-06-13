import React, { useEffect } from "react";
import dots from "../../../assets/icons/dot.svg";
import { Modal, Tag } from "../../../components";
import { months, formatTime, newFormatTime } from "../../../utils/helpers";
import host from "../../../assets/images/sampleTeamMember.png";
import { ViewProgramDetails } from "./ViewProgramDetails";
import styles from "../programs.module.css";
import { ViewAssignment } from "../../assignments/components/ViewAssignment";

export const ProgramCard = ({ data = {}, id = 0 }) => {
    useEffect(() => {
        console.log(data);
    }, []);
    return (
        <div className={styles.programCard}>
            <Modal id={`program-${id}`} width={768}>
                <ViewProgramDetails data={data} />
            </Modal>
            <Modal id={`assignment-${id}`}>
                <ViewAssignment />
            </Modal>
            <section className="d-flex align-items-center justify-content-between">
                <h4>{data?.topic}</h4>
                <ProgramDropdown id={id} />
            </section>
            <section className="d-flex align-items-center justify-content-between mb-3">
                <div
                    className="d-flex align-items-center"
                    style={{ columnGap: "2rem" }}
                >
                    <Tag name="Fintech" />
                    <p className={styles[data?.status]}>
                        {/* Status: {data?.status} */}
                    </p>
                </div>

                {data?.status === "declined" && (
                    <p className="view-link">Assign new host</p>
                )}
            </section>

            <section className="border-bottom mb-4 pb-3">
                <p className={styles.desc}>{data?.description}</p>
            </section>

            <section className="d-flex align-items-center justify-content-between mb-4">
                <div className={`d-flex align-items-center ${styles?.date}`}>
                    <h5 className="mb-0">
                        {new Date(data?.startTime).getDate()}
                    </h5>
                    <p>{months[new Date(data?.startTime).getMonth()]}</p>
                </div>

                <div style={{ color: "#525151", fontSize: 14 }}>
                    {newFormatTime(data?.startTime)} -{" "}
                    {newFormatTime(data?.endTime)}
                </div>
            </section>

            <section
                className={`d-flex align-items-center justify-content-between ${styles.host}`}
            >
                <p style={{ color: "#6466AA" }}>Host:</p>

                <div className="d-flex align-items-center space-out">
                    <img src={data?.guest.logo} alt="host" />
                    <p>{data?.guest.name}</p>
                </div>
            </section>
        </div>
    );
};

const ProgramDropdown = ({ id }) => {
    return (
        <div className="dropdown mb-2">
            <div id="dropdownMenu2" data-toggle="dropdown" role="button">
                <img src={dots} alt="dots" />
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button
                    className="dropdown-item"
                    type="button"
                    data-target={`#program-${id}`}
                    data-toggle="modal"
                >
                    Program Details
                </button>
                <button
                    className="dropdown-item"
                    type="button"
                    data-target={`#assignment-${id}`}
                    data-toggle="modal"
                >
                    Assignment Details
                </button>
                <button
                    className="dropdown-item"
                    type="button"
                    style={{ color: "#E31937" }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
