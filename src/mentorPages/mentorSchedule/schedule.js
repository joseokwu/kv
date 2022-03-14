import React , {useEffect, useState} from 'react'
import {
  Button,
  Calender,
  Modal,
  Select,
  TextArea,
} from '../../mentorComponents'
import down from '../../assets/icons/downArrow.svg'
import './schedule.css'
import { getAllSchedule } from './../../services/schedule';

export const MentorSchedule = () => {

const [schedules, setSchedule] = useState(null);

  const fetchData = async() =>{
    const res = await getAllSchedule();
  
    setSchedule(res?.dataSource);
  }


useEffect(() =>{

  fetchData();

  return () =>{
    setSchedule()
  }

},[])




  return (
    <div className="px-4 pb-5 mx-3 my-4">
      <Modal id="addAvailabilityModal" title="Add Availability">
        <AddAvailability />
      </Modal>

      <Modal id="createCallScheduleModal" title="Create Call Schedule">
        <CreateCallSchedule />
      </Modal>

      <div className="row schedule  mb-4">
        <div className="d-flex justify-content-between">
          <div>
            <h3>My Schedule</h3>
          </div>
          <div className="d-flex">
            <section className="mt-2 mr-3 my_add_ava">
              <span
                data-toggle="modal"
                data-target="#addAvailabilityModal"
              >
                Add to Availability
              </span>
            </section>

            <section className="mt-2 my_schedule_create">
              <span
                data-toggle="modal"
                data-target="#createCallScheduleModal"
              >
                Create Schedule
              </span>
            </section>
          </div>
        </div>
      </div>

      <div>
        <Calender data={ schedules && schedules} />
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
        <p>
          Visibility :{' '}
          <span>
            Personal <img className="pl-1" src={down} alt="" />
          </span>
        </p>
      </section>

      <section className="create_call_visibility mt-4">
        <p>
          Join with :{' '}
          <span>
            Google meet <img className="pl-1" src={down} alt="" />
          </span>
        </p>
      </section>

      <section className="create_call_visibility mt-4">
        <span>
          Add Location <img className="pl-1" src={down} alt="" />
        </span>
      </section>

      <section className="create_call_visibility mt-4">
        <p>
          Notify me :{' '}
          <span>
            30 minutes before <img className="pl-1" src={down} alt="" />
          </span>
        </p>
      </section>

      <div className="text-right mt-4">
        <Button variant={`btn_main btn_secondary`} label={'Create'} />
      </div>
    </div>
  )
}
