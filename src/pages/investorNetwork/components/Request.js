import React, { useState } from "react";
import { ConnectCard } from "../../../components";
import info from "../../../assets/icons/infoIcon.svg";
import close from "../../../assets/icons/close.svg";

export const Request = () => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="row">
      <section className="col-12">
        <AlertStrip />
      </section>
      {count.map((c, i) => {
        return (
          <section className="col-lg-6 mb-4" key={`connect-${i}`}>
            <ConnectCard />
          </section>
        );
      })}
    </div>
  );
};

const AlertStrip = () => {
  return (
    <div className="d-flex align-items-center justify-content-between connect-action-alert mb-4">
      <span className="d-flex align-items-center" style={{ columnGap: 14 }}>
        <img src={info} alt="info" />
        <p className="message">You Ignored Leo Ming</p>
      </span>
      <span className="d-flex align-items-center" style={{ columnGap: "3rem" }}>
        <p role="button" className="action">
          Accept Instead
        </p>
        <img src={close} alt="close" role="button" />
      </span>
    </div>
  );
};
