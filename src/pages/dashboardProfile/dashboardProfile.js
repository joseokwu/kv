import React from 'react'
import './dashboardProfile.css'
import founderPic from '../../assets/images/dashImg.svg'
import twitter from '../../assets/images/dashtwitter.svg'
import facebook from '../../assets/images/dashfb.svg'
import linkedIn from '../../assets/images/dashIn.svg'

export const DashboardProfile = () => {
  return (
    <section className="container dashboard_profle mt-4">
      <div className="col">
        <div className="dashboard_profile_banner"></div>
        <div className="dashboard_profile_info">
          <span className="dashboard_profile_image">
            <img src={founderPic} alt="founder pic" />
          </span>

          <article className="mx-5 mt-4">
            <div className="d-flex">
              <div>
                <h3>Mr Promise Amstel</h3>
              </div>

              <div>
                  <img src={twitter} alt="twitter"/>
                  <img src={facebook} alt="facebook"/>
                  <img src={linkedIn} alt="linkedIn"/>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
