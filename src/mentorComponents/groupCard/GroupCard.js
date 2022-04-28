import React, { useState } from "react";
import sampleConnect from "../../assets/images/sampleTeamMember.png";
import more from "../../assets/icons/more.svg";
import { Button } from "../button/Button";
import searchIcon from "../../assets/icons/searchSm.svg";
import sampleChat from "../../assets/images/sampleTeamMember.png";
import './groupCard.css'

export const GroupCard = () => {
  return (
    <div className="connected-card py-4" style={{ borderRadius: 10 }}>
      <section
        className="d-flex align-items-start"
        style={{ rowGap: 10, columnGap: "1rem" }}
      >
        <img src={sampleConnect} alt="connect" className="rep" />
        <div>
          <p className="name">Fintech Investment Group</p>
          <p className="position py-2">My Close company group of Idealist</p>

          <p className="count" data-toggle="modal" data-target="#modalGroup">19 members</p>
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

export const GroupModal = () => {
  return (
    <div className="px-3">
      <section className="d-flex align-items-center justify-content-between mb-4">
        <section className="search-input">
          <img src={searchIcon} alt="search" />
          <input type="search" placeholder="Search..." />
        </section>
        <Button label="Add members"  />
      </section>

      <p className="mb-3">Group Members</p>

      <section className="row">
        {Array.from("winnings").map((x, i) => {
          return (
            <div className="col-xl-4 col-lg-6" key={`members-${i}`}>
              <GroupMember />
            </div>
          );
        })}
      </section>
    </div>
  );
};

const GroupMember = () => {
  return (
    <div
      className="d-flex align-items-center mb-4"
      style={{ rowGap: 10, columnGap: "1rem" }}
    >
      <section className="chatter-img">
        <img src={sampleChat} alt="chat buddy" />
        <span className="activate"></span>
      </section>

      <section>
        <h5 className="chatter-name">Jane Carter</h5>

        <p className="chat-last">
          Founder and CEO at Apple Inc, Serial Investor
        </p>
      </section>
    </div>
  );
};
