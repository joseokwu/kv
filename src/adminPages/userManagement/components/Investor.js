import React from "react";
import { Link } from "react-router-dom";
import { DeleteModal, Table } from "../../../adminComponents";
import userPic from "../../../assets/images/sampleUser.png";
import styles from "../user.module.css";
import down from "../../../assets/icons/chevronDown.svg";
import filter from "../../../assets/icons/filterFunnel.svg";

export const Investor = () => {
  const header = [
    { title: "Name", accessor: "name" },
    { title: "Email", accessor: "email" },
    { title: "Phone Number", accessor: "phone" },
    { title: "Country", accessor: "country" },
    { title: "Type", accessor: "type" },
    { title: "Action", accessor: "action" },
  ];

  const data = [
    {
      name: (
        <div className="d-flex align-items-center space-out">
          <img src={userPic} alt="user" className={styles.userPic} />
          <p className="mb-0">Kate Mcbeth Joan</p>
        </div>
      ),
      email: "KateMc@gmail.com",
      phone: "+234 709 975 097",
      country: "Nigeria",
      type: "Angel investor",
      action: (
        <div className="d-flex align-items-center space-out">
          <Link to="/admin/users/investors/0" className="view-link">
            View
          </Link>
          <p
            role="button"
            data-target="#deleteInvestor"
            data-toggle="modal"
            className="delete-link"
          >
            Delete
          </p>
        </div>
      ),
    },
    {
      name: (
        <div className="d-flex align-items-center space-out">
          <img src={userPic} alt="user" className={styles.userPic} />
          <p className="mb-0">Kate Mcbeth Joan</p>
        </div>
      ),
      email: "KateMc@gmail.com",
      phone: "+234 709 975 097",
      country: "Nigeria",
      type: "Angel investor",
      action: (
        <div className="d-flex align-items-center space-out">
          <Link to="/admin/users/investors/1" className="view-link">
            View
          </Link>
          <p
            role="button"
            data-target="#deleteInvestor"
            data-toggle="modal"
            className="delete-link"
          >
            Delete
          </p>
        </div>
      ),
    },
    {
      name: (
        <div className="d-flex align-items-center space-out">
          <img src={userPic} alt="user" className={styles.userPic} />
          <p className="mb-0">Kate Mcbeth Joan</p>
        </div>
      ),
      email: "KateMc@gmail.com",
      phone: "+234 709 975 097",
      country: "Nigeria",
      type: "Angel investor",
      action: (
        <div className="d-flex align-items-center space-out">
          <Link to="/admin/users/investors/2" className="view-link">
            View
          </Link>
          <p
            role="button"
            data-target="#deleteInvestor"
            data-toggle="modal"
            className="delete-link"
          >
            Delete
          </p>
        </div>
      ),
    },
    {
      name: (
        <div className="d-flex align-items-center space-out">
          <img src={userPic} alt="user" className={styles.userPic} />
          <p className="mb-0">Kate Mcbeth Joan</p>
        </div>
      ),
      email: "KateMc@gmail.com",
      phone: "+234 709 975 097",
      country: "Nigeria",
      type: "Angel investor",
      action: (
        <div className="d-flex align-items-center space-out">
          <Link to="/" className="view-link">
            View
          </Link>
          <p
            role="button"
            data-target="#deleteInvestor"
            data-toggle="modal"
            className="delete-link"
          >
            Delete
          </p>
        </div>
      ),
    },
    {
      name: (
        <div className="d-flex align-items-center space-out">
          <img src={userPic} alt="user" className={styles.userPic} />
          <p className="mb-0">Kate Mcbeth Joan</p>
        </div>
      ),
      email: "KateMc@gmail.com",
      phone: "+234 709 975 097",
      country: "Nigeria",
      type: "Angel investor",
      action: (
        <div className="d-flex align-items-center space-out">
          <Link to="/" className="view-link">
            View
          </Link>
          <p
            role="button"
            data-target="#deleteInvestor"
            data-toggle="modal"
            className="delete-link"
          >
            Delete
          </p>
        </div>
      ),
    },
  ];
  return (
    <div>
      <section className="d-flex align-items-center justify-content-between white-strip mb-3">
        <h2 className="mb-0">Investors (20)</h2>

        <div
          style={{ columnGap: 10 }}
          className="d-flex align-items-center justify-content-end"
        >
          <Filter />
        </div>
      </section>

      <section>
        <Table headers={header} data={data.concat(data)} />
      </section>
    </div>
  );
};

const Filter = () => {
  return (
    <div className="dropdown">
      <DeleteModal
        id="deleteInvestor"
        title="Delete Investor"
        desc="Are you sure you want to delete Kate Mcbeth Joan"
      />
      <button
        className="d-flex align-items-center filter-btn"
        style={{ columnGap: 7, boxShadow: "none", border: "1px solid #F2F2F2" }}
        data-toggle="dropdown"
      >
        <img src={filter} alt="filter" />
        <p>Filter</p>
        <img src={down} alt="down" />
      </button>
    </div>
  );
};
