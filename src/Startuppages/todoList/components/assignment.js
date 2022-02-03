/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import calender from '../../../assets/icons/calend.svg'
import { ModalCus, TextArea } from '../../../Startupcomponents'
import {
  AssignmentCard,
  Assignment_Canvas_Card,
} from '../../../Startupcomponents/assignmentCard/assignmentCard'
import lady from '../../../assets/icons/person1.svg'
import girl from '../../../assets/icons/person2.svg'
import guy from '../../../assets/icons/person3.svg'

export const Assignment = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="">
      {showModal ? (
        <ModalCus id="assignmentModal" title="" closeModal={setShowModal}>
          <AssignmentModal />
        </ModalCus>
      ) : (
        <span></span>
      )}
      <div className="todo_assignment d-flex justify-content-between">
        <h4>Total task create: 6</h4>
        <button>
          <img className="pr-2" src={calender} alt="calender" />
          View calender
        </button>
      </div>

      <section className="row">
        <div
          className="col-xl-6 col-lg-6 mt-5"
          // data-toggle="modal"
          data-target="#assignmentModal"
          onClick={() => setShowModal(true)}
        >
          <AssignmentCard />
        </div>
        <div className="col-xl-6 col-lg-6 mt-5">
          <Assignment_Canvas_Card />
        </div>
        <div className="col-xl-6 col-lg-6 mt-5">
          <AssignmentCard />
        </div>
        <div className="col-xl-6 col-lg-6 mt-5">
          <Assignment_Canvas_Card />
        </div>
      </section>
    </div>
  )
}

const AssignmentModal = () => {
  return (
    <div className="px-5 pb-5">
      <section className="assignment_modal_header">
        <h4>Assignment</h4>
      </section>

      <section className="d-flex mt-5">
        <p className="mr-4">Task type</p>
        <span class="today_tag">Assignment</span>
      </section>

      <section className="d-flex mt-5">
        <div className="mr-5">
          <p className="pending_date pr-4">
            <span>50</span> September
          </p>
        </div>

        <div className="d-flex mt-1">
          <p>Assigned to </p>
          <section className="ml-5">
            <img className="pr-3" src={girl} alt="girl" />
            <img src={guy} alt="guy" />
          </section>
        </div>
      </section>

      <section className="assignment_modal_description mt-5">
        <h3>Description</h3>
        <p className="pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet,
          facilisi sodales cursus tellus nam ut. Enim, at imperdiet praesent
          velit. Eget consequat, sollicitudin molestie curabitur lobortis
          imperdiet. Vulputate malesuada tortor sit mi laoreet. Iaculis quis
          pretium urna.
        </p>
      </section>

      <section className="assignment_modal_description mt-5">
        <h3>Task Activities</h3>
      </section>

      <section className="mt-4">
        <div className="d-flex">
          <input className="mt-1" type="radio" size="" />
          <p className="pl-5">Drafting of business structure</p>
        </div>
        <div className="d-flex mt-4">
          <input className="mt-1" type="radio" size="" />
          <p className="pl-5">Drafting of business structure</p>
        </div>
        <div className="d-flex mt-4">
          <input className="mt-1" type="radio" size="" />
          <p className="pl-5">Drafting of business structure</p>
        </div>
        <div className="d-flex mt-4">
          <input className="mt-1" type="radio" size="" />
          <p className="pl-5">Drafting of business structure</p>
        </div>
      </section>

      <section className="assignment_modal_description mt-5">
        <h3>Remark</h3>
        <TextArea rows={6}/>
      </section>

      <section className="assignment_modal_remark d-flex mt-5">
        <img src={lady} alt="lady"/>
        <p className="pt-2 pl-3">Janice Atkinson</p>
      </section>

      <section className="mt-3">
        <TextArea placeholder={'@chris Anthony Adjust the remaining documents and upload'} rows={1}/>
      </section>

      <section className="assignment_complete_btn mt-5">
        <button>Complete</button>
      </section>
    </div>
  )
}
