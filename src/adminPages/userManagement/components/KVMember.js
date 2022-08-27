import React from "react";
import { Table } from "../../../adminComponents";
import { Button, Modal } from "../../../components";
import userPic from "../../../assets/images/sampleUser.png";
import styles from "../user.module.css";
import { Link } from "react-router-dom";
import { AddMember } from "./AddMember";

export const KVMember = () => {
    const header = [
        { title: "Name", accessor: "name" },
        { title: "Department", accessor: "dept" },
        { title: "Role", accessor: "role" },
        { title: "Email", accessor: "email" },
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
            dept: "Deal Sourcing",
            role: "Admin",
            email: "KateMc@gmail.com",
            action: (
                <div className="d-flex align-items-center space-out">
                    <Link to="/admin/users/member/0" className="view-link">
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
            <Modal id="addMember" title="Add Member" width={568}>
                <AddMember />
            </Modal>
            <section className="d-flex align-items-center justify-content-between white-strip mb-3">
                <h2 className="mb-0">KV Members (20)</h2>

                <div
                    style={{ columnGap: 10 }}
                    className="d-flex align-items-center justify-content-end"
                >
                    <Button
                        label="Add Member"
                        variant="secondary"
                        data-toggle="modal"
                        data-target="#addMember"
                    />
                </div>
            </section>

            <section>
                <Table headers={header} data={data.concat(data)} />
            </section>
        </div>
    );
};
