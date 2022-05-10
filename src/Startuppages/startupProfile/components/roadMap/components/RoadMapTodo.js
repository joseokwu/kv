import React, { useState } from "react";
import { ProgressBar, SmallModal } from "../../../../../Startupcomponents";
import contributor from "../../../../../assets/images/contrib.svg";
import { DraftMapModal } from "./roadMapTodo.styled";
import girl from "../../../../../assets/images/smallgirl.svg";
import guy from "../../../../../assets/images/smallguy.svg";
import { formatDate } from "../../../../../utils/helpers";
import moment from 'moment';

export const RoadMapTodo = ({ progress = 0, data = {} }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {showModal ? (
        <SmallModal id="draftModal" title="" closeModal={setShowModal}>
          <DraftModal data={data} />
        </SmallModal>
      ) : (
        <span></span>
      )}
      <div
        style={{ cursor: "pointer" }}
        className="road-map-todo"
        data-target="#draftModal"
        onClick={() => setShowModal(true)}
      >
        <p className="todo-task" style={{ flexBasis: "37%" }}>
          {data?.title}
        </p>
        <span>
          <p className="todo-info-header">Due Data</p>
          <p className="todo-date">{data?.dueDate}</p>
        </span>

        <span>
          <p className="todo-info-header">Contributors</p>
          <div className="todo-contributor">
            {data?.teamMember?.length > 0 &&
              data?.teamMember?.map((d, i) => {
                return <img src={d?.avatar} 
                key={i} alt="contributor"
                className="mx-2"
                 style={{
                  width:'40px', height:'40px', borderRadius:'60px'
                }} />;
              })}
          </div>
        </span>
        <span style={{ flexBasis: "22%" }}>
          <p className="todo-info-header">Progress</p>
          <ProgressBar
            isMeasured={true}
            className="todo-progress"
            progress={data?.completed}
          />
        </span>
      </div>
    </div>
  );
};

export const DraftModal = ({data}) => {
  const actArr = [1, 2, 3, 4];
  return (
    <DraftMapModal>
      <div className="mx-4">
        <div>
          <h4> {data?.title} </h4>
        </div>
        <div className="d-flex my-5">
          <p className="pe-3 pt-2">Contributors:</p>
          {data?.teamMember?.length > 0 &&
              data?.teamMember?.map((d, i) => {
                return <img src={d?.avatar} 
                key={i} alt="contributor"
                className="mx-2"
                 style={{
                  width:'40px', height:'40px', borderRadius:'60px'
                }} />;
              })}
        </div>
        <div>
          <h6>Description</h6>
          <article>
          {data?.description }
          </article>
        </div>
        <div className="mt-5">
          <h6>Activities</h6>
          {data?.activities?.map((item , i) => (
            <div className="d-flex my-3" key={i} >
              <input className="me-4 mt-1"
              onChange={() => {}}
               checked={item?.checked} type="radio" />
              <article> { item?.name } </article>
            </div>
          ))}
        </div>
        <div className="my-5">
          <button>Complete</button>
        </div>
      </div>
    </DraftMapModal>
  );
};
