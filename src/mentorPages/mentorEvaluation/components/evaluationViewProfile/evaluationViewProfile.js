import React, { useEffect, useState } from 'react'
import './evaluationViewProfile.css'
import { ProductDemo, Tabs } from '../../../../mentorComponents'
import { PitchDeck } from '../../../mentorViewDetails/components/pitchDeck/pitchDeck'
import { Product } from '../../../mentorViewDetails/components/product/product'
import { BusinessModelCanva } from '../../../mentorViewDetails/components/businessModelCanva/businessModelCanva'
import { Team } from '../../../mentorViewDetails/components/team/team'
import { RoadMap } from '../../../mentorViewDetails/components/roadMap/RoadMap'
import { Fundraising } from '../../../mentorViewDetails/components/fundraising/fundraising'
import { Milestone } from '../../../mentorViewDetails/components/milestone/Milestone'
import { getStartupProfile } from '../../../../services';

export const MentorEvaluationViewProfile = ({ history }) => {
  const {
    location: { hash },
  } = history

  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const res = await getStartupProfile();
    setProfileData(res);
    setLoading(false);
  };

  const renderNewContent = () => {
    switch (hash.replaceAll('%20', '')) {
      case '#Product':
        return <Product data={profileData?.product} />

      case '#Pitch Deck':
        return <PitchDeck data={profileData?.pitchDeck} />

      case '#Team':
        return <Team data={profileData?.team} />

      case '#Business Model Canvas':
        return <BusinessModelCanva />

      case '#Fundraising':
        return <Fundraising data={profileData?.fundRaising} />

      case '#Milestone/Timeline':
        return <Milestone data={profileData?.mileStone} />

      case '#Product Road Map':
        return <RoadMap data={profileData?.ProductRoadMap} />

      default:
        return <Product data={profileData?.product} />
    }
  }

  const tabItems = [
    'Product',
    'Pitch Deck',
    'Team',
    'Business Model Canvas',
    'Fundraising',
    'Milestone/Timeline',
    'Product Road Map',
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
        <section className="mt-1">{renderNewContent()}</section>
      </div>
    </div>
  )
}
