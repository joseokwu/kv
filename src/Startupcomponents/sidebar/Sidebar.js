import React, { useEffect, useState } from 'react'
import './sidebar.css'
import { useHistory } from 'react-router'
import user from '../../assets/images/sampleUserSide.png'
import dashboard from '../../assets/icons/dashboard.svg'
import startup from '../../assets/icons/startupApplicants.svg'
import event from '../../assets/icons/eventIcon.svg'
import helpDesk from '../../assets/icons/helpDesk.svg'
import { startUpRoutes, dashboardRoutes } from '../../constants/sidebarRoutes'
import { useActivity } from '../../hooks/useBusiness';






// export const Sidebar = () => {
//   const {
//     location: { pathname },
//     push,
//   } = useHistory()

//   const activateLink = (path) => {
//     return pathname.includes(path) ? 'active-side' : ''
//   }

//   const [navigator, setNavigator] = useState([])

//   useEffect(() => {
//     if (pathname.includes('Startup')) {
//       setNavigator(dashboardRoutes)
//     }
//   }, [pathname])

 

//   return (
//     <div className="side-main">
//       <section className="side-navigator">
//         <div>
//           <img src={user} alt="profile" />
//         </div>
//         <h5 className="mb-0 side-header">Hello Micheal Smith</h5>
//         <p className="mb-0 side-text">
//           {pathname.includes('investor') ? 'Investor' : 'Partner'}
//         </p>

//         <ul className="side-list">
//           {navigator.length > 0 &&
//             navigator.map((nav, i) => {
//               return (
//                 <li>
//                   <a href={nav.path}>
//                     <img src={nav.icon} alt="dash" />
//                     <p className={`${activateLink(nav.activator)} side-text`}>
//                       {nav.title}
//                     </p>
//                   </a>
//                 </li>
//               )
//             })}
//         </ul>
//       </section>
//       <section className="side-footer mt-5" onClick={() => push('/support')}>
//         <img src={helpDesk} alt="help" />
//         <p className="mb-0 side-text" role="button">
//           Need help? Contact us
//         </p>
//       </section>
//     </div>
//   )
// }

export const StartupSideBar = () => {
  const {
    state: { path },
    changePath,
  } = useActivity()

  const activateLink = (pathNum) => {
    return path === pathNum ? 'active-side-start' : 'side-text-start'
  }

  return (
    <div className="start-main">
      <section className="side-navigator position-fixed">
        <ul className="side-list-start">
          {startUpRoutes &&
            startUpRoutes.map((nav, i) => {
              return (
                <li key={i}>
                  <span onClick={() => changePath(nav.path)}>
                    <p className={`${activateLink(nav.path)} side-text-start`}>
                      {nav.title}
                    </p>
                  </span>
                </li>
              )
            })}
        </ul>
      </section>
    </div>
  )
}