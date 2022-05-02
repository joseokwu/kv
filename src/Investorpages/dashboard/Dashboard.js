import React , { useState} from "react";
import "./dashboard.css";
import total from "../../assets/icons/totalApp.svg";
import { ApplicationCard, DashCard } from "../../components/index";
import applicantLogo from "../../assets/images/sampleApplicantLogo.png";
import ApplicationChart from "./components/applicationChart/ApplicationChart";
import { PageLoader } from "../../components/pageLoader/PageLoader";
import { EmptyState } from "../../mentorComponents";
import { useAuth } from "../../hooks";


export const BoosterDashboard = ({ history }) => {
  const { push } = history;
  const [bossterRes, setBoosterRes] = useState(null);
  const [loading , setLoading] = useState(false);
  const { stateAuth } = useAuth();

  console.log(stateAuth)

   const dashCardColors = ["#E5FFE4", "#FAD7DC", "#DFF1FF"];

 

      if(loading){
        return <PageLoader />
      }else{
        
  return (
    <div className="dashboard-main">
      <section className="d-flex align-items-center dashboard-cards tab-wrap">
   
          <DashCard
            icon={total}
            name={'Total Application'}
            count={stateAuth?.partnerData?.pendingRequests.length + stateAuth?.partnerData?.approvedRequests.length + stateAuth?.partnerData?.declinedRequests.length }
            color={dashCardColors[0]}
          />
          
          <DashCard
            icon={total}
            name={'Pending'}
            count={stateAuth?.partnerData?.pendingRequests?.length }
            color={dashCardColors[1]}
          />

          
            <DashCard
            icon={total}
            name={'Approved'}
            count={ stateAuth?.partnerData?.approvedRequests?.length  }
            color={dashCardColors[2]}
          />
           <DashCard
            icon={total}
            name={'Declined'}
            count={ stateAuth?.partnerData?.declinedRequests?.length }
            color={dashCardColors[0]}
          />
   
      </section>

      <section className="row mt-4 dash-main-content">
        <div className="col-lg-6">
          <header className="d-flex align-items-center justify-content-between dashboard-applications-header">
            <h5>New Applications</h5>
            <span onClick={() => push("/booster/applicants#all")}>See All</span>
          </header>

          <section>

           <EmptyState 
           message="No Application sent yet."
            />

              {/* <div style={{ marginBottom: 21 }}>
                <ApplicationCard  logo={applicantLogo}  />
              </div> */}
           
          </section>
        </div>
        {/* <div className="col-lg-6 mt-5">
          <ApplicationChart />
        </div> */}
      </section>
    </div>
  )
      }


};
