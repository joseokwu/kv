import React from 'react'
import demo from '../../../../assets/images/demo.svg'
import founder from '../../../../assets/images/founder.svg'
import fanai from '../../../../assets/images/fana.svg'
import { CurrentInvestorConnectCard } from '../../../../mentorComponents'
import './product.css'

export const Product = () => {
  const countInvestor = [1, 2, 3, 4]
  return (
    <div className="row">
      <section className="col-xl-8">
        <div className="product-wrap opp-page-card py-5">
          <h3>Product Description</h3>
          <p className="pb-3 mb-5 prod-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
            morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Enim lectus morbi elementum
            eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
            lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Enim lectus morbi elementum
          </p>

          <h3>Product Demo</h3>

          <img
            src={demo}
            alt="demo video placeholder"
            className="product-demo pb-4"
          />
        </div>
      </section>

      <section className="col-xl-4">
        <div className="product-wrap opp-page-card mb-4">
          <h3 className="border-bottom pb-3">Founder’s Profile</h3>
          <section className="d-flex align-items-center mt-3 product-founder">
            <img src={founder} alt="founder" />
            <div>
              <p>Mr Promise Amstel</p>
              <small>CEO Applean Insteen</small>
            </div>
          </section>
          <section className="founder_profile mt-3">
            <div className="text-center">
              <a href="/dashboard/founder">View</a>
            </div>
          </section>
        </div>

        <div className="product-wrap opp-page-card">
          <h3 className="border-bottom pb-3 mb-4">Investors</h3>

          <section className="d-flex align-items-center justify-content-between mt-4 product-investor">
            <div className="d-flex align-items-center">
              <img src={fanai} alt="investor" className="mr-3" />
              <span>
                <p>Mr Promise Amstel</p>
                <small>Lead Investor</small>
              </span>
            </div>
            <a href="#!">Connect</a>
          </section>

          {countInvestor.map((c, i) => {
            return (
              <div key={`conn-${1}`} className="mb-3">
                <CurrentInvestorConnectCard />
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
