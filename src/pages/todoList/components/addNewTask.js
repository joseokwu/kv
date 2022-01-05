import React from 'react'
import { Button, Select, TextArea } from '../../../components'
import girl from '../../../assets/icons/person2.svg'
import guy from '../../../assets/icons/person3.svg'
import close from '../../../assets/icons/closesm.svg'

export const AddNewTask = () => {
  return (
    <div className="px-5">
      <section>
        <TextArea label="Title" rows={1} />
      </section>

      <section className="mt-5">
        <Select label="Task Type" placeholder="Choose task type" />
      </section>

      <section className="mt-5">
        <TextArea label="Description" rows={5} />
      </section>

      <section className="mt-5">
        <TextArea
          label="Contributors"
          placeholder="Search for team members"
          rows={1}
        />
      </section>

      <section className="todo_add_member d-flex justify-content-between mt-3">
        <div className="d-flex">
          <img src={girl} alt="girl" />
          <span className="pt-2 pl-4">Kate Mcbeth Joan</span>
        </div>
        <div className="mt-2">
          <img src={close} alt="close" role="button" />
        </div>
      </section>

      <section className="todo_add_member d-flex justify-content-between mt-3">
        <div className="d-flex">
          <img src={guy} alt="guy" />
          <span className="pt-2 pl-4">Jonathan Fleut</span>
        </div>
        <div className="mt-2">
          <img src={close} alt="close" role="button" />
        </div>
      </section>

      <section className="row d-flex mt-5">
        <div className="col-lg-10 ">
          <TextArea
            label="Activities"
            placeholder="Et integer fringilla.Et integer fringilla."
            rows={1}
          />
        </div>
        <div className="add_new_task col-lg-2 mt-5">
          <button className="mt-1">Add</button>
        </div>
      </section>

      <section className="d-flex justify-content-between mt-3">
        <div className="d-flex">
          <input className="mt-1" type="radio" size="" />
          <p className="pl-4">Et integer fringilla.Et integer fringilla.</p>
        </div>
        <div className="">
          <img src={close} alt="close" role="button" />
        </div>
      </section>

      <section className="d-flex justify-content-between mt-2">
        <div className="d-flex">
          <input className="mt-1" type="radio" size="" />
          <p className="pl-4">Et integer fringilla.Et integer fringilla.</p>
        </div>
        <div className="">
          <img src={close} alt="close" role="button" />
        </div>
      </section>

      <section className="todo_add_new_date mt-5">
          <a href="#!">Add date from calendar+</a>
      </section>

      <section className="todo_btn">
          <Button label="Create task"  />
      </section>
    </div>
  )
}
