import React , { useEffect , useState } from "react";
import ProfileDetails from "./components/profileDetials/ProfileDetails";
import ProfileOfferings from "./components/profileOfferings/ProfileOfferings";
import "./profile.css";
import ProfileCategory from "./components/profileCategory/ProfileCategory";
import PartnerValidity from "./components/partnerValidity/PartnerValidity";

import { getPartnersProfile } from './../../services/partners';


export const BoosterProfile = () => {

const [boosterPartner, setBoosterPartner] = useState(null);

const fetchProfile = async() =>{
  const res = await getPartnersProfile();
  setBoosterPartner(res)
}


useEffect(() =>{

  fetchProfile();

  return () =>{
    setBoosterPartner(null)
  }

},[])

console.log(boosterPartner)




  return (
    <div className="profile">
      <section className="mb-3">
        <ProfileDetails data={boosterPartner && boosterPartner }   />
      </section>

      <section className="mb-3 profile-tab">
        <h2 className="active">Our Offerings</h2>
      </section>

      <section className="row profile-more">
        <div className="col-lg-7 pl-0">
          <ProfileOfferings data={boosterPartner && boosterPartner?.offerings} />
        </div>
        <div className="col-lg-5 pr-0">
          <div>
            <ProfileCategory data={boosterPartner && boosterPartner } />
          </div>
          <div>
            <PartnerValidity data={boosterPartner && boosterPartner }  />
          </div>
        </div>
      </section>
    </div>
  );
};
