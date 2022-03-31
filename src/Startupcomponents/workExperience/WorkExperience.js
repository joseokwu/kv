import React , { useState} from 'react';
import './workExperience.css';
import appleSmall from '../../assets/icons/appleSmall.svg';
import editIcon from '../../assets/icons/editIcon.svg';
import deleteIcon from '../../assets/icons/delete.svg';


export const WorkExperience = ({
  title,
  position,
  location,
  startDate,
  endDate,
  description,
  showTeamModal,
  setEditIndex,
  id,
  setIsEditing,
}) => {
  const endDateYear = endDate === 'present' ? 'present' : endDate.getFullYear();
  const endDateMonth = endDate === 'present' ? 'present' : endDate.getMonth();
  const startDateYear = startDate.getFullYear();
  const startDateMonth = startDate.getMonth();

  const handleEdit = (e) => {
    e.preventDefault();
    setEditIndex(id);
    setIsEditing(true);
    showTeamModal();
  };

  return (
    <>
      <div className='main'>
        <div className='icon'>
          <img src={appleSmall} alt='apple' />
        </div>
        <div className='info'>
          <h5 className='title'>{title}</h5>
          <h6 className='position'>{position}</h6>
          <h6 className='country'>{location}</h6>
          <h6 className='date'>
            {startDateYear} - {endDate === 'present' ? 'present' : endDateYear}{' '}
            {endDate !== 'present' && endDateYear - startDateYear > 0
              ? `${endDateYear - startDateYear} years`
              : endDate !== 'present' && endDateYear - startDateYear < 1
              ? `${endDateMonth - startDateMonth} months`
              : endDate === 'present' &&
                new Date().getFullYear() - startDateYear > 0
              ? `${new Date().getFullYear() - startDateYear} years`
              : endDate === 'present' &&
                new Date().getFullYear() - startDateYear < 1
              ? `${new Date().getMonth() - startDateMonth} months`
              : null}
          </h6>
          <p>{description}</p>
        </div>
        <div className='buttons'>
          <img className='img' src={editIcon} alt='edit' onClick={handleEdit} />{' '}
          <img className='img' src={deleteIcon} alt='delete' />
        </div>
      </div>
      <hr />
    </>
  );
};
