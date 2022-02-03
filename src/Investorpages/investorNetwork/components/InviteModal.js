import React from "react";
import { Button, TextField } from "../../../components";
import whatsApp from "../../../assets/icons/whatsapp.svg";

export const InviteModal = () => {
  return (
    <div className="px-5">
      <p className="mb-3">
        Invite a friend that can benefit from Knight ventures
      </p>
      <TextField placeholder="Enter email address" className="invite-input" />

      <section
        className="d-flex align-items-center my-4"
        style={{ columnGap: 11 }}
      >
        <img src={whatsApp} alt="whatsApp" />
        <p>Invite via whatsapp</p>
        <TextField
          placeholder="Enter phone number"
          className="invite-phone-input"
        />
      </section>

      <section className="d-flex justify-content-end">
        <Button label="Invite" />
      </section>
    </div>
  );
};
