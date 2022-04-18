import { useEffect, useState } from "react";
import {
  ApplicationCard,
  DashCard,
  CardFill,
} from "../../Startupcomponents/index";
import { Tabs } from "../../Startupcomponents/tabs/Tabs";
import { FundingAsk } from "./components/fundingask";
import { useHistory } from "react-router-dom";
import { FundUtilization } from "./components/fundutilization";
import { CapTable } from "./components/captable";
import { PreviousRound } from "./components/prevRound";
import { FinancialProjection } from "./components/financialProjection";
import { convertToMillion } from "../../utils/helpers";
import { PageLoader } from "../../components";
import { useAuth }  from "../../hooks/useAuth";
import { getType } from './../../utils/helpers';



export const StartupFundingRaising = () => {
  const history = useHistory();
  const {
    location: { hash },
  } = history;

  const { stateAuth , getDashboardProfile } = useAuth();

  
  useEffect(() =>{
    getDashboardProfile(getType())
},[getDashboardProfile])


  console.log(stateAuth)

  const renderContent = () => {
    switch (hash) {
      case "#Funding Ask":
        return <FundingAsk data={stateAuth?.user?.fundRaising?.fundingAsk} />;
      case "#Fund Utilization":
        return <FundUtilization data={stateAuth?.user?.fundRaising?.fundUtilization?.files} />;
      case "#Cap Table":
        return <CapTable data={stateAuth?.user?.fundRaising?.capTable?.files} />;
      case "#Previous Round":
        return <PreviousRound data={stateAuth?.user?.fundRaising?.previousRound} />;
      case "#Financial Projection":
        return <FinancialProjection data={stateAuth?.user?.fundRaising?.financialProjection?.files}  />;
      default:
        return <FundingAsk data={stateAuth?.user?.fundRaising?.fundingAsk} />;
    }
  };

  const tabList = [
    "Funding Ask",
    "Fund Utilization",
    "Cap Table",
    "Previous Round",
    "Financial Projection",
  ];

  if(stateAuth.dashboardLoad){
    return <PageLoader num={[1, 2 , 3, 4]} />
  }

  return (
    <div className="container">
      <section className="row tab-wrap">
        <>
          <DashCard
            className="col-3 "
            name="Founder's Capital"
            count={`${convertToMillion(stateAuth?.user?.fundRaising?.capTable?.amountInvestedByFounders)}`}
            color="#E5FFE4"
          />
        </>

        <>
          <DashCard
            className="col-3"
            name="Total Fund Raised"
            count={`${convertToMillion(stateAuth?.user?.fundRaising?.capTable?.amountRaised && stateAuth?.user?.fundRaising?.capTable?.amountRaised )}`}
            color="#FAD7DC"
          />
        </>

        <>
          <DashCard
            className="col-3"
            name="Pre-Money Valuation"
            count={`$${convertToMillion(stateAuth?.user?.fundRaising?.previousRound?.preMoneyValuation && stateAuth?.user?.fundRaising?.previousRound?.preMoneyValuation)}`}
            color="#E5FFE4"
          />
        </>

        <>
          <DashCard
            className="col-3"
            name="Post-Money Valuation"
            count={`$${convertToMillion(stateAuth?.user?.fundRaising?.previousRound?.postMoneyValuation && stateAuth?.user?.fundRaising?.previousRound?.postMoneyValuation )}`}
            color="#FAD7DC"
          />
        </>
      </section>
      <section className="my-5 container">
        <Tabs tabItems={tabList} />
      </section>
      <section className="mb-5 container ">{renderContent()}</section>
    </div>
  );
};

// financialProjection: {files: 'https://cdn.shoutng.com/kvbucrt8rztygvnbtuiuqb.pdf', _id: '62521d84e0eaea14a99083ef'}
// fundUtilization:
// files: "https://cdn.shoutng.com/kvu6t59yz90snuhtzaozkuapplication/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
// _id: "6