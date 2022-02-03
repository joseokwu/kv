import React from 'react'
import { TextArea } from '../../../Startupcomponents'
import girl from '../../../assets/icons/person2.svg'
import guy from '../../../assets/icons/person3.svg'
import close from '../../../assets/icons/closesm.svg'

export const AddMembers = () => {
  return (
    <div className="px-5">
      <TextArea
        label="Contributors"
        placeholder="Search for team members"
        rows={1}
      />

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

      <section className="add_member_btn mt-5 mb-5">
         <button className="mt-5">Add member</button>
      </section>
    </div>
  )
}
