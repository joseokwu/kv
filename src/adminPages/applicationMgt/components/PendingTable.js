import React, { useMemo , useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "../../../adminComponents";
import apple from "../../../assets/images/apple.svg";
import { Tag } from "../../../components";
import { formatDate } from "../../../utils/helpers";
import left from "../../../assets/icons/chervonLeft.svg";
import styles from "../applicationMgt.module.css";
import { getStakeHolders } from './../../../services/admin';


export const PendingTable = ({applications, currentPending , setCurrentPending}) => {





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
    () => applications?.startups?.map((item , i) =>{
      return  {
        startup: (
          <div className="d-flex align-items-center space-out">
            <img src={item?.startUpProfile?.logo} alt="user" className={styles.userPic} />
            <p className="mb-0">{ item?.startUpProfile?.acceleratorName }</p>
          </div>
        ),

        date: formatDate(new Date(item?.startUpProfile?.yearFounded)),

        status: <Tag name="Pending" color="#2E3192" />,

        action: (
          <Link to={`/admin/application_mgt/pending/${item?.userId}`} className="view-link">
            View
          </Link>
        ),
      }
    })

    
  )

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

        status: <Tag name="Pending" color="#2E3192" />,

        action: (
          <Link to="/admin/application_mgt/pending/0" className="view-link">
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

        status: <Tag name="Pending" color="#2E3192" />,

        action: (
          <Link to="/admin/application_mgt/pending/1" className="view-link">
            View
          </Link>
        ),
      },
    ],
    []
  );
  return (
    <div>
      <Table headers={header} data={applicationData} />
      <div className="d-flex align-item-center pt-4 justify-content-end">
        <p className="page-num">1 of 26</p>
        <img
          src={left}
          alt="left"
          className="mx-3"
          style={{ transform: "rotate(180deg)" }}
          role="button"
        />
        <img src={left} alt="left" className="mx-3" role="button" />
      </div>
    </div>
  );
};
