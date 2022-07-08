import React from "react";
import "./workExperience.css";
import appleSmall from "../../assets/icons/appleSmall.svg";
import editIcon from "../../assets/icons/editIcon.svg";
import deleteIcon from "../../assets/icons/delete.svg";

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

  const handleEdit = (e) => {
    e.preventDefault();
    setEditIndex(id);
    setIsEditing(true);
    showTeamModal();
  };

  const handleDelete = () => {
    removeWorkExperience(id);
  };

  return (
    <>
      <div className="main">
        <div className="icon">
          
        </div>
        <div className="info">
          <h5 className="title">{companyName}</h5>
          <h6 className="position">{position}</h6>
          <h6 className="country">{location}</h6>
          <h6 className="date">
            {startDateYear} - {endDate === "present" ? "present" : endDateYear}{" "}
            {endDate !== "present" && endDateYear - startDateYear > 0
              ? `${endDateYear - startDateYear} years`
              : endDate !== "present" && endDateYear - startDateYear < 1
              ? `${endDateMonth - startDateMonth} months`
              : endDate === "present" &&
                new Date().getFullYear() - startDateYear > 0
              ? `${new Date().getFullYear() - startDateYear} years`
              : endDate === "present" &&
                new Date().getFullYear() - startDateYear < 1
              ? `${new Date().getMonth() - startDateMonth} months`
              : null}
          </h6>
          <p>{responsibility}</p>
        </div>
        <div className="buttons">
          <img className="img" src={editIcon} alt="edit" onClick={handleEdit} />{" "}
          <img
            className="img"
            src={deleteIcon}
            alt="delete"
            onClick={handleDelete}
          />
        </div>
      </div>
      <hr />
    </>
  );
};
