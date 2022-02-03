import React from "react";
import edit from "../../../assets/icons/edit.svg";
import { Button, Modal, RowOption } from "../../../components";

export const InvestorTypes = () => {
  return (
    <section className="profile-offering">
      <span className="text-right d-block">
        <img
          src={edit}
          alt="edit"
          data-toggle="modal"
          data-target="#editInfo"
          role="button"
        />
        <Modal title="Edit Investor Information" id="editInfo">
          <EditInfo />
        </Modal>
      </span>

      <article
        className="d-flex my-4 justify-content-between"
        style={{ columnGap: 16 }}
      >
        <div>
          <p className="partner-cat-txt mb-3">Angel Network</p>
          <section className="free-credit-answer d-flex align-items-center">
            <span></span>
            <p>Yes</p>
          </section>
        </div>
        <span className="cat-tag" style={{ width: "fit-content" }}>
          Solo investor
        </span>
      </article>

      <div className="mb-4">
        <p className="partner-cat-txt mb-3">Lead investor</p>
        <section className="free-credit-answer d-flex align-items-center">
          <span></span>
          <p>Yes</p>
        </section>
      </div>

      <div>
        <p className="partner-cat-txt mb-3">Mentor</p>
        <section className="free-credit-answer d-flex align-items-center">
          <span></span>
          <p>Yes</p>
        </section>
      </div>
    </section>
  );
};

const EditInfo = () => {
  return (
    <div className="px-4">
      <section className="mb-4">
        <p className="mb-3">Are you a Lead investor</p>
        <RowOption options={["yes", "no"]} />
      </section>

      <section className="mb-4">
        <p className="mb-3"> Have you angel invested before?</p>
        <RowOption options={["yes", "no"]} />
      </section>

      <section className="mb-4">
        <p className="mb-3"> Have you angel invested before?</p>
        <RowOption options={["Solo", "Syndicate", "Both"]} />
      </section>

      <section className="mb-4">
        <p className="mb-3"> Would you like to mentor startups?</p>
        <RowOption options={["yes", "no"]} />
      </section>

      <section className="text-right">
        <Button label="Save" />
      </section>
    </div>
  );
};
