import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Table } from "../../../adminComponents";
import { Tag } from "../../../components";
import { formatDate } from "../../../utils/helpers";
import left from "../../../assets/icons/chervonLeft.svg";
import styles from "../applicationMgt.module.css";
import { EmptyState } from './../../../mentorComponents/emptyState/EmptyState';



export const ApprovedTable = ({approved, currentPending , setCurrentPending}) => {



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
    () => approved?.startups?.map((item , i) =>{
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

  if(approved?.startups?.length === 0){
    return <EmptyState message="No  Startup has been approved" />
  }

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
