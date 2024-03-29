import React from "react";
import { Table } from "../../../adminComponents";
import { formatDate } from "../../../utils/helpers";
import apple from "../../../assets/images/apple.svg";
import { Tag } from "../../../components";
import { useHistory } from "react-router-dom";
import { EmptyState } from "../../../mentorComponents";

export const CohortTable = ({ cohortData = [] }) => {
    const header = [
        { title: "#Batch ID", accessor: "id" },
        { title: "Start Date", accessor: "startDate" },
        { title: "End Date", accessor: "endDate" },
        { title: "Title", accessor: "title" },
        { title: "Startups", accessor: "startups" },
        { title: "Status", accessor: "status" },
        { title: "Action", accessor: "action" },
    ];

    const { push } = useHistory();

    const selectionProcessData = [
        {
            id: "0001",
            startDate: formatDate(new Date(2021, 7, 13)),
            endDate: formatDate(new Date(2021, 8, 13)),
            title: "January Cohort",
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
            status: (
                <div className="d-flex space-out flex-wrap">
                    <Tag name="Completed" color="#18A615" />
                </div>
            ),
            action: (
                <div className="d-flex align-items-center space-out">
                    <p
                        className="view-link"
                        role="button"
                        onClick={() =>
                            push(
                                `/admin/selection_process/cohort/January Cohort/0001`
                            )
                        }
                    >
                        View
                    </p>
                </div>
            ),
        },
        {
            id: "0002",
            startDate: formatDate(new Date(2021, 7, 13)),
            endDate: formatDate(new Date(2021, 8, 13)),
            title: "February Cohort",
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
            status: (
                <div className="d-flex space-out flex-wrap">
                    <Tag name="Active" />
                </div>
            ),
            action: (
                <div className="d-flex align-items-center space-out">
                    <p
                        className="view-link"
                        role="button"
                        onClick={() =>
                            push(
                                `/admin/selection_process/cohort/February Cohort/0002`
                            )
                        }
                    >
                        View
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div>
            {cohortData.length === 0 ? (
                <EmptyState message="No cohorts created yet" />
            ) : (
                <Table
                    headers={header}
                    data={[
                        ...selectionProcessData,
                        ...selectionProcessData,
                        ...selectionProcessData,
                    ]}
                />
            )}
        </div>
    );
};
