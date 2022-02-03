import React from "react";
import ProfileDetails from "./components/profileDetials/ProfileDetails";
import ProfileOfferings from "./components/profileOfferings/ProfileOfferings";
import "./profile.css";
import ProfileCategory from "./components/profileCategory/ProfileCategory";
import PartnerValidity from "./components/partnerValidity/PartnerValidity";

export const Profile = () => {
  return (
    <div className="profile">
      <section className="mb-3">
        <ProfileDetails />
      </section>

      <section className="mb-3 profile-tab">
        <h2 className="active">Our Offerings</h2>
      </section>

      <section className="row profile-more">
        <div className="col-lg-7 pl-0">
          <ProfileOfferings />
        </div>
        <div className="col-lg-5 pr-0">
          <div>
            <ProfileCategory />
          </div>
          <div>
            <PartnerValidity />
          </div>
        </div>
      </section>
    </div>
  );
};
