import React , { useEffect , useState } from "react";
import {
  ConnectCard,
  DashCard,
  EventCard,
  OpportunityCard,
  Tabs,
} from "../../components";
import { ScheduleCard } from "../investorSchedule/components/Upcoming";
import "./investDashboard.css";
import { getInvestorDashboard } from '../../services/investor';
import { PageLoader } from "../../components/pageLoader/PageLoader";

export const InvestorDashboard = ({ history }) => {

  const [dashData, setDashData] = useState(null)
  const [loading , setLoading] = useState(false);

  const fetchDashboard = async () => {
    setLoading(true);
    const res = await getInvestorDashboard()
    setDashData(res)
    setLoading(false);
  }

  useEffect(() => {
    fetchDashboard()

    return () => {
      setDashData([])
    }
  }, [])
  console.log(dashData)

  const { push } = history;
  
    if(loading){
      return <PageLoader dashboard={true} num={[dashData?.totalInvestor,dashData?.activePortfolio, dashData?.dealsAssigned , 
      dashData?.pitchAttended
       ]} />
    }else{
      return (
        <div className="dashboard-main">
          <section className="d-flex align-items-center dashboard-cards tab-wrap">
            {/* {cardData.map((data, i) => ( */}
              <DashCard
                name={"Total Investments"}
                count={dashData?.totalInvestor}
                color={"#E5FFE4"}
                // key={i}
                className="investor-dash-card"
              />
               <DashCard
                name={"Active Portfolio"}
                count={dashData?.activePortfolio}
                color={"#FAD7DC"}
                // key={i}
                className="investor-dash-card"
              />
               <DashCard
                name={"Deals Assigned"}
                count={dashData?.dealsAssigned}
                color={"#EEDAFB"}
                // key={i}
                className="investor-dash-card"
              />
               <DashCard
                name={"Pitch Attended"}
                count={dashData?.pitchAttended}
                color={"#E0DAFC"}
                // key={i}
                className="investor-dash-card"
              />
              <DashCard
                name={"Network Connections"}
                count={dashData?.networkConnection}
                color={"#DFF1FF"}
                // key={i}
                className="investor-dash-card"
              />
            {/* ))} */}
          </section>
    
          <section className="row mt-3 dash-main-content">
            <div className="col-xl-11">
              <div>
                <section className="d-flex align-items-center justify-content-between mb-3">
                  <p className="dash-sub-title">Upcoming Events</p>
                  <p
                    className="see-all"
                    role="button"
                    onClick={() => push("/investor/events")}
                  >
                    See All
                  </p>
                </section>
                <section
                  className="d-flex align-items-center"
                  style={{ columnGap: "1.125rem", rowGap: "1.12rem" }}
                >
                  {dashData && dashData?.upcomingEvents.map((d, i) => (
                    <div key={i}>
                    <ScheduleCard  data={d} />
                  </div>
                  ))}
                  
                  {/* <div>
                    <ScheduleCard data={dashData?.upcomingEvents} />
                  </div> */}
                </section>
              </div>
    
              <div style={{ marginTop: "1rem" }}>
                <section className="d-flex align-items-center justify-content-between mb-3">
                  <p className="dash-sub-title">Recent Opportunities</p>
                  <p
                    className="see-all"
                    role="button"
                    onClick={() => push("/investor/opportunities")}
                  >
                    See All
                  </p>
                </section>
    
                <section className="row">
                  {
                    dashData && dashData?.opportunities.map((item, i) =>(
                      <div key={i} className="col-xl-6 mb-4">
                    <OpportunityCard
                      data={item}
                      onClick={() => push(`/investor/opportunities/${i}`)}
                    />
                     </div>
                    )) 
                   
                  }
                </section>
              </div>
            </div>
    
            
          </section>
        </div>
      );
    }
};
