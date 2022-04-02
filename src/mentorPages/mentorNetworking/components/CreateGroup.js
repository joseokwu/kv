import React from "react";
import { Button, TextArea, TextField } from "../../../mentorComponents";
import close from "../../../assets/icons/close.svg";
import sampleUser from "../../../assets/images/sampleTeamMember.png";

export const CreateGroup = () => {
  return (
    <div className="px-5">
      <section className="mb-4">
        <TextField
          label="Name of Group"
          placeholder="Enter name of group"
          className="invite-input"
        />
      </section>

      <section className="mb-4">
        <TextArea
          label="Description"
          placeholder="Enter group description"
          rows={4}
        />
      </section>

      {Array.from("kaka").map((k, i) => {
        return (
          <section className="d-flex align-items-center justify-content-between members-in-create mb-3">
            <div
              className="d-flex align-items-center"
              style={{ columnGap: "1.5rem" }}
            >
              <img src={sampleUser} alt="user" className="member-img" />
              <p>Kate Mcbeth Joan</p>
            </div>
            <img src={close} alt="close" role="button" />
          </section>
        );
      })}

      <section className="d-flex justify-content-end my-4">
        <Button label="Create Group" />
      </section>
    </div>
  );
};
