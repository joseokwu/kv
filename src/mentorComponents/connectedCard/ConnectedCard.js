import React from "react";
import { Button } from "..";
import sampleConnect from "../../assets/images/sampleTeamMember.png";
import "./connectedCard.css";

export const ConnectedCard = () => {
  return (
    <div className="connected-card">
      <section className="d-flex align-items-center justify-content-end">
        <span className="connected-tag">Connected</span>
      </section>

      <section
        className="d-flex align-items-start"
        style={{ rowGap: 10, columnGap: "1rem" }}
      >
        <img src={sampleConnect} alt="connect" className="rep" />
        <div>
          <p className="name">Prima Jakatar</p>
          <p className="position">
            Founder and CEO at Apple Inc, Serial Investor
          </p>

          <span className="my-3 d-flex" style={{ columnGap: 10 }}>
            <Button label="schedule Call" />
            <Button label="Chat" className="create-button chat-btn" />
          </span>
        </div>
      </section>
    </div>
  );
};
