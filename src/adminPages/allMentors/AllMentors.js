import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { DeleteModal, Table } from "../../adminComponents";
import left from "../../assets/icons/chervonLeft.svg";
import { Button, Modal, Tag } from "../../components";
import userPic from "../../assets/images/sampleUser.png";
import styles from "../userManagement/user.module.css";
import { AddMentor } from "../userManagement/components";
import { getStakeHolders } from "../../services";
import { SkeletonLoader } from "../../components";

export const AllMentors = () => {
    const { push } = useHistory();

    const [mentors, setMentors] = useState([]);
    const [fetched, setFetched] = useState(false);

    const getData = async () => {
        const res = await getStakeHolders({
            page: 1,
            limit: 2,
            type: "mentor",
            query: { applicationCompleted: true },
        });
        if (res.success && res?.data?.mentors?.length > 0) {
            setMentors(() =>
                res?.data?.mentors.map((mentor) => ({
                    name: (
                        <div className="d-flex align-items-center space-out">
                            <img
                                src={mentor?.personalDetail?.logo ?? userPic}
                                alt="user"
                                className={styles.userPic}
                            />
                            <p className="mb-0">{`${mentor?.personalDetail?.lastname} ${mentor?.personalDetail?.firstname}`}</p>
                        </div>
                    ),
                    skills: (
                        <div className="d-flex space-out flex-wrap">
                            {mentor?.areaOfInterest?.skills?.map((skill, i) => (
                                <Tag
                                    name={skill}
                                    color={i > 0 ? "#40439A" : "#058dc1"}
                                />
                            ))}
                        </div>
                    ),
                    company: "Seam Technologies Inc.",
                    sessions: 3,
                    actions: (
                        <div className="d-flex align-items-center space-out">
                            <Link
                                to={`/admin/users/mentors/${mentor?.userId}`}
                                className="view-link"
                            >
                                View
                            </Link>
                            <p
                                role="button"
                                className="delete-link"
                                data-target="#deleteMentor"
                                data-toggle="modal"
                            >
                                Delete
                            </p>
                        </div>
                    ),
                }))
            );
            setFetched(true);
        }
        console.log("res", res);
    };

    useEffect(() => {
        getData();
        return () => {};
    }, []);

    const headers = [
        { title: "Name", accessor: "name" },
        { title: "Core Skills", accessor: "skills" },
        { title: "Company", accessor: "company" },
        { title: "Sessions", accessor: "sessions" },
        { title: "Actions", accessor: "actions" },
    ];

    // const data = [
    //   {
    //     name: (
    //       <div className="d-flex align-items-center space-out">
    //         <img src={userPic} alt="user" className={styles.userPic} />
    //         <p className="mb-0">Kate Mcbeth Joan</p>
    //       </div>
    //     ),
    //     skills: (
    //       <div className="d-flex space-out flex-wrap">
    //         <Tag name="Design" />
    //         <Tag name="3D Printing" color="#40439A" />
    //         <Tag name="Front end development" color="#40439A" />
    //       </div>
    //     ),
    //     company: "Seam Technologies Inc.",
    //     sessions: 3,
    //     actions: (
    //       <div className="d-flex align-items-center space-out">
    //         <Link to="/admin/users/mentors/0" className="view-link">
    //           View
    //         </Link>
    //         <p
    //           role="button"
    //           className="delete-link"
    //           data-target="#deleteMentor"
    //           data-toggle="modal"
    //         >
    //           Delete
    //         </p>
    //       </div>
    //     ),
    //   },
    //   {
    //     name: (
    //       <div className="d-flex align-items-center space-out">
    //         <img src={userPic} alt="user" className={styles.userPic} />
    //         <p className="mb-0">Kate Mcbeth Joan</p>
    //       </div>
    //     ),
    //     skills: (
    //       <div className="d-flex space-out flex-wrap">
    //         <Tag name="Design" />
    //         <Tag name="3D Printing" color="#40439A" />
    //         <Tag name="Front end development" color="#40439A" />
    //       </div>
    //     ),
    //     company: "Seam Technologies Inc.",
    //     sessions: 3,
    //     actions: (
    //       <div className="d-flex align-items-center space-out">
    //         <Link to="/admin/users/mentors/1" className="view-link">
    //           View
    //         </Link>
    //         <p
    //           role="button"
    //           className="delete-link"
    //           data-target="#deleteMentor"
    //           data-toggle="modal"
    //         >
    //           Delete
    //         </p>
    //       </div>
    //     ),
    //   },
    // ];

    return (
        <div className="p-5" style={{ maxWidth: 2000 }}>
            <Modal id="addMentor" title="Add Mentor" width={568}>
                <AddMentor />
            </Modal>
            <DeleteModal
                id="deleteMentor"
                title="Delete Mentor"
                desc="Are you sure you want to delete Kate Mcbeth Joan"
            />
            <section className="d-flex align-items-center mb-3">
                <p
                    className="bread-start"
                    role="button"
                    onClick={() => push("/admin/users#Mentor")}
                >
                    User Management
                </p>
                <img src={left} alt="left" className="mx-3" />
                <p className="bread-end">Mentors</p>
            </section>

            <section>
                <div className="d-flex align-items-center justify-content-between white-strip mb-3">
                    <h2 className="mb-0">Mentors ({mentors?.length})</h2>

                    <div
                        style={{ columnGap: 10 }}
                        className="d-flex align-items-center justify-content-end"
                    >
                        <Button
                            label="Add Mentor"
                            variant="secondary"
                            data-target="#addMentor"
                            data-toggle="modal"
                        />
                    </div>
                </div>

                <div>
                    <SkeletonLoader fetched={fetched}>
                        <Table headers={headers} data={mentors} />
                    </SkeletonLoader>
                </div>

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
            </section>
        </div>
    );
};
