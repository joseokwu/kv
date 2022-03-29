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
        <h5 className='title'>Applane Insteen</h5>
        <h6 className='position'>CEO Applane Insteen</h6>
        <h6 className='country'>United States</h6>
        <h6 className='date'>2015 - Present 5 yrs</h6>
        <p>
          My responsibility as the product lead is to ensure the success of our
          product team. As a B2B product team, we help our clients realize their
          product development goals. I work with the design and engineering
          teams to craft and develop cutting edge software that meets market
          standards.
        </p>
      </div>
      <div className='buttons'>
        <img src={editIcon} alt='edit' /> <img src={deleteIcon} alt='delete' />
      </div>
      <div></div>
    </div>
  );
};
