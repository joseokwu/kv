import React from "react";
import dots from "../../../assets/icons/dot.svg";
import { Modal, Tag } from "../../../components";
import { months, formatTime, newFormatTime } from "../../../utils/helpers";
import doc from "../../../assets/images/doc.svg";
import styles from "../assignment.module.css";
import { ViewAssignment } from "./ViewAssignment";
import { useHistory } from "react-router-dom";

export const AssignmentCard = ({ data = {}, id = 0 }) => {
    return (
        <div className={styles.programCard}>
            <Modal id={`assignment-${id}`}>
                <ViewAssignment />
            </Modal>
            <section className="d-flex align-items-center justify-content-between mb-3">
                <h4 data-target={`#assignment-${id}`} data-toggle="modal">
                    {data?.topic}
                </h4>
                <AssignDropdown id={id} />
            </section>

            <section className="border-bottom mb-4 pb-3">
                <p className={styles.desc}>{data?.description}</p>
            </section>

            <section className="d-flex align-items-center justify-content-between mb-4">
                <div className={`d-flex align-items-center ${styles?.date}`}>
                    <h5 className="mb-0">
                        {new Date(data?.deadlineDay).getDate()}
                    </h5>
                    <p>{months[new Date(data?.deadlineDay).getMonth()]}</p>
                </div>

                <div style={{ color: "#525151", fontSize: 14 }}>
                    {newFormatTime(data?.deadlineTime)}
                </div>
            </section>

            <section
                className={`d-flex align-items-center justify-content-between ${styles.host}`}
            >
                <p style={{ color: "#6466AA" }}>Assigned to:</p>

                <div className="event_people">
                    {data?.assignees.map((assignee) => (
                        <img src={assignee?.logo} alt="doc" />
                    ))}
                </div>
            </section>
        </div>
    );
};

const AssignDropdown = ({ id = 0 }) => {
    const { push } = useHistory();
    return (
        <div className="dropdown mb-2">
            <div id="dropdownMenu2" data-toggle="dropdown" role="button">
                <img src={dots} alt="dots" />
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
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
                    onClick={() => push(`/admin/program/response/${id}`)}
                >
                    Responses
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
