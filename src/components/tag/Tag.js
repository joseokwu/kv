import React from "react";
import "./tag.css";

export const Tag = ({ name = "tag", color = "#058DC1", 
bg, fz='12px', className, onClick,
fontWeight = 'normal'
}) => {
  return (
   <div onClick={onClick}>
      <span
      className={`tag-main ${className} `}
      style={{ backgroundColor: `${bg}20`, 
      color: color, fontSize:fz, fontWeight:fontWeight  }}
    >
      {name}
    </span>
   </div>
  );
};
