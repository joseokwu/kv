import React from 'react';
import './workExperience.css';
import appleSmall from '../../assets/icons/appleSmall.svg';
import editIcon from '../../assets/icons/editIcon.svg';
import deleteIcon from '../../assets/icons/delete.svg';

export const WorkExperience = ({
  title,
  position,
  country,
  startDate,
  endDate,
  description,
}) => {
  return (
    <div className='main'>
      <div className='icon'>
        <img src={appleSmall} alt='apple' />
      </div>
      <div className='info'>
        <h5 className='title'>{title}</h5>
        <h6 className='position'>{position}</h6>
        <h6 className='country'>{country}</h6>
        <h6 className='date'>{`${startDate} - ${endDate} 5 yrs`}</h6>
        <p>{description}</p>
      </div>
      <div className='buttons'>
        <img src={editIcon} alt='edit' /> <img src={deleteIcon} alt='delete' />
      </div>
      <div></div>
    </div>
  );
};
