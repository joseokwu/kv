import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "../../../adminComponents";
import { Tag } from "../../../components";
import { formatDate } from "../../../utils/helpers";
import left from "../../../assets/icons/chervonLeft.svg";
import styles from "../applicationMgt.module.css";
import { EmptyState } from "./../../../mentorComponents/emptyState/EmptyState";
import { PaginationData } from "../../../components";

export const PendingTable = ({ applications, currentPage, setCurrentPage }) => {
    let limit = 5;

    const header = useMemo(
        () => [
            {
                title: "Startup",
                accessor: "startup",
            },
            {
                title: "Application Date",
                accessor: "date",
            },
            {
                title: "Status",
                accessor: "status",
            },
            {
                title: "Action",
                accessor: "action",
            },
        ],
        []
    );

    const applicationData = useMemo(
        () =>
            applications?.startups?.map((item, i) => {
                return {
                    startup: (
                        <div className="d-flex align-items-center space-out">
                            <img
                                src={item?.startUpProfile?.logo}
                                alt="user"
                                className={styles.userPic}
                            />
                            <p className="mb-0">
                                {item?.startUpProfile?.acceleratorName}
                            </p>
                        </div>
                    ),

                    date: formatDate(
                        new Date(item?.startUpProfile?.yearFounded)
                    ),

                    status: <Tag name="Pending" color="#2E3192" />,

                    action: (
                        <Link
                            to={`/admin/application_mgt/pending/${item?.userId}`}
                            className="view-link"
                        >
                            View
                        </Link>
                    ),
                };
            }),
        []
    );

    if (applications?.startups?.length === 0) {
        return <EmptyState message="No Application yet." />;
    }

    return (
        <div>
            <Table headers={header} data={applicationData} />
            <PaginationData
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                data={applications?.startups || []}
                limit={limit}
                total={applications?.metadata?.total}
            />
            {/* Pagination goes here */}
        </div>
    );
};
