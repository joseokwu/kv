import React from 'react'
import './businessOverview.css'
import { Tag } from '../../components'
import kenny from '../../assets/images/kenny.svg'
import fanai from '../../assets/images/fanai.svg'
import founder from '../../assets/images/founder.svg'
import green from '../../assets/images/greenMap.svg'
import blue from '../../assets/images/blueMap.svg'
import gray from '../../assets/images/grayMap.svg'
import { CurrentInvestorConnectCard } from '../../components/currentInvestorConnectCard/currentInvestorConnectCard'

export const BusinessOverview = () => {
  const conn = [1, 2]
  return (
    <div className="business_overview">
      <div className="col">
        <div className="row">
          <div className="col-lg-8 pt-4" style={{ paddingRight: '70px' }}>
            <h3 className="pb-3">About Applane Insteen</h3>
            <p className="business_details pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Enim lectus morbi elementum
              eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Enim lectus morbi elementum
            </p>

            <section className="mt-4 industry">
              <h3 className="pb-3">Industry</h3>
              <span
                className="d-flex align-items-center flex-wrap"
                style={{ columnGap: 10, rowGap: 10 }}
              >
                <Tag name="Technology" />
                <Tag name="Engineering" color="#40439A" />
                <Tag name="Career" color="#E31937" />
                <Tag name="Engineering" color="#40439A" />
                <Tag name="Tech" />
              </span>
            </section>

            <section className="mt-4 team_member">
              <h3 className="pb-3">Team Members</h3>
              <div className="d-flex">
                <div className="d-flex mr-5">
                  <img className="pr-3" src={kenny} alt="team member" />
                  <div className="">
                    <h2 className="text-left">Kenny Ann</h2>
                    <span>Business Manager</span>
                  </div>
                </div>

                <div className="d-flex">
                  <img className="pr-3" src={fanai} alt="team member" />
                  <div className="">
                    <h2 className="text-left">Kenny Ann</h2>
                    <span>Business Manager</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="col-lg-4 pt-4">
            <div className="founder_profile p-4">
              <h3>Founder's Profile</h3>
              <div className="d-flex">
                <div className="mr-3">
                  <img src={founder} alt="" />
                </div>

                <div className="pt-2">
                  <h2>Mr Promise Amstel</h2>
                  <p className="pt-2">CEO Applean Insteen</p>
                  <button className="mt-3">
                    <a href="/mentor/dashboard/founder/profile">View</a>
                  </button>
                </div>
              </div>
            </div>

            <div className="founder_profile mt-3 p-4">
              <div>
                <h4>Current Investors</h4>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img className="pr-3" src={fanai} alt="team member" />
                    <div className="">
                      <h2 className="text-left">Kenny Ann</h2>
                      <span>Business Manager</span>
                    </div>
                  </div>

                  <div className="current_investor_connect">
                    <a href="#!">Connect</a>
                  </div>
                </div>

                <section>
                  {conn.map((c, i) => {
                    return (
                      <div key={`conn-${1}`} className="mb-3">
                        <CurrentInvestorConnectCard />
                      </div>
                    )
                  })}
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <section className="col-lg-4 mt-4 mb-5 product_road_map_title">
            <h3 className="pb-3">Product Road Map</h3>
            <div className="road_map py-5 px-5">
              <div className="d-flex">
                <div className="mr-3">
                  <img src={green} alt="green" />
                </div>
                <div className="">
                  <h3>Stage</h3>
                  <p>Euismod netus eget donec diam.</p>
                </div>
              </div>

              <div className="d-flex mt-3 mb-3">
                <div className="mr-3">
                  <img src={blue} alt="green" />
                </div>
                <div className="">
                  <h3>Idea</h3>
                  <p>Euismod netus eget donec diam.</p>
                </div>
              </div>

              <div className="d-flex mt-3 mb-3">
                <div className="mr-3">
                  <img src={gray} alt="green" />
                </div>
                <div className="">
                  <h3>Prototype</h3>
                  <p>Euismod netus eget donec diam.</p>
                </div>
              </div>

              <div className="d-flex mt-3 mb-3">
                <div className="mr-3">
                  <img src={gray} alt="green" />
                </div>
                <div className="">
                  <h3>Minimum Viable Product</h3>
                  <p>Euismod netus eget donec diam.</p>
                </div>
              </div>

              <div className="d-flex mt-3 mb-3">
                <div className="mr-3">
                  <img src={gray} alt="green" />
                </div>
                <div className="">
                  <h3>Early customers</h3>
                  <p>Euismod netus eget donec diam.</p>
                </div>
              </div>

              <div className="d-flex mt-3 mb-3">
                <div className="mr-3">
                  <img src={gray} alt="green" />
                </div>
                <div className="">
                  <h3>Revenue generating</h3>
                  <p>Euismod netus eget donec diam.</p>
                </div>
              </div>

              <div className="d-flex mt-3">
                <div className="mr-3">
                  <img src={gray} alt="green" />
                </div>
                <div className="">
                  <h3>Growth</h3>
                  <p>Euismod netus eget donec diam.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
