import React from "react";
import sampleChat from "../../assets/images/sampleTeamMember.png";

export const LastChat = () => {
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
        <h5 className="chatter-name">John Carter</h5>

        <p className="chat-last">
          <b>You:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>
    </div>
  );
};
