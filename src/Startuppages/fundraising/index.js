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
import { getFundraisingData } from "../../services";
import newApp from "../../assets/icons/Star.svg";
import { convertToMillion } from "../../utils/helpers";
import { PageLoader } from "../../components";
import { useAuth }  from "../../hooks/useAuth";



export const StartupFundingRaising = () => {
  const history = useHistory();
  const {
    location: { hash },
  } = history;

  const { stateAuth } = useAuth();

  const [fundData, setFundData] = useState([]);
  const [loading, setLoading] = useState(false);

  

  

  const renderContent = () => {
    switch (hash) {
      case "#Funding Ask":
        return <FundingAsk data={stateAuth?.user?.fundRaising?.fundingAsk} />;
      case "#Fund Utilization":
        return <FundUtilization data={stateAuth?.user?.fundRaising?.fundUtilization} />;
      case "#Cap Table":
        return <CapTable data={stateAuth?.user?.fundRaising?.capTable} />;
      case "#Previous Round":
        return <PreviousRound data={stateAuth?.user?.fundRaising?.previousRound} />;
      case "#Financial Projection":
        return <FinancialProjection />;
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

  if (loading) {
    return (
      <PageLoader
        dashboard={true}
        num={[
          fundData?.fundAsk,
          fundData?.fundUtilization,
          fundData?.capTable,
          fundData?.previousRound,
        ]}
      />
    );
  }

  return (
    <div className="container">
      <section className="row tab-wrap">
        <>
          <DashCard
            className="col-3 "
            name="Founder's Capital"
            count={`$${convertToMillion(fundData?.foundersCapitial)}`}
            color="#E5FFE4"
          />
        </>

        <>
          <DashCard
            className="col-3"
            name="Total Fund Raised"
            count={`$${convertToMillion(fundData?.totalFund)}`}
            color="#FAD7DC"
          />
        </>

        <>
          <DashCard
            className="col-3"
            name="Pre-Money Valuation"
            count={`$${convertToMillion(fundData?.preMoney)}`}
            color="#E5FFE4"
          />
        </>

        <>
          <DashCard
            className="col-3"
            name="Post-Money Valuation"
            count={`$${convertToMillion(fundData?.postMoney)}`}
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
