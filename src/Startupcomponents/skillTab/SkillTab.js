import React , { useMemo } from 'react';
import './skillTab.css';
import { GiCancel } from 'react-icons/gi';
import { generateRandomColor } from '../../utils/helpers';

export const SkillTab = ({ skill , onClick }) => {
  const color = useMemo(() => generateRandomColor() , []);
  return (
    <div className='skill-div mb-2' style={{ background: color }}>
      <span className='skill-main'>{skill}</span>

      <GiCancel style={{cursor: 'pointer'}} className='skill-icon' onClick={onClick} />
    </div>
  );
};
