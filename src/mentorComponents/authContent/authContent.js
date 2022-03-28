import React from 'react'
import './authContent.css'

export const AuthContent = ({ authData, authDataIndex }) => {
  return (
    <div>
      {authData[authDataIndex].map((item, i) => (
        <div className="authContent" key={i + 1}>
          <h4 className="py-4" >
            {item.title}
          </h4>
          <p className="" >
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
};