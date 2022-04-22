import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/kvLogo.png'
import notification from '../../assets/icons/notification.svg'
import chat from '../../assets/icons/chat.svg'
import angleDown from '../../assets/icons/angleDown.svg'
import sampleUser from '../../assets/images/sampleUser.png'
import { Notification } from '../index'
import view from '../../assets/icons/vp.svg'
import edit from '../../assets/icons/ep.svg'
import logout from '../../assets/icons/logout.svg'
import './header.css'
import { useAuth } from '../../hooks';

export const Header = ({ setOpen, open }) => {
  const {
    push,
    location: { pathname },
  } = useHistory()

  const getCurrentDashboard = () => {
    if (pathname.includes('investor')) {
      return '/investor/dashboard'
    } else {
      return '/booster/dashboard'
    }
  }

const { stateAuth } = useAuth();

//console.log(stateAuth)

  const [openNotice, setOpenNotice] = useState(false)
  return (
    <div className="header-main d-flex align-items-center justify-content-between">
      <section className="d-flex align-items-center">
        <div
          className={`${open ? 'hams-open' : 'hams-close'} hams`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to={getCurrentDashboard()}>
          <img src={logo} alt="logo" />
        </Link>
      </section>
      <section className="d-flex align-items-center h-100">
        <ul className="header-list">
          {/* <li>
            <span className="header-chat d-flex align-items-center">
              <img src={chat} alt="chat" />
              <p className="mb-0 header-text">Chat</p>
            </span>
          </li> */}
          <li
            style={{ cursor: 'pointer' }}
            className="d-flex align-items-center"
            onClick={() => setOpenNotice(!openNotice)}
          >
            <img src={notification} alt="notification" />
          </li>
        </ul>

        <div className="d-flex align-items-center h-100">
          <span className="d-flex align-items-center header-profile d-none d-lg-flex">
          <img src={ stateAuth?.logo ?? `https://ui-avatars.com/api/?name=${stateAuth?.username}`
             } alt="profile" className="" />
            <p className="mb-0 header-text"> { stateAuth.username } </p>
          </span>
          <div>
            <HeaderDropdownMenu />
          </div>
        </div>
      </section>

      <Notification
        closeNotice={() => setOpenNotice(false)}
        openNotice={openNotice}
      />
    </div>
  )
}

const HeaderDropdownMenu = () => {
  const {
    push,
    location: { pathname },
  } = useHistory()
  const { userLogout } = useAuth();

  const getCurrentProfile = () => {
    if (pathname.includes('investor')) {
      return () => push('/investor/profile')
    } else {
      return () => push('/booster/profile')
    }
  }


  return (
    <div className="dropdown">
      <button
        className="d-flex align-items-center filter-btn p-0"
        data-toggle="dropdown"
        style={{
          columnGap: 7,
          background: 'transparent',
          height: 'fit-content',
        }}
      >
        <img src={angleDown} alt="dropdown" />
      </button>
      <div className="dropdown-menu headerMenu drop-menu px-2 py-3">
        <button
          className="dropdown-item text-center py-2"
          onClick={getCurrentProfile()}
        >
          {' '}
          <img className="pe-1" src={view} alt="" /> View Profile
        </button>
        <button
         onClick={() => userLogout()}
         className="dropdown-item text-center py-2 my-2">
          {' '}
          <img className="pe-1" src={edit} alt="" /> Edit Profile
        </button>
        <button
          className="dropdown-item text-center py-2"
          style={{ color: '#D62828' }}
          onClick={() => userLogout()}
        >
          {' '}
          <img className="pe-1" src={logout} alt="" /> Log Out
        </button>
      </div>
    </div>
  )
}
