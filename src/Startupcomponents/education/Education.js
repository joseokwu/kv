import React from 'react';
import './education.css';
import blue from '../../assets/icons/blue.svg';
import editIcon from '../../assets/icons/editIcon.svg';
import deleteIcon from '../../assets/icons/delete.svg';

export const Education = ({
  school,
  course,
  degree,
  eduStartDate,
  eduEndDate,
  showEducationModal,
  setEditIndex,
  id,
  setIsEditing,
}) => {
  const endDateYear =
    eduEndDate === 'present' ? 'present' : eduEndDate.getFullYear();
  // const endDateMonth = endDate === 'present' ? 'present' : endDate.getMonth();
  const startDateYear = eduStartDate.getFullYear();
  // const startDateMonth = startDate.getMonth();

  const handleEdit = (e) => {
    e.preventDefault();
    setEditIndex(id);
    setIsEditing(true);
    showEducationModal();
  };

  return (
    <>
      <div className='main'>
        <div className='icon'>
          <img src={blue} alt='apple' />
        </div>
        <div className='info'>
          <h5 className='school'>{school}</h5>
          <h6 className='course'>{course}</h6>
          <h6 className='degree'>{degree}</h6>
          <h6 className='year'>
            {/* {startDateYear} - {endDate === 'present' ? 'present' : endDateYear}{' '}
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
              : null} */}
            {startDateYear} - {endDateYear}
          </h6>
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
