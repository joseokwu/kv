/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import calender from '../../../assets/icons/calend.svg'
import { Completed_Todolist } from '../../../components/assignmentCard/assignmentCard'

export const Completed = () => {
    return (
        <div className="">
          <div className="todo_assignment d-flex justify-content-between">
        <h4>Total task create: 6</h4>
        <button>
          <img className="pr-2" src={calender} alt="calender" />
          View calender
        </button>
      </div>

      <section className="row mt-4 mb-6">
        <div className="col-xl-6 col-lg-6 mt-5">
          <Completed_Todolist />
        </div>
        <div className="col-xl-6 col-lg-6 mt-5">
          <Completed_Todolist />
        </div>
        <div className="col-xl-6 col-lg-6 mt-5">
          <Completed_Todolist />
        </div>
        <div className="col-xl-6 col-lg-6 mt-5">
          <Completed_Todolist />
        </div>
      </section>
        </div>
    )
}