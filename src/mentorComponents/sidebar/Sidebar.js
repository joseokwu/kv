import React, { useEffect, useState } from 'react'
import './sidebar.css'
import { useHistory } from 'react-router-dom'
import user from '../../assets/images/sampleUserSide.png'
import dashboard from '../../assets/icons/dashboard.svg'
import evaluation from '../../assets/icons/evsluation.svg'
import program from '../../assets/icons/program.svg'
import assignments from '../../assets/icons/assignments.svg'
import events from '../../assets/icons/events.svg'
import schedule from '../../assets/icons/schedule.svg'
import network from '../../assets/icons/network.svg'
import deal from '../../assets/icons/deal.svg'
import helpDesk from '../../assets/icons/helpDesk.svg'

const mentorNavigators = [
  {
    title: 'Dashboard',
    activator: 'dashboard',
    path: '/mentor/dashboard',
    icon: dashboard,
  },
  {
    title: 'Evaluation',
    activator: 'evaluation',
    path: '/mentor/evaluation',
    icon: evaluation,
  },
  {
    title: 'Program',
    activator: 'program',
    path: '/mentor/program#All',
    icon: program,
  },
  {
    title: 'Assignments',
    activator: 'assignments',
    path: '/mentor/assignments',
    icon: assignments,
  },
  {
    title: 'Events',
    activator: 'events',
    path: '/mentor/events',
    icon: events,
  },
  {
    title: 'Schedule',
    activator: 'schedule',
    path: '/mentor/schedule',
    icon: schedule,
  },
  {
    title: 'Networking',
    activator: 'networking',
    path: '/mentor/networking',
    icon: network,
  },
  {
    title: 'Deal Room',
    activator: 'dealroom',
    path: '/mentor/dealroom',
    icon: deal,
  },
]

export const Sidebar = () => {
  const {
    location: { pathname },
    push,
  } = useHistory()

  const activateLink = (path) => {
    return pathname.includes(path) ? 'active-side' : ''
  }

  const [navigator, setNavigator] = useState([])

  useEffect(() => {
    if (pathname.includes('mentor')) {
      setNavigator(mentorNavigators)
    } else {
      setNavigator(mentorNavigators)
    }
  }, [pathname])

  return (
    <div className="side-main">
      <section className="side-navigator">
        <div>
          <img src={user} alt="profile" onClick={() => push('/mentor/profile')} />
        </div>
        <h5 className="mb-0 side-header">Hello Micheal Smith</h5>
        <p className="mb-0 side-text">{pathname.includes('mentor') ? 'Mentor' : 'mentor'}</p>

        <ul className="side-list">
          {navigator.length > 0 &&
            navigator.map((nav, i) => {
              return (
                <li key={i}>
                  <a href={nav.path}>
                    <img src={nav.icon} alt="dash" />
                    <span className={`${activateLink(nav.activator)} side-text`}>
                      {nav.title}
                    </span>
                  </a>
                </li>
              )
            })}
        </ul>
      </section>
      <section className="side-footer" onClick={() => push('/mentor/support')}>
        <img src={helpDesk} alt="help" />
        <span className="mb-0 side-text" role="button">
          Need help? Contact us
        </span>
      </section>
    </div>
  )
}