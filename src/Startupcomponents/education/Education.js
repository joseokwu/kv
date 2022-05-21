import React from 'react';
import './education.css';
import blue from '../../assets/icons/blue.svg';
import editIcon from '../../assets/icons/editIcon.svg';
import deleteIcon from '../../assets/icons/delete.svg';

export const Education = ({
  schoolName,
  course,
  degree,
  startDate,
  activities,
  endDate,
  showEducationModal,
  setEditIndex,
  id,
  setIsEditing,
  removeEducation,
}) => {
 
  const endDateYear =
  endDate &&  endDate === 'present' ? 'present' : new Date(endDate).getFullYear();
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
    removeEducation(id);
  };

  return (
    <>
      <div className='main'>
       
        <div className='info'>
          <h5 className='school'>{schoolName}</h5>
          <h6 className='course'>{course}</h6>
          <h6 className='degree'>{degree}</h6>
          <p className=''  > { activities } </p>
          <h6 className='year'>
         
            {startDateYear} - {endDateYear}
          </h6>
        </div>
        <div className='buttons'>
          <img className='img' src={editIcon} alt='edit' onClick={handleEdit} />{' '}
          <img className='img' src={deleteIcon} onClick={handleDelete} alt='delete' />
        </div>
      </div>
      <hr />
    </>
  );
};
