import React from "react";
import sampleConnect from "../../assets/images/sampleEventPerson.png";

export const ConnectCard = () => {
  return (
    <div className="d-flex align-items-center">
      <img src={sampleConnect} alt="connect" className="connect-img" />
      <section className="connect-content">
        <h5>Leo Ming</h5>
        <p>Founder and CEO at Apple Inc, Serial Investor</p>
        <div>
          <button className="accept-btn">Accept</button>
          <button className="ignore-btn">Ignore</button>
        </div>
      </section>
    </div>
  );
};
