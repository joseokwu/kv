import React, { useState } from 'react'
import './todoList.css'
import lady from '../../assets/icons/person1.svg'
import girl from '../../assets/icons/person2.svg'
import guy from '../../assets/icons/person3.svg'
import { Tabs } from '../../components/tabs/Tabs'
import { Assignment } from './components/assignment'
import { ModalCus } from '../../components'
import { AddMembers } from './components/addMembers'
import { AddNewTask } from './components/addNewTask'
import { Completed } from './components/completed'
import { Modal } from '../../components/modal/Customodal'

export const StartupTodoList = ({ history }) => {
const [showModal, setShowModal] = useState(false);
const [openModal, setOpenModal] = useState(false);

  const {
    location: { hash },
  } = history

  const renderContent = () => {
    switch (hash) {
      case '#Assignment':
        return <Assignment />

      case '#Task':
        return <Assignment />

      case '#Completed':
        return <Completed />

      default:
        return <Assignment />
    }
  }

  const tabItems = ['Assignment', 'Task', 'Completed']

  return (
    <div className="row m-4">
      {showModal ? (<ModalCus id="addMembers" title="Add member" closeModal={setShowModal}>
        <AddMembers />
      </ModalCus>) : (<span></span>)}


      {openModal ? (<ModalCus id="addNewTask" title="Add new task" closeModal={setOpenModal}>
        <AddNewTask />
      </ModalCus>) :  (<span></span>)}

      {/* <Modal id="addNewTask" title="Add new task">
        <AddNewTask />
      </Modal> */}
      <div className="d-flex justify-content-between">
        <div className=" todo_header mt-4">
          <h3>To-Do List</h3>
        </div>

        <div className="d-flex">
          <section className="mt-4 event_people">
            <img src={lady} alt="doc" />
            <img src={girl} alt="doc" />
            <img src={guy} alt="doc" />
          </section>

          <section className="d-flex mt-4">
            <button
              className="todo_light_btn ml-4 mr-4"
              // data-toggle="modal"
              data-target="#addMembers"
              onClick={() => setShowModal(true)}
            >
              Add members
            </button>
            <button
              className="todo_dark_btn"
              // data-toggle="modal"
              data-target="#addNewTask"
              onClick={() => setOpenModal(true)}
            >
              Add new task
            </button>
          </section>
        </div>
      </div>

      <div className="col-xl-12 mt-5">
        <Tabs tabItems={tabItems} />
      </div>

      <div className="col-lg-12 mt-5">
        <section className="mt-1">{renderContent()}</section>
      </div>
    </div>
  )
}
