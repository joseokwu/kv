import React  from "react";
import ProfileDetails from "./components/profileDetials/ProfileDetails";
import ProfileOfferings from "./components/profileOfferings/ProfileOfferings";
import "./profile.css";
import { useAuth } from "../../hooks";
import ProfileCategory from './components/profileCategory/ProfileCategory';
import PartnerValidity from './components/partnerValidity/PartnerValidity';
import { EmptyState } from "../../mentorComponents";


export const BoosterProfile = () => {

const { stateAuth } = useAuth();  

if(!stateAuth?.completedRegistration){
 return <EmptyState message="No Profile information to display" />
}

  return (
    <div className="profile">
      <section className="mb-3">
         <ProfileDetails data={stateAuth?.partnerData}   /> 
      </section>

      <section className="mb-3 profile-tab">
        <h2 className="active">Our Offerings</h2>
      </section>

      <section className="row profile-more">
        <div className="col-lg-7 pl-0">
          <ProfileOfferings data={stateAuth?.partnerData.offerings} />
        </div>
        <div className="col-lg-5 pr-0">
          <div>
            <ProfileCategory data={stateAuth?.partnerData } />
          </div>
          <div>
            <PartnerValidity data={stateAuth?.partnerData.offerings } /> 
          </div>
        </div>
      </section>
    </div>
  );
};
