import React, { useState } from "react";
import {
  MilestoneList,
  SmallModal,
  TextArea,
  TextField,
} from "../../../../Startupcomponents";
import { MilestoneModal } from "./milestone.styled";

export const Milestone = ({ data = [] }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {showModal ? (
        <SmallModal
          id="updateMilestoneModal"
          title=""
          closeModal={setShowModal}
        >
          <UpdateMilestoneModal />
        </SmallModal>
      ) : (
        <span></span>
      )}
      <section className="d-flex justify-content-end">
        <button
          className="teamBtn"
          data-target="#updateMilestoneModal"
          onClick={() => setShowModal(true)}
        >
          Update
        </button>
      </section>
      <MilestoneList data={data} />
    </div>
  );
};

export const UpdateMilestoneModal = () => {
  return (
    <MilestoneModal>
      <div className="milestoneModal mx-3">
        <div>
          <h4>Update Milestone</h4>
        </div>
        <div className="mt-5">
          <TextArea label="Title" rows={1} />
        </div>
        <div className="my-3">
          <TextArea label="Description" rows={4} />
        </div>
        <TextArea
          className="col-lg-8 mt-1"
          label="Date of achievement"
          placeholder={"yyyy-mm-dd"}
          rows={1}
        />
        <div className="mt-5">
          <button>Create task</button>
        </div>
      </div>
    </MilestoneModal>
  );
};
