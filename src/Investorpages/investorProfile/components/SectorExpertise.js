import React from "react";
import edit from "../../../assets/icons/edit.svg";
import { Tag, Modal, Select, RowOption, Button } from "../../../components";

export const SectorExpertise = () => {
  return (
    <section className="profile-offering mb-3">
      <span className="text-right d-block">
        <Modal title="Edit Sector Expertise" id="editSectorModal">
          <EditSectorExpertise />
        </Modal>
      </span>

      <div>
        <section className="mb-5">
          <div className="flex-align justify-content-between mb-4">
            <p className="partner-cat-header">Sector Expertise</p>
            <img
              src={edit}
              alt="edit"
              data-toggle="modal"
              data-target="#editSectorModal"
              role="button"
            />
          </div>
          <span
            className="d-flex align-items-center flex-wrap"
            style={{ columnGap: 10, rowGap: 10 }}
          >
            <Tag name="Tech" />
            <Tag name="Engineering" color="#40439A" />
            <Tag name="Career" color="#E31937" />
            <Tag name="Engineering" color="#40439A" />
            <Tag name="Career" color="#E31937" />
          </span>
        </section>

        <section>
          <p className="partner-cat-header mb-4">Preference</p>
          <div
            className="flex-align flex-wrap"
            style={{ columnGap: 16, rowGap: 10 }}
          >
            <span className="cat-tag">B2B</span>
            <span className="cat-tag">B2C</span>
          </div>
        </section>
      </div>
    </section>
  );
};

const EditSectorExpertise = () => {
  const preferred = ["B2B", "B2C"];
  return (
    <div className="px-4">
      <section className="mb-5">
        <Select
          label="Are you interested in any sectors or technologies in particular?"
          placeholder="Choose sectors you are interested in"
          className="edit-input"
        />
      </section>

      <section className="mb-5">
        <p className="mb-3">I Prefer</p>
        <RowOption options={preferred} />
      </section>

      <section className="text-right mb-4">
        <Button label="Save" />
      </section>
    </div>
  );
};
