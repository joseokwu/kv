import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Table } from "../../../adminComponents";
import userPic from "../../../assets/images/sampleUser.png";
import { Tag } from "../../../components/index";
import styles from "../viewKVMemberProcess.module.css";

export const SelectionTeam = () => {
  const header = [
    { title: "Name", accessor: "name" },
    { title: "Email", accessor: "email" },
    { title: "Phone Number", accessor: "phone" },
    { title: "Role", accessor: "role" },
    { title: "Action", accessor: "action" },
  ];

  const headerMentor = [
    { title: "Name", accessor: "name" },
    { title: "Email", accessor: "email" },
    { title: "Phone Number", accessor: "phone" },
    { title: "Role", accessor: "role" },
    { title: "Status", accessor: "status" },
    { title: "Action", accessor: "action" },
  ];

  const { pathname } = useLocation();

  const isMentor = pathname.includes("mentors");

  const data = [
    {
      name: (
        <div className="d-flex align-items-center space-out">
          <img src={userPic} alt="user" className={styles.userPic} />
          <p className="mb-0">Kate Mcbeth Joan</p>
        </div>
      ),

      email: "Kate Mc@gmail.com",
      phone: "+234 709 975 097",
      role: "KV Member",
      status: <Tag name="Accepted" color="#18A615" />,
      action: (
        <div className="d-flex align-items-center space-out">
          <Link
            to="/admin/selection_process/mentor/1"
            className="view-link"
            role="button"
          >
            View
          </Link>
          <p className="view-link" role="button" style={{ color: "#00ADEF" }}>
            Replace
          </p>
          <p role="button" className="delete-link">
            Delete
          </p>
        </div>
      ),
    },
  ];

  return (
    <div>
      <section>
        <Table
          headers={isMentor ? headerMentor : header}
          data={[...data, ...data, ...data, ...data, ...data, ...data, ...data]}
        />
      </section>
    </div>
  );
};
