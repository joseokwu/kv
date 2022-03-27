import React, { useEffect, useState } from 'react'
import './sidebar.css'
import { useHistory } from 'react-router-dom'
import {
 dashboardRoutes
} from '../../constants/sidebarRoutes'
import helpDesk from '../../assets/icons/helpDesk.svg'
import user from '../../assets/images/sampleUserSide.png'

export const DashSidebar = () => {
  const {
    location: { pathname },
    push,
  } = useHistory()

  const activateLink = (path) => {
    return pathname.includes(path) ? 'activeSide' : ''
  }

  return (
    <div className="sideMain">
      <section className="sideNavigator">
        <div>
          <img src={user} alt="profile" />
        </div>
        <h5 className="mb-0 sideHeader">Hello Micheal Smith</h5>
        <p className="mb-0 sideText">Yebox Technologies</p>

        <ul className="sideList">
          {dashboardRoutes.length > 0 &&
            dashboardRoutes.map((nav, i) => {
              return (
                <li key={i} >
                  <span className="sidebar_link" onClick={() => push(nav.path)}>
                    <img src={nav.icon} alt="dash" />
                    <span className={`${activateLink(nav.activator)} sideText`}>
                      {nav.title}
                    </span>
                  </span>
                </li>
              )
            })}
        </ul>
      </section>
      <section className="sideFooter my-4" onClick={() => push('/startup/support')}>
        <img src={helpDesk} alt="help" />
        <p className="mb-0 sideText" role="button">
          Need help? Contact us
        </p>
      </section>
    </div>
  )
}
