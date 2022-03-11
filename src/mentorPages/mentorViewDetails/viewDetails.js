import React, { useEffect, useState } from "react";
import "./viewDetails.css";
import { ProductDemo, Tabs } from "../../mentorComponents";
import { PitchDeck } from "./components/pitchDeck/pitchDeck";
import { Product } from "./components/product/product";
import { BusinessModelCanva } from "./components/businessModelCanva/businessModelCanva";
import { Team } from "./components/team/team";
import { RoadMap } from "./components/roadMap/RoadMap";
import { Fundraising } from "./components/fundraising/fundraising";
import { Milestone } from "./components/milestone/Milestone";
import { getStartupInvesrtorProfile } from "../../services/investor";
import { getStartupProfile, profile } from "../../services";

export const MentorViewDetails = ({ history }) => {
  const {
    location: { hash },
  } = history;

  const [profileData, setProfileData] = useState({});

  const getData = async () => {
    const res = await getStartupProfile();
    setProfileData(res);
  };

  const renderContent = () => {
    switch (hash.replaceAll("%20", "")) {
      case "#Product":
        return <Product data={profileData?.product} />;

      case "#Pitch Deck":
        return <PitchDeck data={profileData?.pitchDeck} />;

      case "#Team":
        return <Team data={profileData?.team} />;

      case "#Business Model Canva":
        return <BusinessModelCanva />;

      case "#Fundraising":
        return <Fundraising data={profileData?.fundRaising} />;

      case "#Milestone/Timeline":
        return <Milestone data={profileData?.mileStone} />;

      case "#Product Road Map":
        return <RoadMap data={profileData?.ProductRoadMap} />;

      default:
        return <Product data={profileData?.product} />;
    }
  };

  const tabItems = [
    "Product",
    "Pitch Deck",
    "Team",
    "Business Model Canva",
    "Fundraising",
    "Milestone/Timeline",
    "Product Road Map",
  ];

  useEffect(() => {
    getData();
    return () => {
      setProfileData({});
    };
  }, []);

  return (
    <div className="dashboard-main mx-3">
      <ProductDemo data={profileData} />

      <div className="mt-4">
        <section className="mb-3">
          <Tabs tabItems={tabItems} />
        </section>
        <section className="mt-1">{renderContent()}</section>
      </div>
    </div>
  );
};
