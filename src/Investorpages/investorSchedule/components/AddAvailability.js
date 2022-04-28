import React from "react";
import { Modal, Select, TextField, Button } from "../../../components";
import edit from "../../../assets/icons/editIcon.svg";
import deleteIcon from "../../../assets/icons/delete.svg";

export const AddAvailability = () => {
  return (
    <div>
      <Modal title="Add Availability" id="addAvailable">
        <section className="row px-4">
          <div className="mb-0 col-lg-6 mb-4">
            <Select
              label="From"
              placeholder="Time"
              className="create-text-field"
            />
          </div>

          <div className="mb-0 col-lg-6 mb-4">
            <Select
              label="to"
              placeholder="Time"
              className="create-text-field"
            />
          </div>

          <div className="col-12 mb-4">
            <TextField
              label="Dates"
              type="date"
              className="create-text-field"
            />
          </div>

          <div className="col-12 border-top py-4">
            <AddedAvailability />
            <AddedAvailability />
            <AddedAvailability />
          </div>

          <div className="mb-4 text-right">
            <Button label="Add" variant="secondary" />
          </div>
        </section>
      </Modal>
    </div>
  );
};

const AddedAvailability = () => {
  return (
    <div className="d-flex align-items-center justify-content-between availability mb-3">
      <p className="mb-0">23 October, 2021 (From 9:00am - To 5:00pm)</p>
      <section>
        <img src={edit} alt="edit" className="mr-2" />
        <img src={deleteIcon} alt="delete" />
      </section>
    </div>
  );
};
