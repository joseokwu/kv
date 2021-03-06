import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { cardData, cardFill } from "../../constants/domiData";
import { DashCard, CardFill } from "../../Startupcomponents/index";
import { TodoList } from "./components/todolist";
import { UpComing } from "./components/upComing";
import { getDashboardInfo } from "../../services";
import newApp from "../../assets/icons/Star.svg";
import dateFormat from "dateformat";
import { convertToMillion , getType } from "../../utils/helpers";
import { PageLoader } from "../../components";
import { useAuth} from '../../hooks/useAuth';


export const StartupDashboard = () => {
  const [dashInfo, setDashInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const { stateAuth } = useAuth();
  
 



//console.log(stateAuth)

  if(stateAuth.dashboardLoad){
    return <PageLoader num={[1, 2 , 3, 4]} />
  }

  return (
    <div className="dashboardMain">
      {/* <section className="startup-dash mb-4">
        <h2>Yebox Techologies</h2>
      </section> */}
      <section className="row tab-wrap" style={{ zIndex: "", background: "#FEFEFE" }}>
        <DashCard
          className="col-lg-3 col-md-6 col-12"
          icon={newApp}
          name={"Founders"}
          count={stateAuth?.user?.founders ?? 0}
          color={"#E5FFE4"}
        />
        <DashCard
          className="col-lg-3 col-md-6 col-12"
          icon={newApp}
          name={"Investors"}
          count={stateAuth?.user?.investors ?? 0}
          color={"#FAD7DC"}
        />
        <DashCard
          className="col-lg-3 col-md-6 col-12"
          icon={newApp}
          name={"Mentors"}
          count={stateAuth?.user?.mentors ?? 0}
          color={"#E5FFE4"}
        />
        <DashCard
          className="col-lg-3 col-md-6 col-12"
          icon={newApp}
          name={"Partners"}
          count={stateAuth?.user?.partners?.length ?? 0}
          color={"#FAD7DC"}
        />
      </section>

      <section className="container row my-5">

        <CardFill
          header={"Total Fund"}
          color={"#2E3192"}
          img={""}
          amount={`$${stateAuth?.startupData?.fundRaising?.capTable?.amountInvestedByFounders ?? 0}`}
          time={""}
          className="col-3 col-6-md "
        />
        <CardFill
          header={"Last Funding Round"}
          color={"#00ADEF"}
          img={""}
          amount={`$${stateAuth?.startupData?.fundRaising?.capTable?.amountRaised ?? 0}`}
          time={dateFormat(dashInfo?.lastFund?.date, "fullDate")}
          className="col-3 col-6-md "
        />
        <CardFill
          header={"Investors"}
          color={"#00ADEF"}
          img={""}
          amount={"0"}
          className="col-3 col-6-md "
        />
        <CardFill
          header={"Valuation"}
          color={"#2E3192"}
          img={""}
          amount={`$${
            typeof stateAuth?.startupData?.fundRaising?.fundingAsk?.postMoneyValuation !== undefined &&
            convertToMillion(stateAuth?.startupData?.fundRaising?.fundingAsk?.postMoneyValuation)
          }`}
          time={dateFormat(stateAuth?.startupData?.fundRaising?.previousRound?.dateOfFunding, "fullDate")}
          className="col-3 col-6-md "
        />

      </section>

      <section className="row">
        {/* <div className="col-lg-12">
          <TodoList data={stateAuth?.user?.assignments?.data ?? []} />
        </div> */}
      </section>
      <section className="my-4">
        <UpComing data={stateAuth?.user?.event?.data} />
      </section>
    </div>
  );
};
