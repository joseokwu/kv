import React, { useState } from "react";
import { ProgressBar, SmallModal } from "../../../../../Startupcomponents";
import contributor from "../../../../../assets/images/contrib.svg";
import { DraftMapModal } from "./roadMapTodo.styled";
import girl from "../../../../../assets/images/smallgirl.svg";
import guy from "../../../../../assets/images/smallguy.svg";
import { formatDate } from "../../../../../utils/helpers";

export const RoadMapTodo = ({ progress = 0, data = {} }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {showModal ? (
        <SmallModal id="draftModal" title="" closeModal={setShowModal}>
          <DraftModal />
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
          {data?.tabName}
        </p>
        <span>
          <p className="todo-info-header">Due Data</p>
          <p className="todo-date">{formatDate(data?.dueDate)}</p>
        </span>

        <span>
          <p className="todo-info-header">Contributors</p>
          <div className="todo-contributor">
            {data?.contributors?.length > 0 &&
              data?.contributors?.map((d, i) => {
                return <img src={d} alt="contributor" />;
              })}
          </div>
        </span>
        <span style={{ flexBasis: "22%" }}>
          <p className="todo-info-header">Progress</p>
          <ProgressBar
            isMeasured={true}
            className="todo-progress"
            progress={progress}
          />
        </span>
      </div>
    </div>
  );
};

export const DraftModal = () => {
  const actArr = [1, 2, 3, 4];
  return (
    <DraftMapModal>
      <div className="mx-4">
        <div>
          <h4>Drafting of business structure</h4>
        </div>
        <div className="d-flex my-5">
          <p className="pe-3 pt-2">Contributors:</p>
          <img className="pr-2" src={girl} alt="girl" />
          <img src={guy} alt="girl" />
        </div>
        <div>
          <h6>Description</h6>
          <article>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet,
            facilisi sodales cursus tellus nam ut. Enim, at imperdiet praesent
            velit. Eget consequat, sollicitudin molestie curabitur lobortis
            imperdiet. Vulputate malesuada tortor sit mi laoreet. Iaculis quis
            pretium urna.
          </article>
        </div>
        <div className="mt-5">
          <h6>Activities</h6>
          {actArr.map((i) => (
            <div className="d-flex my-3">
              <input className="me-4 mt-1" type="radio" />
              <article>Drafting of business structure</article>
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
