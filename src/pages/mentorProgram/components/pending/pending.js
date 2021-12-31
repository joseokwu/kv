import React from 'react'
import bigClock from '../../../../assets/icons/bigclock.svg'
import { Modal, ReadMore } from '../../../../components'
import './pending.css'
import { RescheduleModal } from './rescheduleModal'

export const Pending = () => {
  return (
    <div className="">
      <Modal id="rescheduleModal" title="Request to reschedule">
        <RescheduleModal />
      </Modal>
      <div className="program_card">
        <section className="pending_program_card p-4">
          <div className="d-flex justify-content-between">
            <p className="pending_program_title">Corporate Training</p>
            <span class="pending_tag">Pending</span>
          </div>

          <section
            className="d-flex align-items-center justify-content-between mt-2"
            style={{ columnGap: 10 }}
          >
            <p className="pending_date">
              <span>50</span> September
            </p>
            <p className="pending_time">
              <img src={bigClock} alt="clock" /> 10:00pm - 12pm
            </p>
          </section>

          <section className="mt-3">
            <p>
              <ReadMore>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Enim lectus morbi elementum
                eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ReadMore>
            </p>
          </section>

          <section className=" d-flex justify-content-between mt-4">
            <div className="d-flex">
              <div className="mr-3 program_accept_btn">
                <button>Accept</button>
              </div>
              <div className="program_reschedule_btn">
                <button data-toggle="modal" data-target="#rescheduleModal">Reschedule</button>
              </div>
            </div>

            <div className="program_ignore_btn">
              <button>Ignore</button>
            </div>

          </section>
        </section>
      </div>
    </div>
  )
}
