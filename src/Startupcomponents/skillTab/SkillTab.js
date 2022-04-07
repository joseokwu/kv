import React from 'react';
import './skillTab.css';
import { GiCancel } from 'react-icons/gi';
import { generateRandomColor } from '../../utils/helpers';

export const SkillTab = ({ skill }) => {
  const color = generateRandomColor();
  return (
    <div className='skill-div' style={{ background: color }}>
      <span className='skill-main'>{skill}</span>

      <GiCancel className='skill-icon' />
    </div>
  );
};
