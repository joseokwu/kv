import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Table } from "../../../adminComponents";
import apple from "../../../assets/images/apple.svg";
import { Tag } from "../../../components";
import { formatDate } from "../../../utils/helpers";
import left from "../../../assets/icons/chervonLeft.svg";
import styles from "../applicationMgt.module.css";
import { EmptyState } from "../../../mentorComponents";
import { PaginationData } from "../../../components";

export const AcceptedTable = ({ accepted }) => {
    const [currentPage, setCurrentPage] = useState(1);
    let limit = 5;
    let visible = [];

    if (accepted?.startups) {
        if (accepted?.startups.length < limit) visible = accepted?.startups;
        else
            visible = accepted?.startups.slice(
                limit * (currentPage - 1),
                limit * (currentPage - 1) + limit
            );
    }

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

    const data = useMemo(
        () =>
            visible?.map((item, i) => {
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

                    date: formatDate(new Date(item?.updatedAt)),

                    status: <Tag name="Accepted" color="#235405" />,

                    action: (
                        <Link
                            to={`/admin/application_mgt/accepted/${item?.userId}`}
                            className="view-link"
                        >
                            View
                        </Link>
                    ),
                };
            }),
        []
    );

    if (accepted?.startups?.length === 0) {
        return <EmptyState message="No  Startup has been Accepted" />;
    }
    return (
        <div>
            <div>
                <Table headers={header} data={data} />
                <PaginationData
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    data={accepted?.startups || []}
                    limit={limit}
                />
                {/* Pagination goes here */}
            </div>
        </div>
    );
};
