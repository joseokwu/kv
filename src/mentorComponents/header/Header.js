import React, { useState } from 'react'
import './header.css'
import logo from '../../assets/images/kvLogo.png'
import notification from '../../assets/icons/notification.svg'
import chat from '../../assets/icons/mentorchat.svg'
import angleDown from '../../assets/icons/angleDown.svg'
import sampleUser from '../../assets/images/sampleUser.png'
import { useHistory } from 'react-router-dom'
import { Notification } from '../notification/Notification'

export const Header = ({ setOpen, open }) => {
  const { push } = useHistory()

  const [openNotice, setOpenNotice] = useState(false)
  return (
    <div className="header-main d-flex align-items-center justify-content-between">
      <section className="d-flex align-items-center">
        <div
          className={`${open ? 'hams-open' : 'hams-close'} hams`}
          onClick={setOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="/mentor/dashboard">
          <img src={logo} alt="logo" />
        </a>
      </section>
      <section className="d-flex align-items-center h-100">
        <ul className="header-list">
          {/* <li>
            <span className="header-chat d-flex align-items-center d-none d-lg-flex">
              <img src={chat} alt="chat" />
              <p className="mb-0 header-text">Chat</p>
            </span>
          </li> */}
          <li style={{cursor: 'pointer'}}
            className="d-flex align-items-center"
            onClick={() => setOpenNotice(!openNotice)}
          >
            <img src={notification} alt="notification" />
          </li>
        </ul>

        <div
          className="d-flex align-items-center h-100"
        >
          <span 
           onClick={() => push('/mentor/profile')}
           className="d-flex align-items-center header-profile d-none d-lg-flex">
            <img src={sampleUser} alt="profile" className="" />
            <p className="mb-0 header-text">Micheal Smith</p>
          </span>
          <img style={{cursor: 'pointer'}} src={angleDown} alt="dropdown" />
        </div>
      </section>

      <Notification
        closeNotice={() => setOpenNotice(false)}
        openNotice={openNotice}
      />
    </div>
  )
}
