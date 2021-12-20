import React, { useState } from "react";
import sampleConnect from "../../assets/images/sampleTeamMember.png";
import more from "../../assets/icons/more.svg";
import { Button, Modal } from "../../components/index";

export const GroupCard = () => {
  return (
    <div className="connected-card py-4" style={{ borderRadius: 10 }}>
      <Modal id="groupModal" title="Fintech Investment Group">
        <GroupModal />
      </Modal>
      <section
        className="d-flex align-items-start"
        style={{ rowGap: 10, columnGap: "1rem" }}
      >
        <img src={sampleConnect} alt="connect" className="rep" />
        <div>
          <p className="name">Fintech Investment Group</p>
          <p className="position py-2">My Close company group of Idealist</p>

          <p className="count" data-toggle="modal" data-target="#groupModal">
            19 members
          </p>
        </div>

        <div>
          <GroupMenu />
        </div>
      </section>
    </div>
  );
};

const GroupMenu = () => {
  return (
    <div className="dropdown">
      <button
        className="d-flex align-items-center filter-btn p-0"
        style={{
          columnGap: 7,
          background: "transparent",
          height: "fit-content",
        }}
        data-toggle="dropdown"
      >
        <img src={more} alt="down" />
      </button>

      <section className="dropdown-menu category-menu">
        <button className="dropdown-item text-center">Add member</button>
        <button className="dropdown-item text-center">Rename</button>
        <button
          className="dropdown-item text-center"
          style={{ color: "#D62828" }}
        >
          Delete group
        </button>
      </section>
    </div>
  );
};

const GroupModal = () => {
  return (
    <div>
      <div>
        <section>
          <img src="" alt="" />
          <input type="search" name="" id="" />
        </section>
        <Button label="Add members" />
      </div>
    </div>
  );
};
