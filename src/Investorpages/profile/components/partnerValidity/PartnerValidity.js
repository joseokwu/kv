import React from "react";
import edit from "../../../../assets/icons/edit.svg";
import { Modal, Select, Button } from "../../../../components";

const PartnerValidity = ({ data }) => {
  return (
    <section className="profile-offering">
      <span className="text-right d-block">
        <img
          src={edit}
          alt="edit"
          data-toggle="modal"
          data-target="#editValidity"
          role="button"
        />
        <Modal title="Edit" id="editValidity">
          <EditValidity />
        </Modal>
      </span>

      <div
        className="d-flex align-items-center justify-content-between mt-3"
        style={{ marginBottom: 39 }}
      >
        <section className="mb-4">
          <p className="partner-cat-txt mb-3">Partnership Validity</p>
          <span className="cat-tag"> { data?.validity} </span>
        </section>
        <section className="mb-4">
          <p className="partner-cat-txt mb-3">Turnaround Time</p>
          <span className="cat-tag"> { data?.turnarround } </span>
        </section>
      </div>

      <p className="partner-cat-txt mb-3">Free Credit Value Alloted</p>
      <section className="free-credit-answer d-flex align-items-center">
        <span></span>
        <p>Yes</p>
      </section>
    </section>
  );
};

export default PartnerValidity;

const EditValidity = () => {
  return (
    <div className="px-4 pb-4">
      <section className="d-flex mb-4" style={{ columnGap: 23 }}>
        <div style={{ flexBasis: "50%" }}>
          <Select label="Partnership Validity" className="modal-select" />
        </div>
        <div style={{ flexBasis: "50%" }}>
          <Select label="Turnaround Time" className="modal-select" />
        </div>
      </section>

      <section>
        <p className="modal-free-txt">Free Credit Value Alloted</p>
        <span className="d-flex align-items-center" style={{ columnGap: 16 }}>
          <button className="yes-btn">Yes</button>
          <button className="no-btn">No</button>
        </span>
      </section>
      <section className="text-right">
        <Button label="Save" />
      </section>
    </div>
  );
};
