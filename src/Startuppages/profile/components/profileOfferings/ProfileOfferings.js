import React from "react";
import "./profileOffering.css";
import edit from "../../../../assets/icons/edit.svg";
import { TextArea, Modal, Button } from "../../../../Startupcomponents";

const ProfileOfferings = () => {
  const data = [
    { name: "Offerings" },
    { name: "Eligibility Criteria " },
    { name: "Important Note" },
    { name: "Process" },
  ];
  return (
    <div className="profile-offering">
      <section className="text-right pb-0">
        <img
          src={edit}
          alt="edit"
          data-toggle="modal"
          data-target="#editOffering"
          role="button"
        />
        <Modal title="Edit Offerings" id="editOffering">
          <EditOfferings />
        </Modal>
      </section>

      {data.map((d, i) => {
        return (
          <OfferContent title={d.name} i={i} key={i} length={data.length} />
        );
      })}
    </div>
  );
};

export default ProfileOfferings;

const OfferContent = ({ title, i, length }) => {
  return (
    <section
      className={`profile-offer-content ${
        i === length - 1 ? "pb-0 border-0" : ""
      }`}
    >
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation <span>see more</span>
      </p>
    </section>
  );
};

const EditOfferings = () => {
  return (
    <div className="px-4">
      <section className="mb-4">
        <TextArea
          label="Offerings"
          placeholder="Enter offering description"
          rows="6"
        />
      </section>

      <section className="mb-4">
        <TextArea
          label="Eligibility Criteria "
          placeholder="Eligibility Criteria "
          rows="6"
        />
      </section>

      <section className="mb-4">
        <TextArea
          label="Important Note"
          placeholder="Enter your terms and conditions"
          rows="6"
        />
      </section>

      <section className="mb-4">
        <TextArea label="Process" placeholder="Enter offer process" rows="6" />
      </section>

      <section className="text-right mb-3">
        <Button label="Save" />
      </section>
    </div>
  );
};
