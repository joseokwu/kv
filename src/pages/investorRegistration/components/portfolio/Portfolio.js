import React from "react";
import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";
import add from "../../../../assets/icons/add.svg";
import { Button, Modal, TextArea, TextField } from "../../../../components";
import { useHistory } from "react-router-dom";
import "./portfolio.css";

export const Portfolio = () => {
  const { push } = useHistory();
  return (
    <div className="register-form-wrap">
      <Modal
        title="Invite Start-ups"
        id="portfolio"
        subTitle="Invite your startups by additing their email address below. Startups will receive personalised email notification to register their details at knight ventures platform"
      >
        <InviteStartUps />
      </Modal>
      <h3>Start-up portfolio</h3>
      <p>
        This will help us provide startups personalised for your preferences
      </p>

      <FormCard className="mb-0 card-for-invite d-flex align-items-center justify-content-center">
        <section
          className="d-flex align-items-center invite-strip"
          data-toggle="modal"
          data-target="#portfolio"
        >
          <img src={add} alt="add" />
          <p>Invite your portfolio startups</p>
        </section>
      </FormCard>
      <section className="d-flex justify-content-end mt-3">
        <p className="do-later">Do this later</p>
      </section>

      <section className="d-flex align-items-center justify-content-between mt-5">
        <button
          className="back-btn"
          onClick={() => {
            push("#approach");
          }}
        >
          Go Back
        </button>

        <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
          <Button label="Save" variant="secondary" />
          <Button label="Done" />
        </div>
      </section>
    </div>
  );
};

const InviteStartUps = () => {
  return (
    <div className="px-5 pb-5">
      <section className="mb-5">
        <TextField
          type="email"
          label="Email"
          placeholder="jamil@gmail.com"
          className="edit_input"
        />
      </section>

      <section className="mb-5">
        <TextField label="Subject" className="edit_input" />
      </section>

      <section className="mb-5">
        <TextArea label="Message (recommended)" placeholder="Send a message" />
      </section>

      <section className="d-flex justify-content-between mt-5 pt-4">
        <button className="back-btn" data-dismiss="modal">
          Cancel
        </button>

        <Button label="Send Invitation" />
      </section>
    </div>
  );
};
