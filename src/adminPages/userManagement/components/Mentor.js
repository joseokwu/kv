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
import { getStakeHolders } from "../../../services";

export const Mentor = () => {
  const { push } = useHistory();
  const cardDetails = [
    {
      name: "No. of Mentors",
      count: 12,
      color: "#D5D6F4",
    },
    {
      name: "Total Sessions",
      count: 30,
      color: "#DEF6FF",
    },
    {
      name: "Confirmed Session",
      count: 12,
      color: "#D5D6F4",
    },
    {
      name: "Pending Sessions",
      count: 10,
      color: "#DEF6FF",
    },
    {
      name: "Rejected Sessions",
      count: 8,
      color: "#D5D6F4",
    },
  ];

  const [mentors, setMentors] = useState([]);

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
                <Tag name={skill} color={i > 0 ? "#40439A" : "#058dc1"} />
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
    }
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

  const data = [
    {
      name: (
        <div className="d-flex align-items-center space-out">
          <img src={userPic} alt="user" className={styles.userPic} />
          <p className="mb-0">Kate Mcbeth Joan</p>
        </div>
      ),
      skills: (
        <div className="d-flex space-out flex-wrap">
          <Tag name="Design" />
          <Tag name="3D Printing" color="#40439A" />
          <Tag name="Front end development" color="#40439A" />
        </div>
      ),
      company: "Seam Technologies Inc.",
      sessions: 3,
      actions: (
        <div className="d-flex align-items-center space-out">
          <Link to="/admin/users/mentors/0" className="view-link">
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
    },
    {
      name: (
        <div className="d-flex align-items-center space-out">
          <img src={userPic} alt="user" className={styles.userPic} />
          <p className="mb-0">Kate Mcbeth Joan</p>
        </div>
      ),
      skills: (
        <div className="d-flex space-out flex-wrap">
          <Tag name="Design" />
          <Tag name="3D Printing" color="#40439A" />
          <Tag name="Front end development" color="#40439A" />
        </div>
      ),
      company: "Seam Technologies Inc.",
      sessions: 3,
      actions: (
        <div className="d-flex align-items-center space-out">
          <Link to="/admin/users/mentors/1" className="view-link">
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
    },
  ];

  const sessionHeaders = [
    { title: "Startups", accessor: "startups" },
    { title: "Mentor", accessor: "mentor" },
    { title: "Data and time", accessor: "duration" },
    { title: "Status", accessor: "status" },
    { title: "Actions", accessor: "actions" },
  ];

  const sessionData = [
    {
      mentor: (
        <div className="d-flex align-items-center space-out">
          <img src={userPic} alt="user" className={styles.userPic} />
          <p className="mb-0">Kate Mcbeth Joan</p>
        </div>
      ),
      status: (
        <div className="d-flex space-out flex-wrap">
          <Tag name="Completed" color="#18A615" />
        </div>
      ),
      startups: (
        <section className="event_people">
          {Array.from("fiver").map((item, i) => {
            return (
              <img
                src={apple}
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
          <p>{formatDate(new Date(2022, 8, 13))}</p>
          <p>
            {formatTime(new Date(2022, 8, 13, 10, 0))}-
            {formatTime(new Date(2022, 8, 13, 14, 0))}
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
          >
            View
          </p>
          <p
            role="button"
            data-target="#deleteSession"
            data-toggle="modal"
            className="delete-link"
          >
            Delete
          </p>
        </div>
      ),
    },
    {
      mentor: (
        <div className="d-flex align-items-center space-out">
          <img src={userPic} alt="user" className={styles.userPic} />
          <p className="mb-0">Kate Mcbeth Joan</p>
        </div>
      ),
      status: (
        <div className="d-flex space-out flex-wrap">
          <Tag name="Rescheduled" color="#00ADEF" />
        </div>
      ),
      startups: (
        <section className="event_people">
          {Array.from("fiver").map((item, i) => {
            return (
              <img
                src={apple}
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
          <p>{formatDate(new Date(2022, 8, 13))}</p>
          <p>
            {formatTime(new Date(2022, 8, 13, 10, 0))}-
            {formatTime(new Date(2022, 8, 13, 14, 0))}
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
          >
            View
          </p>
          <p
            role="button"
            data-target="#deleteSession"
            data-toggle="modal"
            className="delete-link"
          >
            Delete
          </p>
        </div>
      ),
    },
    {
      mentor: (
        <div className="d-flex align-items-center space-out">
          <img src={userPic} alt="user" className={styles.userPic} />
          <p className="mb-0">Kate Mcbeth Joan</p>
        </div>
      ),
      status: (
        <div className="d-flex space-out flex-wrap">
          <Tag name="Active" color="#2E3192" />
        </div>
      ),
      startups: (
        <section className="event_people">
          {Array.from("fiver").map((item, i) => {
            return (
              <img
                src={apple}
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
          <p>{formatDate(new Date())}</p>
          <p>
            {formatTime(new Date(2022, 1, 13, 10, 0))}-
            {formatTime(new Date(2022, 1, 13, 18, 0))}
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
          >
            View
          </p>
          <p
            role="button"
            data-target="#deleteSession"
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
      <Modal id="addMentor" title="Add Mentor" width={568}>
        <AddMentor />
      </Modal>
      <Modal id="viewSession" withHeader={false} width={723}>
        <ViewSession />
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
                count={card?.count}
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
            <Button
              label="Add Mentor"
              variant="secondary"
              data-target="#addMentor"
              data-toggle="modal"
            />
          </div>
        </div>

        <div>
          <Table headers={headers} data={mentors} />
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
              onClick={() => push("/admin/users/sessions")}
            />
          </div>
        </div>

        <div>
          <Table headers={sessionHeaders} data={sessionData} />
        </div>
      </section>
    </div>
  );
};
