import React from "react";
import close from "../../assets/icons/closeButton.svg";
import "./notification.css";

export const Notification = () => {
  return (
    <div className="kv-notification">
      <section>
        <img src={close} alt="close" />
      </section>
    </div>
  );
};
