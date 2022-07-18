import React, { useState } from "react";
import "./education.css";
import blue from "../../assets/icons/blue.svg";
import editIcon from "../../assets/icons/editIcon.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import { css } from "styled-components/macro";
import { TinyModal } from "../modal/Modal";
import { Button } from "../button/Button";

export const Education = ({
    schoolName,
    course,
    degreeType,
    startDate,
    activities,
    endDate,
    showEducationModal,
    setEditIndex,
    id,
    setIsEditing,
    removeEducation,
}) => {
    const [showDelete, setShowDelete] = useState(false);

    const endDateYear =
        endDate && endDate === "present"
            ? "present"
            : new Date(endDate).getFullYear();
    // const endDateMonth = endDate === 'present' ? 'present' : endDate.getMonth();
    const startDateYear = new Date(startDate).getFullYear();

    // const startDateMonth = startDate.getMonth();

    const handleEdit = (e) => {
        e.preventDefault();
        setEditIndex(id);
        setIsEditing(true);
        showEducationModal();
    };

    const handleDelete = () => {
        console.log(id);
        // console.log(state);
        removeEducation(id);
    };

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
                    <h5 className="school">{schoolName}</h5>
                    <h6 className="course">{course}</h6>
                    <h6 className="degree">{degreeType}</h6>

                    <div className="moreDeets">
                        <h6 className="year">
                            {startDateYear} - {endDateYear}
                        </h6>
                        <p className=""> {activities} </p>
                    </div>
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
                        onClick={() => setShowDelete(true)}
                        alt="delete"
                    />
                </div>
            </div>
            <hr />
        </>
    );
};

const DeleteComponent = ({ setShowDelete, handleDelete }) => (
    <div
        className="d-flex flex-column align-items-start gap-4"
        style={{ minHeight: "calc(100% - 60px)" }}
    >
        <p>
            Are you sure you want to delete this education experience? This
            action is irreversible.
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
