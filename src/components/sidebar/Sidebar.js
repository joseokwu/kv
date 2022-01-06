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
    path: '/',
    icon: dashboard,
  },
  {
    title: 'Evaluation',
    activator: 'evaluation',
    path: '/evaluation',
    icon: evaluation,
  },
  {
    title: 'Program',
    activator: 'program',
    path: '/program',
    icon: program,
  },
  {
    title: 'Assignments',
    activator: 'assignments',
    path: '/assignments',
    icon: assignments,
  },
  {
    title: 'Events',
    activator: 'events',
    path: '/events',
    icon: events,
  },
  {
    title: 'Schedule',
    activator: 'schedule',
    path: '/schedule',
    icon: schedule,
  },
  {
    title: 'Networking',
    activator: 'networking',
    path: '/networking',
    icon: network,
  },
  {
    title: 'Deal Room',
    activator: 'deal_room',
    path: '/deal_room',
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
    if (pathname.includes('')) {
      setNavigator(mentorNavigators)
    } else {
      setNavigator('')
    }
  }, [pathname])

  return (
    <div className="side-main">
      <section className="side-navigator">
        <div>
          <img src={user} alt="profile" />
        </div>
        <h5 className="mb-0 side-header">Hello Micheal Smith</h5>
        <p className="mb-0 side-text">{pathname.includes('') ? 'Mentor' : ''}</p>

        <ul className="side-list">
          {navigator.length > 0 &&
            navigator.map((nav, i) => {
              return (
                <li>
                  <a href={nav.path}>
                    <img src={nav.icon} alt="dash" />
                    <p className={`${activateLink(nav.activator)} side-text`}>
                      {nav.title}
                    </p>
                  </a>
                </li>
              )
            })}
        </ul>
      </section>
      <section className="side-footer" onClick={() => push('/support')}>
        <img src={helpDesk} alt="help" />
        <p className="mb-0 side-text" role="button">
          Need help? Contact us
        </p>
      </section>
    </div>
  )
}
