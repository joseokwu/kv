import React from 'react'
import { Button, Modal, Select, TextArea } from '../../components'
import down from '../../assets/icons/downArrow.svg'
import './schedule.css'

export const Schedule = () => {
  return (
    <div className="px-4 pb-5 mx-3 my-4">
      <Modal id="addAvailabilityModal" title="Add Availability">
        <AddAvailability />
      </Modal>

      <Modal id="createCallScheduleModal" title="Create Call Schedule">
        <CreateCallSchedule />
      </Modal>

      <div className="row schedule d-flex justify-content-between">
        <div>
          <h3>My Schedule</h3>
        </div>

        <div className="d-flex">
          <section className="mt-2 mr-3 my_schedule_create">
            <a
              data-toggle="modal"
              href="#!"
              data-target="#addAvailabilityModal"
            >
              Add to Availability
            </a>
          </section>

          <section className="mt-2 my_schedule_create">
            <a
              data-toggle="modal"
              data-target="#createCallScheduleModal"
              href="#!"
            >
              Create Schedule
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}

const AddAvailability = () => {
  return (
    <div className="px-4 pb-3">
      <TextArea
        label={'Date'}
        placeholder={'Thursday 17th Oct 2021'}
        rows={1}
      />
      <div className="row mt-3">
        <div className="col-lg-6">
          <Select label={'Start time'} placeholder={'Time'} />
        </div>
        <div className="col-lg-6">
          <Select label={'End time'} placeholder={'Time'} />
        </div>
      </div>
      <div className="text-right mt-4">
        <Button variant={`btn_main btn_secondary`} label={'Add'} />
      </div>
    </div>
  )
}

const CreateCallSchedule = () => {
  return (
    <div className="px-4 pb-3">
      <section className="">
        <TextArea
          label={'Titel of Schedule'}
          placeholder={'Enter event title'}
          rows={1}
        />
      </section>

      <section className="mt-4">
        <TextArea
          label={'Description'}
          placeholder={'Describe event'}
          rows={1}
        />
      </section>

      <section className="mt-4">
        <TextArea
          label={'Invite'}
          placeholder={'Choose a startup / Mentor / Investor'}
          rows={1}
        />
      </section>

      <section className="mt-4">
        <TextArea
          label={'Date'}
          placeholder={'Thursday 17th Oct 2021'}
          rows={1}
        />
      </section>

      <section className="row mt-4">
        <div className="col-lg-6">
          <Select label={'Start time'} placeholder={'Time'} />
        </div>
        <div className="col-lg-6">
          <Select label={'End time'} placeholder={'Time'} />
        </div>
      </section>

      <section className="create_call_visibility mt-4">
        <p>Visibility : <a href="#!">Personal <img className="pl-1" src={down} alt=""/></a></p>
      </section>

      <section className="create_call_visibility mt-4">
        <p>Join with : <a href="#!">Google meet <img className="pl-1" src={down} alt=""/></a></p>
      </section>

      <section className="create_call_visibility mt-4">
        <a href="#!">Add Location <img className="pl-1" src={down} alt=""/></a>
      </section>

      <section className="create_call_visibility mt-4">
        <p>Notify me : <a href="#!">30 minutes before <img className="pl-1" src={down} alt=""/></a></p>
      </section>

      <div className="text-right mt-4">
        <Button variant={`btn_main btn_secondary`} label={'Create'} />
      </div>
    </div>
  )
}
