import React , { useState, useEffect} from 'react'
import Availability from './components/availability/availability'
import Consulting from './components/consulting/consulting'
import Experience from './components/experience/experience'
import Interest from './components/interest/interest'
import Details from './components/details/details'
import './profile.css';
import { mentorProfile } from './../../services/mentor';

import { PageLoader } from './../../components/pageLoader/PageLoader';

export const MentorProfile = () => {

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProfile = async() =>{
    setLoading(true)
    const res = await mentorProfile();
     setProfile(res)
     setLoading(false)
  }

useEffect(() =>{
  fetchProfile();

  return () =>{
    setProfile();
  }

},[])

  if(loading){
    return <PageLoader />
  }else{
    return (
      <div className="profile">
        <section className="mb-3">
          <Details data={profile} />
        </section>
  
        <section className="row profile-more">
          <div className="col-lg-8 pl-0">
            <div>
         
              <Experience data={profile} />
            </div>
            <div className="mt-3">
              <Interest data={profile} />
            </div>
          </div>
  
          <div className="col-lg-4 pr-0">
            <div>
              <Availability />
            </div>
            <div>
              <Consulting data={profile} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}
