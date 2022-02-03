import React from 'react'
import { Table } from '../../../../../mentorComponents'

export const FundingAsk = () => {
  return (
    <div>
      <FundingAskTable />
      <CommitmentTable />
    </div>
  )
}

const FundingAskTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Fund Requirement',
        accessor: 'fundingRequirement',
      },
      {
        Header: 'Deal Type',
        accessor: 'dealType',
      },
      {
        Header: 'Funding Round',
        accessor: 'fundingRound',
      },
      {
        Header: 'Dilution',
        accessor: 'dilution',
      },
      {
        Header: 'Pre-Money',
        accessor: 'preMoney',
      },
      {
        Header: 'Post-Money',
        accessor: 'postMoney',
      },
      {
        Header: 'Funding Closing Date',
        accessor: 'fundingClosingDate',
      },
    ],
    [],
  )

  const data = [
    {
      fundingRequirement: '$1,000,000',
      dealType: 'Common Equity',
      fundingRound: 'Seed',
      dilution: '10%',
      preMoney: '$20,000',
      postMoney: '$30,000',
      fundingClosingDate: '20 November, 2021',
    },
  ]
  return (
    <section className="mb-4">
      {/* <h4 className="mb-5 fundraisingSubTitle">Funding Ask</h4> */}

      <section>
        <Table columns={columns} data={data} />
      </section>
    </section>
  )
}

const CommitmentTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Investors',
        accessor: 'investor',
      },
      {
        Header: 'Investor Type',
        accessor: 'InvestorType',
      },
      {
        Header: 'Amount',
        accessor: 'amount',
      },
      {
        Header: 'Lead Investor',
        accessor: 'leadInvestor',
      },
    ],
    [],
  )

  const data = [
    {
      investor: 'Prima Jakatar Umbre',
      InvestorType: 'Angel Investor',
      amount: '$100,000',
      leadInvestor: 'Yes',
    },
    {
      investor: 'John Carter Lumber',
      InvestorType: 'Angel Investor',
      amount: '$100,000',
      leadInvestor: 'No',
    },
    {
      investor: 'Leo Ming Chang',
      InvestorType: 'Angel Investor',
      amount: '$100,000',
      leadInvestor: 'No',
    },
    {
      investor: 'Chun Lee Queen',
      InvestorType: 'Angel Investor',
      amount: '$100,000',
      leadInvestor: 'No',
    },
    {
      investor: 'Chun Lee Queen',
      InvestorType: 'Angel Investor',
      amount: '$100,000',
      leadInvestor: 'No',
    },
    {
      investor: 'Chun Lee Queen',
      InvestorType: 'Angel Investor',
      amount: '$100,000',
      leadInvestor: 'No',
    },
  ]
  return (
    <section className="pt-2">
      <h4 className="mb-5 fundraisingSubTitle">Commitments</h4>
      <section className="text-center">
        <Table columns={columns} data={data} />
      </section>
    </section>
  )
}

export default FundingAsk
