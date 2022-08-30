import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeleteModal, Table, ViewSession } from "../../../adminComponents";
import { Button, DashCard, Modal, Tag } from "../../../components";
import userPic from "../../../assets/images/sampleUser.png";
import styles from "../user.module.css";
import { formatDate, formatTime } from "../../../utils/helpers";
import apple from "../../../assets/images/apple.svg";
import { AddMentor } from "./AddMentor";
import { useHistory } from "react-router-dom";
import { getStakeHolders, getUserList } from "../../../services";
import { SkeletonLoader } from "../../../components";
import { RoundLoader, SpinLoader } from "../../../components";
import { EmptyState } from "../../../mentorComponents";
import { getPrograms } from "../../../services/admin";

export const Mentor = () => {
    const { push } = useHistory();
    // const mento
    const [numOfMentors, setNumOfMentors] = useState(0);
    const [programs, setPrograms] = useState();
    const [programId, setProgramId] = useState();

    const cardDetails = [
        {
            name: "No. of Mentors",
            count: numOfMentors,
            color: "#D5D6F4",
        },
        {
            name: "Total Sessions",
            count: null,
            color: "#DEF6FF",
        },
        {
            name: "Confirmed Session",
            count: null,
            color: "#D5D6F4",
        },
        {
            name: "Pending Sessions",
            count: null,
            color: "#DEF6FF",
        },
        {
            name: "Rejected Sessions",
            count: null,
            color: "#D5D6F4",
        },
    ];

    const [mentors, setMentors] = useState([]);
    const [loading, setLoading] = useState(false);

    // const fetchPrograms = async () => {
    //     const res = await getPrograms({ page: 1, limit: 2 });
    //     return res;
    //     // setPrograms(res?.data?.data);
    // };

    // useEffect(() => {
    //     try {
    //         const res = fetchPrograms();
    //         console.log(res);
    //         console.log("res");
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }, []);

    const getData = async () => {
        try {
            const res = await getUserList("mentor");
            console.log(res);
            console.log(res?.data?.data);
            return res;
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(async () => {
        setLoading(true);
        try {
            const res = await getData();
            if (res?.success && res?.data?.data?.length > 0) {
                setNumOfMentors(res?.data?.metadata?.total);
                setMentors(() =>
                    res?.data?.data.map((mentor) => ({
                        name: (
                            <div className="d-flex align-items-center space-out">
                                <img
                                    src={mentor?.avatar ?? userPic}
                                    alt="user"
                                    className={styles.userPic}
                                />
                                <p className="mb-0">{`${mentor?.personalDetail?.lastname} ${mentor?.personalDetail?.firstname}`}</p>
                            </div>
                        ),
                        skills: (
                            <div className="d-flex space-out flex-wrap">
                                {mentor?.areaOfInterest?.skills?.map(
                                    (skill, i) => (
                                        <Tag
                                            name={skill}
                                            color={
                                                i > 0 ? "#40439A" : "#058dc1"
                                            }
                                        />
                                    )
                                )}
                            </div>
                        ),
                        company: mentor?.workExperience?.companyName,
                        sessions: 0,
                        actions: (
                            <div className="d-flex align-items-center space-out">
                                <Link
                                    to={`/admin/users/mentors/${mentor?.userId}`}
                                    className="view-link"
                                >
                                    View
                                </Link>
                                <Link
                                    to={`/admin/users/mentors/${mentor?.userId}`}
                                    className="delete-link"
                                >
                                    Delete
                                </Link>
                            </div>
                        ),
                    }))
                );
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
        return () => {};
    }, []);

    console.log(mentors);

    const headers = [
        { title: "Name", accessor: "name" },
        { title: "Core Skills", accessor: "skills" },
        { title: "Company", accessor: "company" },
        { title: "Sessions", accessor: "sessions" },
        { title: "Actions", accessor: "actions" },
    ];

    const sessionHeaders = [
        { title: "Startups", accessor: "startups" },
        { title: "Mentor", accessor: "mentor" },
        { title: "Data and time", accessor: "duration" },
        // { title: 'Status', accessor: 'status' },
        { title: "Actions", accessor: "actions" },
    ];

    const sessionData = programs?.map((item, i) => {
        return {
            mentor: (
                <div className="d-flex align-items-center space-out">
                    <img
                        src={
                            item?.guest?.logo ??
                            `https://ui-avatars.com/api/?name=${item?.guest?.name}`
                        }
                        alt="user"
                        className={styles.userPic}
                    />
                    <p className="mb-0">{item?.guest?.name}</p>
                </div>
            ),

            startups: (
                <section className="event_people">
                    {item?.attendees.map((att, i) => {
                        return (
                            <img
                                src={
                                    att?.logo ??
                                    `https://ui-avatars.com/api/?name=${att?.name}`
                                }
                                alt="doc"
                                key={`over-${i}`}
                                style={{ position: "relative", left: i * -5 }}
                            />
                        );
                    })}
                </section>
            ),
            duration: (
                <div>
                    <p>{formatDate(new Date(item?.startTime))}</p>
                    <p>
                        {formatTime(new Date(item?.startTime))}-
                        {formatTime(new Date(item?.endTime))}
                    </p>
                </div>
            ),
            actions: (
                <div className="d-flex align-items-center space-out">
                    <p
                        className="view-link"
                        data-target="#viewSession"
                        data-toggle="modal"
                        role="button"
                        onClick={() => setProgramId(i)}
                    >
                        View
                    </p>
                </div>
            ),
        };
    });

    //   const sessionData = [
    //     {
    //       mentor: (
    //         <div className='d-flex align-items-center space-out'>
    //           <img src={userPic} alt='user' className={styles.userPic} />
    //           <p className='mb-0'>Kate Mcbeth Joan</p>
    //         </div>
    //       ),
    //       status: (
    //         <div className='d-flex space-out flex-wrap'>
    //           <Tag name='Completed' color='#18A615' />
    //         </div>
    //       ),
    //       startups: (
    //         <section className='event_people'>
    //           {Array.from('fiver').map((item, i) => {
    //             return (
    //               <img
    //                 src={apple}
    //                 alt='doc'
    //                 key={`over-${i}`}
    //                 style={{ position: 'relative', left: i * -5 }}
    //               />
    //             );
    //           })}
    //         </section>
    //       ),
    //       duration: (
    //         <div>
    //           <p>{formatDate(new Date(2022, 8, 13))}</p>
    //           <p>
    //             {formatTime(new Date(2022, 8, 13, 10, 0))}-
    //             {formatTime(new Date(2022, 8, 13, 14, 0))}
    //           </p>
    //         </div>
    //       ),
    //       actions: (
    //         <div className='d-flex align-items-center space-out'>
    //           <p
    //             className='view-link'
    //             data-target='#viewSession'
    //             data-toggle='modal'
    //             role='button'
    //           >
    //             View
    //           </p>
    //           <p
    //             role='button'
    //             data-target='#deleteSession'
    //             data-toggle='modal'
    //             className='delete-link'
    //           >
    //             Delete
    //           </p>
    //         </div>
    //       ),
    //     },
    //     {
    //       mentor: (
    //         <div className='d-flex align-items-center space-out'>
    //           <img src={userPic} alt='user' className={styles.userPic} />
    //           <p className='mb-0'>Kate Mcbeth Joan</p>
    //         </div>
    //       ),
    //       status: (
    //         <div className='d-flex space-out flex-wrap'>
    //           <Tag name='Rescheduled' color='#00ADEF' />
    //         </div>
    //       ),
    //       startups: (
    //         <section className='event_people'>
    //           {Array.from('fiver').map((item, i) => {
    //             return (
    //               <img
    //                 src={apple}
    //                 alt='doc'
    //                 key={`over-${i}`}
    //                 style={{ position: 'relative', left: i * -5 }}
    //               />
    //             );
    //           })}
    //         </section>
    //       ),
    //       duration: (
    //         <div>
    //           <p>{formatDate(new Date(2022, 8, 13))}</p>
    //           <p>
    //             {formatTime(new Date(2022, 8, 13, 10, 0))}-
    //             {formatTime(new Date(2022, 8, 13, 14, 0))}
    //           </p>
    //         </div>
    //       ),
    //       actions: (
    //         <div className='d-flex align-items-center space-out'>
    //           <p
    //             className='view-link'
    //             data-target='#viewSession'
    //             data-toggle='modal'
    //             role='button'
    //           >
    //             View
    //           </p>
    //           <p
    //             role='button'
    //             data-target='#deleteSession'
    //             data-toggle='modal'
    //             className='delete-link'
    //           >
    //             Delete
    //           </p>
    //         </div>
    //       ),
    //     },
    //     {
    //       mentor: (
    //         <div className='d-flex align-items-center space-out'>
    //           <img src={userPic} alt='user' className={styles.userPic} />
    //           <p className='mb-0'>Kate Mcbeth Joan</p>
    //         </div>
    //       ),
    //       status: (
    //         <div className='d-flex space-out flex-wrap'>
    //           <Tag name='Active' color='#2E3192' />
    //         </div>
    //       ),
    //       startups: (
    //         <section className='event_people'>
    //           {Array.from('fiver').map((item, i) => {
    //             return (
    //               <img
    //                 src={apple}
    //                 alt='doc'
    //                 key={`over-${i}`}
    //                 style={{ position: 'relative', left: i * -5 }}
    //               />
    //             );
    //           })}
    //         </section>
    //       ),
    //       duration: (
    //         <div>
    //           <p>{formatDate(new Date())}</p>
    //           <p>
    //             {formatTime(new Date(2022, 1, 13, 10, 0))}-
    //             {formatTime(new Date(2022, 1, 13, 18, 0))}
    //           </p>
    //         </div>
    //       ),
    //       actions: (
    //         <div className='d-flex align-items-center space-out'>
    //           <p
    //             className='view-link'
    //             data-target='#viewSession'
    //             data-toggle='modal'
    //             role='button'
    //           >
    //             View
    //           </p>
    //           <p
    //             role='button'
    //             data-target='#deleteSession'
    //             data-toggle='modal'
    //             className='delete-link'
    //           >
    //             Delete
    //           </p>
    //         </div>
    //       ),
    //     },
    //   ];

    return (
        <div>
            <Modal id="addMentor" title="Add Mentor" width={568}>
                <AddMentor />
            </Modal>
            <Modal id="viewSession" withHeader={false} width={723}>
                {programId >= 0 && (
                    <ViewSession singleProgram={programs[programId]} />
                )}
            </Modal>

            <DeleteModal
                id="deleteMentor"
                title="Delete Mentor"
                desc="Are you sure you want to delete Kate Mcbeth Joan"
            />

            <DeleteModal
                id="deleteSession"
                title="Delete Session"
                desc="Are you sure you want to delete session with Kate Mcbeth Joan"
            />

            <section className="d-flex align-items-center dashboard-cards mb-4">
                {cardDetails.length > 0 &&
                    cardDetails.map((card, i) => {
                        return (
                            <DashCard
                                name={card?.name}
                                color={card.color}
                                count={card?.count || 0}
                            />
                        );
                    })}
            </section>

            <section className="mb-4">
                <div className="d-flex align-items-center justify-content-between white-strip mb-3">
                    <h2 className="mb-0">Mentors</h2>

                    <div
                        style={{ columnGap: 10 }}
                        className="d-flex align-items-center justify-content-end"
                    >
                        <Button
                            label="View all"
                            variant="trans"
                            onClick={() => push("/admin/users/mentors")}
                        />
                    </div>
                </div>

                <div>
                    {!loading && mentors?.length === 0 ? (
                        <EmptyState message="No mentors yet." />
                    ) : (
                        <SpinLoader loading={loading} color="blue">
                            <Table headers={headers} data={mentors} />
                        </SpinLoader>
                    )}
                </div>
            </section>

            <section className="mb-4">
                <div className="d-flex align-items-center justify-content-between white-strip mb-3">
                    <h2 className="mb-0">Sessions</h2>

                    <div
                        style={{ columnGap: 10 }}
                        className="d-flex align-items-center justify-content-end"
                    >
                        <Button
                            label="View all"
                            variant="trans"
                            //   onClick={() => push('/admin/users/sessions')}
                            onClick={() => push("/admin/program")}
                        />
                    </div>
                </div>

                <div>
                    {mentors?.length === 0 ? (
                        <EmptyState message="No sessions yet." />
                    ) : (
                        <Table headers={sessionHeaders} data={sessionData} />
                    )}
                </div>
            </section>
        </div>
    );
};
