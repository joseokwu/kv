import React from 'react'
import './schedule.css'

export const Schedule = () => {
  return (
    <div className="px-4 pb-5 mx-3 my-4">
      <div className="row schedule d-flex justify-content-between">
        <div>
          <h3>My Schedule</h3>
        </div>

        <div className="d-flex">
          <section className="mt-2 mr-3 event_card_footer">
            <a href="#!">Add to schedule</a>
          </section>

          <section className="mt-2 my_schedule_create">
            <a href="#!">Add to schedule</a>
          </section>
        </div>
      </div>
    </div>
  )
}
