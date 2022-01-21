import React from 'react'
import right from '../../assets/icons/right.svg'
import './productDemo.css'
import { CompanyDetails } from './components/companyDetails'
import { FinancialDetails } from './components/financialDetails'
import { FundingRound } from './components/FundingRound'
import { useHistory } from 'react-router-dom'

export const ProductDemo = () => {
  const { push } = useHistory()

  return (
    <div>
      <article className="pt-2">
        <section className="d-flex align-items-center">
          <span className="bread-start" role="button" onClick={() => {push('/')}}>Startups</span>
          <img src={right} alt="left" className="mx-3" />
          <span className="bread-end">Applane Insteen.</span>
        </section>

        <div className="row mt-5">
          <div className="col-lg-7">
            <CompanyDetails />
            <FinancialDetails />
          </div>
          <div className="col-lg-5">
            <FundingRound />
          </div>
        </div>
      </article>
    </div>
  )
}
