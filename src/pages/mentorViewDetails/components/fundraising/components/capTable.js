import React, { useMemo } from 'react'
import { Table } from '../../../../../components'

const CapTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Shareholders',
        accessor: 'shareHolders',
      },
      {
        Header: 'Shareholder Type',
        accessor: 'shareHolderType',
      },
      {
        Header: 'Number of shares',
        accessor: 'numberOfShares',
      },
      {
        Header: 'Percentage (%) of shares',
        accessor: 'percentage',
      },
    ],
    [],
  )

  const data = [
    {
      shareHolders: 'John Carter Robinson',
      shareHolderType: 'Angel Investor',
      numberOfShares: '5',
      percentage: '2.5%',
    },
    {
      shareHolders: 'John Carter Robinson',
      shareHolderType: '',
      numberOfShares: '15',
      percentage: '5.6%',
    },
    {
      shareHolders: 'John Carter Robinson',
      shareHolderType: 'Angel Investor',
      numberOfShares: '5',
      percentage: '2.5%',
    },
    {
      shareHolders: 'John Carter Robinson',
      shareHolderType: '',
      numberOfShares: '15',
      percentage: '5.6%',
    },
    {
      shareHolders: 'John Carter Robinson',
      shareHolderType: 'Angel Investor',
      numberOfShares: '5',
      percentage: '2.5%',
    },
    {
      shareHolders: 'John Carter Robinson',
      shareHolderType: '',
      numberOfShares: '15',
      percentage: '5.6%',
    },
    {
      shareHolders: 'Total',
    },
  ]
  return (
    <section className="mb-4">
      {/* <h4 className="mb-5 fundraisingSubTitle">Cap Table</h4> */}

      <section>
        <Table columns={columns} data={data} className="cap-table" />
      </section>
    </section>
  )
}

export default CapTable
