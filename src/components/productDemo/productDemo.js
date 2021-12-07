import React from 'react'
import './productDemo.css'
import apple from '../../assets/images/apple.svg'
import linkedIn from '../../assets/icons/dashlinkedin.svg'
import twitter from '../../assets/icons/dashtwitter.svg'
import whatsapp from '../../assets/icons/dashwhatsapp.svg'
import office from '../../assets/icons/office.svg'
import web from '../../assets/icons/web.svg'
import time from '../../assets/icons/time.svg'
import people from '../../assets/icons/people.svg'
import productDemo from '../../assets/images/product_demo.svg'
import { AuthButton } from '../../components'

export const ProductDemo = () => {
  return (
    <section className="col">
      <div className="row company_details pt-4 pb-5">
        <div className="col-lg-6">
          <ul class="breadcrumb">
            <li>
              <a href="#!">Startups</a>
            </li>
            <li>Applane Insteen</li>
          </ul>

          <section className="col-md company_head">
            <img src={apple} alt="apple" />

            <div className="mt-2">
              <h3>Applane Insteen</h3>
            </div>

            <div className="mt-2 mb-4 d-flex">
              <p className="pr-4">Tech Industry</p>
              <img className="pr-2" src={linkedIn} alt="linkedIn" />
              <img className="pr-2" src={twitter} alt="twitter" />
              <img src={whatsapp} alt="whatsapp" />
            </div>

            <div className="row">
              <div className="col-lg-6 company_details">
                <p className="pb-2">
                  <img className="pr-1" src={office} alt="" /> Califonia, United
                  States
                </p>
                <p className="pb-2">
                  <img className="pr-1" src={web} alt="" />
                  www.applaneinsteen.com
                </p>
                <p className="pb-2">
                  <img className="pr-1" src={time} alt="" /> Incorporated
                  2/09/19
                </p>
                <p>
                  <img className="pr-1" src={people} alt="" /> 5 Employees
                </p>
              </div>

              <div className="col-lg-6">
                <p className="pb-2">Company Stage - Seed / Pre-seed</p>
                <p className="pb-2">Total Funding - $100k</p>
                <p className="">Last Funding Round- Undisclosed</p>
              </div>

              <div className="col-lg mt-4">
                <AuthButton className="mr-4" label="Evaluate" />
                <AuthButton label="Schedule Call" />
              </div>
            </div>
          </section>
        </div>

        <div className="col-lg-6 company_demo">
          <p className="pb-2">Product Demo</p>
          <img src={productDemo} alt="product demo" />
        </div>
      </div>
    </section>
  )
}
