import React , { useState } from "react";
import "./dashboard.css";
import total from "../../assets/icons/totalApp.svg";
import { ApplicationCard, DashCard } from "../../components/index";
import applicantLogo from "../../assets/images/sampleApplicantLogo.png";
import ApplicationChart from "./components/applicationChart/ApplicationChart";

import { PageLoader } from "../../components/pageLoader/PageLoader";


export const BoosterDashboard = ({ history }) => {
  const { push, location } = history;
  const [bossterRes, setBoosterRes] = useState(null);
  const [loading , setLoading] = useState(false);
  const dashCardColors = ["#E5FFE4", "#FAD7DC", "#DFF1FF"];
 



      if(loading){
        return <PageLoader />
      }else{
        
  return (
    <div className="dashboard-main">
  <section className="d-flex align-items-center dashboard-cards tab-wrap">
  {bossterRes && bossterRes?.cards.map((data, i) => (
    <DashCard
      icon={total}
      name={data.name}
      count={data.count}
      color={dashCardColors[i]}
      key={i}
    />
  ))}
</section>
  


  <section className="row mt-4 dash-main-content">
  <div className="col-lg-6">
    <header className="d-flex align-items-center justify-content-between dashboard-applications-header">
      <h5>New Applications</h5>
      <span onClick={() => push("/booster/applicants#all")}>See All</span>
    </header>

    <section>
      {bossterRes && bossterRes?.application.map((data, i) => (
        <div style={{ marginBottom: 21 }}>
          <ApplicationCard data={data} logo={applicantLogo} key={i} />
        </div>
      ))}
    </section>
  </div>
  <div className="col-lg-6 mt-5">
    <ApplicationChart />
  </div>
</section>
    </div>
  )
      }


};
