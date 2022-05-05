import React, { useEffect, useState } from "react";
import { Tabs } from "../../components";
import down from "../../assets/icons/chevronDown.svg";
import filter from "../../assets/icons/filterFunnel.svg";
import "./investorOpportunity.css";
import { Opportunities } from "./components/Opportunities";
import { Interests } from "../investorInterested/components/Interests";
import { getInvestorOpportunity } from  '../../services/investor';
import { PageLoader } from "../../components/pageLoader/PageLoader";
import { useAuth } from '../../hooks';


export const InvestorOpportunity = ({ history }) => {

  const [oppData, setOppData] = useState([])
  const [loading , setLoading] = useState(false);
  const { stateAuth } = useAuth();

  // const getOpp = async () => {
  //  try {
  //   setLoading(true);
  //   const res = await getInvestorOpportunity({
  //   });
  //   setOppData(res);
  //   setLoading(false);
  //  } catch {
  //   setOppData(null)
  //  }
  // }

  // useEffect(() => {
  //   getOpp()

  //   return () => {
  //     setOppData([])
  //   }
  // }, [])

  console.log(stateAuth)

  const {
    location: { hash },
  } = history;

  const renderContent = () => {
    switch (hash) {
      case "#opportunities":
        return <Opportunities data={stateAuth?.opportunity} />;

      case "#share deals":
        return <Opportunities data={stateAuth?.opportunity} />;

      case "#interested":
        return <Interests data={stateAuth?.opportunity} />;

      default:
        return <Opportunities data={stateAuth?.opportunity} />;
    }
  };


  if(loading){
    return <PageLoader num={[1,2,3,4]} />
  }else{
  return (
    <div className="wrapper">
      {/* <section>
        <h5 className="page-header">Investment Opportunities</h5>
      </section> */}

      <section
        className=" d-flex align-items-center justify-content-between flex-wrap tab-wrap"
        style={{ rowGap: "1rem" }}
      >
        <Tabs tabItems={["opportunities", "shared deals", "interested"]} />

        <div
          className="d-flex align-items-center"
          style={{ columnGap: "1rem" }}
        >
          <RecentDropdown />
          <OpportunityFilter />
        </div>
      </section>
      <section className="mt-3">{renderContent()}</section>
    </div>
  )
    }
};

const OpportunityFilter = () => {
  return (
    <div className="dropdown">
      <button
        className="d-flex align-items-center filter-btn"
        style={{ columnGap: 7 }}
        data-toggle="dropdown"
      >
        <img src={filter} alt="filter" />
        <p>Filter</p>
        <img src={down} alt="down" />
      </button>
    </div>
  );
};

const RecentDropdown = () => {
  return (
    <div className="dropdown">
      <button
        className="d-flex align-items-center filter-btn"
        style={{ columnGap: 7 }}
        data-toggle="dropdown"
      >
        <p>Recent</p>
        <img src={down} alt="down" />
      </button>
    </div>
  );
};
