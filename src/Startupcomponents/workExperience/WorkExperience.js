import React, { useState } from "react";
import "./workExperience.css";
import appleSmall from "../../assets/icons/appleSmall.svg";
import editIcon from "../../assets/icons/editIcon.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import { useAuth } from "../../hooks";
import { TinyModal } from "../modal/Modal";
import { Button } from "../../mentorComponents";

export const WorkExperience = ({
    companyName,
    position,
    location,
    startDate,
    endDate,
    responsibility,
    showTeamModal,
    setEditIndex,
    id,
    data,
    setIsEditing,
    removeWorkExperience,
}) => {
    const endDateYear =
        endDate === "present" ? "present" : new Date(endDate).getFullYear();
    const endDateMonth =
        endDate === "present" ? "present" : new Date(endDate).getMonth();
    const startDateYear = new Date(startDate).getFullYear();
    const startDateMonth = new Date(startDate).getMonth();
    const state = useAuth();
    // console.log(state);
    // color: #E31937

    const handleEdit = (e) => {
        e.preventDefault();
        setEditIndex(id);
        setIsEditing(true);
        showTeamModal();
    };

    const handleDelete = () => {
        console.log(id);
        removeWorkExperience(id);
        console.log(state);
    };

    const [showDelete, setShowDelete] = useState(false);

    return (
        <>
            {showDelete ? (
                <TinyModal
                    title="Delete Confirmation"
                    titleCol="#E31937"
                    closeModal={setShowDelete}
                >
                    <DeleteComponent
                        setShowDelete={setShowDelete}
                        handleDelete={handleDelete}
                    />
                </TinyModal>
            ) : (
                <></>
            )}
            <div className="main">
                <div className="icon"></div>
                <div className="info">
                    <h5 className="title">{companyName}</h5>
                    <h6 className="position">{position}</h6>
                    <h6 className="country">{location}</h6>
                    <h6 className="date">
                        {startDateYear} -{" "}
                        {endDate === "present" ? "present" : endDateYear}{" "}
                        {endDate !== "present" &&
                        endDateYear - startDateYear > 0
                            ? `${endDateYear - startDateYear} years`
                            : endDate !== "present" &&
                              endDateYear - startDateYear < 1
                            ? `${endDateMonth - startDateMonth} months`
                            : endDate === "present" &&
                              new Date().getFullYear() - startDateYear > 0
                            ? `${
                                  new Date().getFullYear() - startDateYear
                              } years`
                            : endDate === "present" &&
                              new Date().getFullYear() - startDateYear < 1
                            ? `${new Date().getMonth() - startDateMonth} months`
                            : null}
                    </h6>
                    <p>{responsibility}</p>
                </div>
                <div className="buttons">
                    <img
                        className="img"
                        src={editIcon}
                        alt="edit"
                        onClick={handleEdit}
                    />{" "}
                    <img
                        className="img"
                        src={deleteIcon}
                        alt="delete"
                        // onClick={handleDelete}
                        onClick={() => setShowDelete(true)}
                    />
                </div>
            </div>
            <hr />
        </>
    );
};

const DeleteComponent = ({ setShowDelete,handleDelete }) => (
    <div
        className="d-flex flex-column align-items-start gap-4"
        style={{ minHeight: "calc(100% - 50px)" }}
    >
        <p>
            Are you sure you want to delete this work experience? This action is
            irreversible.
        </p>
        <div className="d-flex flex-row align-items-center gap-4 mt-auto">
            <button
                style={{
                    backgroundColor: "#E31937",
                    border: 0,
                    color: "white",
                    padding: "10px 25px",
                    transition: "all 0.4s",
                    borderRadius: "10px",
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "14px",
                    lineHeight: "140%",
                    transition: "all 0.4s",
                }}
                type="button"
                onClick={handleDelete}
            >
                Delete
            </button>
            <Button
                label="Cancel"
                variant="secondary"
                type="button"
                onClick={() => setShowDelete(false)}
            />
        </div>
    </div>
);
