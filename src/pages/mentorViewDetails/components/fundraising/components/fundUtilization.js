import React from 'react'
import { ExpenseChart, Select } from '../../../../../components'

const FundUtilization = () => {
  return (
    <div>
      <section>
        <UtilizationTable />
      </section>
    </div>
  )
}

const UtilizationTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: '',
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
      <h4 className="mb-5 fundraisingSubTitle">Fund Utilization</h4>
      <section style={{ overflow: 'auto' }}>
        <table className="util-table">
          <thead>
            <tr>
              <th></th>
              <th>Month 1</th>
              <th>Month 2</th>
              <th>Month 3</th>
              <th>Month 4</th>
              <th>Month 5</th>
              <th>Month 6</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="title">Revenue</td>
              <td>$200,000</td>
              <td>$300,000</td>
              <td>$120,000</td>
              <td>$150,000</td>
              <td>$150,000</td>
              <td>$150,000</td>
            </tr>
            <tr>
              <td>Growth %</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="title">Expenses</td>
              <td>$200,000</td>
              <td>$300,000</td>
              <td>$120,000</td>
              <td>$150,000</td>
              <td>$150,000</td>
              <td>$150,000</td>
            </tr>
            <tr>
              <td>Growth %</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="title">Burn rate</td>
              <td>$200,000</td>
              <td>$300,000</td>
              <td>$120,000</td>
              <td>$150,000</td>
              <td>$150,000</td>
              <td>$150,000</td>
            </tr>
            <tr>
              <td className="title">Runway Months</td>
              <td>$200,000</td>
              <td>$300,000</td>
              <td>$120,000</td>
              <td>$150,000</td>
              <td>$150,000</td>
              <td>$150,000</td>
            </tr>
            <tr>
              <td className="title">No. of customers</td>
              <td>50</td>
              <td>10</td>
              <td>20</td>
              <td>30</td>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Growth %</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="title">No. of employees</td>
              <td>50</td>
              <td>10</td>
              <td>20</td>
              <td>30</td>
              <td>100</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mt-5 chart-card">
        <div className="mb-4 d-flex justify-content-end">
          <Select option={['Month 1']} placeholder={'Month 1'} />
        </div>
        <div className="row">
          <article className="col-xl-6 mb-4">
            <ExpenseChart />
          </article>
          <article className="col-xl-6 mb-4">
            <ExpenseChart title="Monthly Expenses" />
          </article>
          <article className="col-xl-6 mb-4">
            <ExpenseChart title="Burn Rate" />
          </article>
          <article className="col-xl-6 mb-4">
            <ExpenseChart title="Runway Months" />
          </article>
        </div>
      </section>
    </section>
  )
}

export default FundUtilization
