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

export const StartupFundingRaising = () => {
  const history = useHistory();
  const {
    location: { hash },
  } = history;

  const [fundData, setFundData] = useState([]);

  const getData = async () => {
    const res = await getFundraisingData();
    setFundData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderContent = () => {
    switch (hash) {
      case "#Funding Ask":
        return <FundingAsk data={fundData?.fundAsk} />;
      case "#Fund Utilization":
        return <FundUtilization data={fundData?.fundUtilization} />;
      case "#Cap Table":
        return <CapTable data={fundData?.capTable} />;
      case "#Previous Round":
        return <PreviousRound data={fundData?.previousRound} />;
      case "#Financial Projection":
        return <FinancialProjection />;
      default:
        return <FundingAsk data={fundData?.fundAsk} />;
    }
  };

  const tabList = [
    "Funding Ask",
    "Fund Utilization",
    "Cap Table",
    "Previous Round",
    "Financial Projection",
  ];

  return (
    <div className="container">
      <section className="row ">
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
