import React from "react";
import "./dashCard.css";

const DashCard = ({
  icon = "",
  count = "100",
  name = "name",
  color = "teal",
}) => {
  return (
    <div className="dashCard-main" style={{ backgroundColor: color }}>
      <section className="dashCard-icon">
        <img src={icon} alt="" />
      </section>
      <section className="text-right">
        <h3>{count}</h3>
        <p>{name}</p>
      </section>
    </div>
  );
};

export default DashCard;
