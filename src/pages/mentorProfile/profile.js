import React from 'react'
import Availability from './components/availability/availability'
import Consulting from './components/consulting/consulting'
import Experience from './components/experience/experience'
import Interest from './components/interest/interest'
import Details from './components/details/details'
import './profile.css'

export const Profile = () => {
  return (
    <div className="profile">
      <section className="mb-3">
        <Details />
      </section>

      <section className="row profile-more">
        <div className="col-lg-8 pl-0">
          <div>
          <Experience />
          </div>
          <div className="mt-3">
            <Interest />
          </div>
        </div>


        <div className="col-lg-4 pr-0">
          <div>
            <Availability />
          </div>
          <div>
            <Consulting />
          </div>
        </div>
      </section>
    </div>
  )
}
