import React, { useState } from "react";
import {
  Button,
  DashCard,
  LastChat,
  Tabs,
  Modal,
} from "../../components/index";
import down from "../../assets/icons/chevronDown.svg";
import sampleChat from "../../assets/images/sampleTeamMember.png";
import search from "../../assets/icons/search.svg";
import "./investorNetwork.css";
import { Request } from "./components/Request";
import { Connections } from "./components/Connections";
import { Groups } from "./components/Groups";
import { InviteModal } from "./components/InviteModal";
import { CreateGroup } from "./components/CreateGroup";

export const InvestorNetwork = ({ history }) => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const {
    location: { hash },
  } = history;

  const renderComponent = () => {
    switch (hash.replaceAll("%20", " ")) {
      case "#requests":
        return <Request />;

      case "#my connections":
        return <Connections />;
      case "#groups":
        return <Groups />;
      default:
        return <Request />;
    }
  };
  return (
    <div className="wrapper">
      <Modal id="inviteModal" title="Invite">
        <InviteModal />
      </Modal>
      <Modal title="Create Group" id="createGroupModal">
        <CreateGroup />
      </Modal>
      <section className="d-flex align-items-center justify-content-between mb-4">
        <h1 className="page-title">Networking</h1>
        <div>
          {/* <img src={search} alt="search" /> */}
          <Button
            label="Create Group"
            className="create-button"
            data-toggle="modal"
            data-target="#createGroupModal"
          />
          <Button
            label="Invite"
            data-toggle="modal"
            data-target="#inviteModal"
          />
        </div>
      </section>
      <section className="d-flex align-items-center dashboard-cards mb-5">
        <DashCard
          count={200}
          name="founders"
          color="#D5D6F4"
          className="network-dash-card"
        />

        <DashCard
          count={200}
          name="Mentors"
          color="#DEF6FF"
          className="network-dash-card"
        />

        <DashCard
          count={20}
          name="Investors"
          color="#D5D6F4"
          className="network-dash-card"
        />
      </section>

      <article className="row">
        <section className="col-xl-8">
          <div
            className="d-flex align-items-center justify-content-between flex-wrap mb-4"
            style={{ columnGap: 7, rowGap: 10 }}
          >
            <Tabs tabItems={["requests", "my connections", "groups"]} />
            <CategoryDropdown />
          </div>

          <div>{renderComponent()}</div>
        </section>

        <section className="col-xl-4">
          <div className="network-space-header">
            <h3>Chat</h3>
            <p className="see-all" style={{ textDecoration: "underline" }}>
              See All
            </p>
          </div>
          {count.slice(0, 4).map((c, i) => (
            <LastChat key={`chats-${i}`} />
          ))}
          <LastChat />
        </section>
      </article>
    </div>
  );
};

const CategoryDropdown = () => {
  const [picked, setPicked] = useState("all");
  return (
    <div className="dropdown">
      <button
        className="d-flex align-items-center filter-btn"
        style={{ columnGap: 7, background: "transparent" }}
        data-toggle="dropdown"
      >
        <p>Category:</p>
        <p style={{ textTransform: "capitalize" }}>{picked}</p>
        <img src={down} alt="down" />
      </button>

      <section className="dropdown-menu category-menu">
        <button className="dropdown-item" onClick={() => setPicked("all")}>
          All
        </button>
        <button className="dropdown-item" onClick={() => setPicked("founders")}>
          Founders
        </button>
        <button className="dropdown-item" onClick={() => setPicked("mentors")}>
          Mentors
        </button>
        <button
          className="dropdown-item"
          onClick={() => setPicked("investors")}
        >
          Investors
        </button>
      </section>
    </div>
  );
};
