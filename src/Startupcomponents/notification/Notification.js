import React from 'react'
import { useHistory } from 'react-router-dom'
import close from '../../assets/icons/closeButton.svg'
import './notification.css'
import sampleUser from '../../assets/images/sampleNoticePic.png'
import noticeImg from '../../assets/images/sampleNoticeImg.png'
import { NoticeItem } from '..'

export const Notification = ({ closeNotice, openNotice }) => {
  // const noticeItems = [
  //   { noticeImage: noticeImg },
  //   { noticeImage: '' },
  //   { noticeImage: '' },
  //   { noticeImage: noticeImg },
  //   { noticeImage: noticeImg },
  // ]
  const noticeItems = [{noticeImage: ""}]
  const {push} = useHistory();

  return (
    <div
      className={`kv-notification shadow-sm ${
        openNotice ? 'open-notice' : 'close-notice'
      }`}
    >
      <section className="notice-head position-relative">
        <img
          src={close}
          alt="close"
          className="close-notice-icon"
          role="button"
          onClick={closeNotice}
        />
        <div className="d-flex align-items-center">
          <p className="notice-header">Notification</p>
          <span className="unread-notice">0 Unread</span>
        </div>
      </section>

      <section className="kv-notice-main">
        <div className="d-flex justify-content-between">
          <select id="filter" className="mb-3 d-flex justify-content-between">
            <option value="All">All</option>
          </select>

          <div className="noty-all">
            <span onClick={() => push('/startup/notification')}>See All</span>
          </div>
        </div>

        {noticeItems.length > 0 &&
          noticeItems.map((items, i) => {
            return (
              <NoticeItem
                noticeImage={items.noticeImage}
                userImage={sampleUser}
                key={`notice-items-${i}`}
              />
            )
          })}
      </section>
    </div>
  )
}
