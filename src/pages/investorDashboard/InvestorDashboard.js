import React from "react";
import { DashCard } from "../../components";

export const InvestorDashboard = () => {
  const cardData = [
    { name: "Total Applications", count: 50, color: "#E5FFE4" },
    { name: "Active Portfolio", count: 12, color: "#FAD7DC" },
    { name: "Deals Assigned", count: 5, color: "#EEDAFB" },
    { name: "Pitch Attended", count: 60, color: "#E0DAFC" },
    { name: "Network Connections", count: 10, color: "#DFF1FF" },
  ];
  return (
    <div className="dashboard-main">
      <section className="d-flex align-items-center dashboard-cards">
        {cardData.map((data, i) => (
          <DashCard
            name={data.name}
            count={data.count}
            color={data.color}
            key={i}
          />
        ))}
      </section>

      <section className="row mt-5">
        <div className="col-lg-8">
          <section className="d-flex align-items-center justify-content-between">
            <p>Upcoming Events</p>
            <p>See All</p>
          </section>
        </div>

        <div className="col-lg-4"></div>
      </section>
    </div>
  );
};
