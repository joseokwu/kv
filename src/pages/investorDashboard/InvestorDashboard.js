import React from "react";
import {
  ConnectCard,
  DashCard,
  EventCard,
  OpportunityCard,
  Tabs,
} from "../../components";
import "./investDashboard.css";

export const InvestorDashboard = () => {
  const count = [1, 2, 3, 4];
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

      <section className="row mt-5 dash-main-content">
        <div className="col-xl-8">
          <div>
            <section className="d-flex align-items-center justify-content-between mb-3">
              <p className="dash-sub-title">Upcoming Events</p>
              <p className="see-all">See All</p>
            </section>
            <section
              className="d-flex align-items-center flex-wrap"
              style={{ columnGap: "1.125rem", rowGap: "1.12rem" }}
            >
              <EventCard color="#2E3192" />
              <EventCard color="#62BFE4" />
            </section>
          </div>

          <div style={{ marginTop: "2.38rem" }}>
            <section className="d-flex align-items-center justify-content-between mb-3">
              <p className="dash-sub-title">Opportunities</p>
              <p className="see-all">See All</p>
            </section>

            <section className="row">
              <div className="col-xl-6 mb-4">
                <OpportunityCard />
              </div>
              <div className="col-xl-6 mb-4">
                <OpportunityCard />
              </div>
              <div className="col-xl-6 mb-4">
                <OpportunityCard />
              </div>
              <div className="col-xl-6 mb-4">
                <OpportunityCard />
              </div>
            </section>
          </div>
        </div>

        <div className="col-xl-4">
          <section className="network-space mt-5">
            <div className="network-space-header">
              <h3>Networking</h3>
              <p className="see-all">See All</p>
            </div>

            <div className="opp-connects">
              <section className="mb-4">
                <Tabs tabItems={["Requests", "My Connections"]} />
              </section>

              <section>
                {count.map((c, i) => {
                  return (
                    <div key={`connect-${i}`} className="mb-5">
                      <ConnectCard />
                    </div>
                  );
                })}
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
