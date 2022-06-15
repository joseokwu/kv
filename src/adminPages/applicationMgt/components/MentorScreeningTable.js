import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Table } from "../../../adminComponents";
import apple from "../../../assets/images/apple.svg";
import { Tag } from "../../../components";
import { formatDate } from "../../../utils/helpers";
import left from "../../../assets/icons/chervonLeft.svg";
import styles from "../applicationMgt.module.css";

export const MentorScreeningTable = () => {
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
    () => [
      {
        startup: (
          <div className="d-flex align-items-center space-out">
            <img src={apple} alt="user" className={styles.userPic} />
            <p className="mb-0">Apple inc.</p>
          </div>
        ),

        date: formatDate(new Date(2022, 9, 9)),

        status: <Tag name="In-progress" color="#0A6CF4" />,

        action: (
          <Link to="/" className="view-link">
            View
          </Link>
        ),
      },
      {
        startup: (
          <div className="d-flex align-items-center space-out">
            <img src={apple} alt="user" className={styles.userPic} />
            <p className="mb-0">Apple inc.</p>
          </div>
        ),

        date: formatDate(new Date(2022, 9, 9)),

        status: <Tag name="Scheduled" color="#650A9D" />,

        action: (
          <Link to="/" className="view-link">
            View
          </Link>
        ),
      },
      {
        startup: (
          <div className="d-flex align-items-center space-out">
            <img src={apple} alt="user" className={styles.userPic} />
            <p className="mb-0">Apple inc.</p>
          </div>
        ),

        date: formatDate(new Date(2022, 9, 9)),

        status: <Tag name="Completed" color="#0586B8" />,

        action: (
          <Link to="/" className="view-link">
            View
          </Link>
        ),
      },
      {
        startup: (
          <div className="d-flex align-items-center space-out">
            <img src={apple} alt="user" className={styles.userPic} />
            <p className="mb-0">Apple inc.</p>
          </div>
        ),

        date: formatDate(new Date(2022, 9, 9)),

        status: <Tag name="Completed" color="#0586B8" />,

        action: (
          <Link to="/" className="view-link">
            View
          </Link>
        ),
      },
    ],
    []
  );
  return (
    <div>
      <div>
        <Table headers={header} data={data} />
             {/* Pagination goes here */}
      </div>
    </div>
  );
};
