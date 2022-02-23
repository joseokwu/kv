import React from 'react'
import './authContent.css'

export const AuthContent = ({ authData, authDataIndex }) => {
  return (
    <div>
      {authData[authDataIndex].map((item, i) => (
        <div className="">
          <h4 className="py-4" key={i}>
            {item.title}
          </h4>
          <article className="" key={i}>
            {item.body}
          </article>
        </div>
      ))}
    </div>
  )
}
