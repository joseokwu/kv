import React from 'react'
import './authContent.css'

export const AuthContent = ({ authData, authDataIndex }) => {
  return (
    <div>
      {authData[authDataIndex].map((item, i) => (
        <div className="authContent">
          <h4 className="py-4" key={i}>
            {item.title}
          </h4>
          <p className="" key={i}>
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
};