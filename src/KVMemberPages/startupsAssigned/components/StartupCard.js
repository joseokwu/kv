import React from "react";
import dots from "../../../assets/icons/dot.svg";
import { Modal, Tag } from "../../../components";
import { months, formatTime } from "../../../utils/helpers";
import { ReadMore } from "../../../mentorComponents";
import { AdminButton } from "../../../components";
import host from "../../../assets/images/sampleTeamMember.png";
import { ViewStartupDetails } from "./ViewStartupDetails";
import styles from "../programs.module.css";
import { industry } from "../../../constants/domiData";
// import { ViewAssignment } from "../../assignments/components/ViewAssignment";

export const StartupCard = ({ data = {}, id = 0 }) => {
    const statusTags = {
        Pending: "#D3C013",
        "In-Progress": "#828282",
        Complete: "#0F9214",
    };

    return (
        <div className={styles.programCard}>
            <Modal id={`startup-${id}`} width={768} withHeader={false}>
                <ViewStartupDetails data={data} />
            </Modal>
            {/* <Modal id={`assignment-${id}`}>
                <ViewAssignment />
            </Modal> */}
            <div className="h-4 mb-2">
                <img src={data?.logo} />
            </div>
            <section className="d-flex align-items-center justify-content-between mb-2">
                <h4>{data?.name}</h4>
                <Tag name={data?.status} color={statusTags[data?.status]} />
            </section>
            <section className="d-flex align-items-center flex-wrap gap-3 mb-3">
                {data?.industry.map((item) => (
                    <Tag name={item} />
                ))}
            </section>

            <section className="border-bottom mb-3 pb-3">
                <p className={styles.desc}>
                    <ReadMore>{data?.description}</ReadMore>
                </p>
            </section>

            <section className="d-flex align-items-center justify-content-between mb-3">
                {new Date() > new Date(data?.eventDate) ? (
                    data?.evaluated ? (
                        <AdminButton
                            label="Evaluate"
                            variant="secondary"
                            disabled={data?.status === "Complete"}
                            data-toggle="modal"
                            data-target={`#startup-${id}`}
                        />
                    ) : (
                        <AdminButton label="View Evaluation" />
                    )
                ) : (
                    "Evaluation can only be done after the event."
                )}
            </section>
        </div>
    );
};
