import React, { useState, useEffect } from "react";
import Availability from "./components/availability/availability";
import Consulting from "./components/consulting/consulting";
import Experience from "./components/experience/experience";
import Interest from "./components/interest/interest";
import Details from "./components/details/details";
import "./profile.css";
import { mentorProfile } from "./../../services/mentor";

import { PageLoader } from "./../../components/pageLoader/PageLoader";
import { useAuth } from "../../hooks";

export const MentorProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProfile = async () => {
    setLoading(true);
    const res = await mentorProfile();
    setProfile(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchProfile();

    return () => {
      setProfile();
    };
  }, []);

  const { stateAuth } = useAuth();

  {
    return (
      <div className="profile">
        <section className="mb-3">
          <Details data={stateAuth?.mentorData?.personalDetail} />
        </section>

        <section className="row profile-more">
          <div className="col-lg-8 pl-0">
            <div>
              <Experience data={stateAuth?.mentorData?.workExperience} />
            </div>
            <div className="mt-3">
              <Interest data={stateAuth?.mentorData?.areaOfInterest} />
            </div>
          </div>

          <div className="col-lg-4 pr-0">
            <div>
              <Availability data={stateAuth?.mentorData?.areaOfInterest} />
            </div>
            <div>
              <Consulting data={stateAuth?.mentorData?.consultantOffering} />
            </div>
          </div>
        </section>
      </div>
    );
  }
};
