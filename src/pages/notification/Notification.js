import React from 'react'
import { Tabs, NoticeItem } from '../../components'
import noticeImg from '../../assets/images/sampleNoticeImg.png'
import sampleUser from '../../assets/images/sampleNoticePic.png'
import './notification.css'

export const Notification = () => {
  const tabItems = ['all', 'mentor', 'partner', 'investor', 'admin']

  const noticeItems = [
    { noticeImage: noticeImg },
    { noticeImage: '' },
    { noticeImage: '' },
    { noticeImage: noticeImg },
    { noticeImage: noticeImg },
  ]
  return (
    <div className="wrapper">
      <section className="mb-4">
        <div className="d-flex align-items-center">
          <p className="notice-header">Notification</p>
          <span className="unread-notice">1 Unread</span>
        </div>
      </section>

      <section className="notice-board">
        <Tabs tabItems={tabItems} />

        <div className="mt-5">
          {noticeItems.length > 0 &&
            noticeItems.map((notice, i) => {
              return (
                <NoticeItem
                  userImage={sampleUser}
                  noticeImage={notice.noticeImage}
                  container="page"
                />
              )
            })}
        </div>
      </section>
    </div>
  )
}
