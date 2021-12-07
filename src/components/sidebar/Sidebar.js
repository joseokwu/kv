import React, { useEffect, useState } from 'react'
import './sidebar.css'
import { useHistory } from 'react-router'
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
    path: '/mentor/program',
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
    activator: 'deal-room',
    path: '/mentor/deal-room',
    icon: deal,
  },
];

// const boosterNavigators = [
//   {
//     title: "Dashboard",
//     activator: "dashboard",
//     path: "/dashboard",
//     icon: dashboard,
//   },
//   {
//     title: "Startup Applicants",
//     activator: "applicants",
//     path: "/applicants",
//     icon: dashboard,
//   },
// ];

export const Sidebar = () => {
  const {
    location: { pathname },
    push,
  } = useHistory()

  const activateLink = (path) => {
    return pathname.includes(path) ? 'active-side' : '';
  }

  const [navigator, setNavigator] = useState([]);

  useEffect(() => {
    if (pathname.includes('mentor')) {
      setNavigator(mentorNavigators)
    } else {
      setNavigator('')
    }
  }, [pathname]);

  return (
    // <div className="side-main">
    //   <section className="side-navigator">
    //     <div>
    //       <img src={user} alt="profile" />
    //     </div>
    //     <h5 className="mb-0 side-header">Hello Micheal Smith</h5>
    //     <p className="mb-0 side-text">Startup</p>

    //     <ul className="side-list">
    //       <li>
    //         <a href="/mentor/dashboard">
    //           <img src={dashboard} alt="dash" />
    //           <p className={`${activateLink('dashboard')} side-text`}>
    //             Dashboard
    //           </p>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/mentor/evaluation">
    //           <img src={evaluation} alt="dash" />
    //           <p className={`${activateLink('evaluation')} side-text`}>
    //             Evaluation
    //           </p>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/mentor/program">
    //           <img src={program} alt="dash" />
    //           <p className={`${activateLink('program')} side-text`}>
    //             Program
    //           </p>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/mentor/assignments">
    //           <img src={assignments} alt="dash" />
    //           <p className={`${activateLink('assignments')} side-text`}>
    //             Assignments
    //           </p>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/mentor/events">
    //           <img src={events} alt="dash" />
    //           <p className={`${activateLink('events')} side-text`}>
    //             Events
    //           </p>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/mentor/schedule">
    //           <img src={schedule} alt="dash" />
    //           <p className={`${activateLink('schedule')} side-text`}>
    //             Schedule
    //           </p>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/mentor/networking">
    //           <img src={network} alt="dash" />
    //           <p className={`${activateLink('networking')} side-text`}>
    //             Networking
    //           </p>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/mentor/deal-room">
    //           <img src={deal} alt="dash" />
    //           <p className={`${activateLink('deal-room')} side-text`}>
    //             Deal Room
    //           </p>
    //         </a>
    //       </li>
    //     </ul>
    //   </section>
    //   <section className="side-footer" onClick={() => push('/support')}>
    //     <img src={helpDesk} alt="help" />
    //     <p className="mb-0 side-text" role="button">
    //       Need help? Contact us
    //     </p>
    //   </section>
    // </div>
    <div className="side-main">
      <section className="side-navigator">
        <div>
          <img src={user} alt="profile" />
        </div>
        <h5 className="mb-0 side-header">Hello Micheal Smith</h5>
        <p className="mb-0 side-text">
          {pathname.includes('mentor') ? 'mentor' : ''}
        </p>

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
