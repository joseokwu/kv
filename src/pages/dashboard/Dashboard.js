import React from "react";
import "./dashboard.css";
import total from "../../assets/icons/totalApp.svg";
import newApp from "../../assets/icons/newApp.svg";
import pending from "../../assets/icons/pendingApp.svg";
import approved from "../../assets/icons/activeExpired.svg";
import expired from "../../assets/icons/activeExpired.svg";
import reApplied from "../../assets/icons/reApplied.svg";
import { ApplicationCard, DashCard } from "../../components/index";
import applicantLogo from "../../assets/images/sampleApplicantLogo.png";
import ApplicationChart from "./components/applicationChart/ApplicationChart";

export const Dashboard = () => {
  const cardData = [
    { icon: total, name: "Total Applications", count: 50, color: "#E5FFE4" },
    { icon: newApp, name: "new", count: 12, color: "#FAD7DC" },
    { icon: pending, name: "pending", count: 5, color: "#DFF1FF" },
    { icon: approved, name: "approved", count: 60, color: "#EEDAFB" },
    { icon: expired, name: "expired", count: 10, color: "#E5FFE4" },
    { icon: reApplied, name: "Re-Applied", count: 20, color: "#FDE591" },
  ];

  const appCardData = [1, 2, 3, 4, 5];
  return (
    <div className="dashboard-main">
      <section className="d-flex align-items-center dashboard-cards">
        {cardData.map((data, i) => (
          <DashCard
            icon={data.icon}
            name={data.name}
            count={data.count}
            color={data.color}
            key={i}
          />
        ))}
      </section>

      <section className="row mt-5 dash-main-content">
        <div className="col-lg-6">
          <header className="d-flex align-items-center justify-content-between dashboard-applications-header">
            <h5>New Applications</h5>
            <span>See All</span>
          </header>

          <section>
            {appCardData.map((data, i) => (
              <div style={{ marginBottom: 21 }}>
                <ApplicationCard logo={applicantLogo} key={i} />
              </div>
            ))}
          </section>
        </div>
        <div className="col-lg-6 mt-5">
          <ApplicationChart />
        </div>
      </section>
    </div>
  );
};
