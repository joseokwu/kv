import React, { useEffect, useState } from "react";
import left from "../../assets/icons/chervonLeft.svg";
import "./opportunity.css";
import { Tabs, Tag } from "../../components";
import { OppCompanyInfo } from "./components/OppCompanyInfo";
import { FinancialDetails } from "./components/FinancialDetails";
import { FundingRound } from "./components/FundingRound";
import { Product } from "./components/product/Product";
import { PitchDeck } from "./components/pitchDeck/PitchDeck";
import { Team } from "./components/team/Team";
import { BusinessCanvas } from "./components/businessCanvas/BusinessCanvas";
import { Fundraising } from "./components/fundraising/Fundraising";
import { Milestone } from "./components/milestone/Milestone";
import { RoadMap } from "./components/roadMap/RoadMap";
import { getStartupInvesrtorProfile } from '../../services/investor';
import { PageLoader } from "../../components/pageLoader/PageLoader";

export const Opportunity = ({ history }) => {
  const [profileData, setProfileData] = useState({});
  const [loading , setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const res = await getStartupInvesrtorProfile();
    setProfileData(res);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    return () => {
      setProfileData({});
    };
  }, []);
  console.log(profileData)


  const {
    location: { hash, pathname },
    push,
  } = history;
  const tabItems = [
    "product",
    "pitch deck",
    "team",
    "business canvas",
    "fundraising",
    "Milestone/Timeline",
    "product road map",
  ];

  const renderContent = () => {
    switch (hash.replaceAll("%20", " ")) {
      case "#product":
        return <Product data={profileData?.product} />;
      case "#pitch deck":
        return <PitchDeck data={profileData?.pitchDeck} />;
      case "#team":
        return <Team data={profileData?.team} />;
      case "#business canvas":
        return <BusinessCanvas data={profileData?.businessCanvas} />;

      case "#fundraising":
        return <Fundraising data={profileData?.fundRaising} />;

      case "#Milestone/Timeline":
        return <Milestone data={profileData?.mileStone} />;

      case "#product road map":
        return <RoadMap data={profileData?.productRoadMap} />;

      default:
        return <Product data={profileData?.product} />;
    }
  };

  if(loading){
    return <PageLoader dashboard={true} num={[1,2,3,4
     ]} big={false} />
  }else{
  return (
    <div>
      <article className="wrapper pt-3" style={{ background: "#F9F9FC" }}>
        <section className="d-flex align-items-center">
          <p
            className="bread-start"
            role="button"
            onClick={() =>
              push(
                pathname.includes("interested")
                  ? "/investor/interested"
                  : "/investor/opportunities"
              )
            }
          >
            {pathname.includes("interested")
              ? "Interested"
              : `Investment Opportunities`}
          </p>
          <img src={left} alt="left" className="mx-3" />
          <p className="bread-end">Applane Insteen.</p>
        </section>

        <div className="row mt-5">
          <div className="col-lg-7">
            <OppCompanyInfo name={profileData?.name} />
            <FinancialDetails data={profileData?.financialDetails} />
          </div>
          <div className="col-lg-5">
            <FundingRound  data={profileData?.fundingRound}/>
          </div>
        </div>
      </article>

      <article className="wrapper" style={{ background: "#fdfdff" }}>
        <Tabs tabItems={tabItems} />

        <div className="py-4">{renderContent()}</div>
      </article>
    </div>
  )
          }
};
