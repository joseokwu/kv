import React, { useMemo } from "react";
import { Table } from "../../../../../components";

const CapTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Shareholders",
        accessor: "fundingRequirement",
      },
      {
        Header: "Shareholder Type",
        accessor: "dealType",
      },
      {
        Header: "Number of shares",
        accessor: "fundingRound",
      },
      {
        Header: "Percentage (%) of shares",
        accessor: "dilution",
      },
    ],
    []
  );

  const data = [
    {
      fundingRequirement: "John Carter Robinson",
      dealType: "Angel Investor",
      fundingRound: "5",
      dilution: "2.5%",
      preMoney: "$20,000",
      postMoney: "$30,000",
      fundingClosingDate: "20 November, 2021",
    },
    {
      fundingRequirement: "John Carter Robinson",
      dealType: "Angel Investor",
      fundingRound: "5",
      dilution: "2.5%",
      preMoney: "$20,000",
      postMoney: "$30,000",
      fundingClosingDate: "20 November, 2021",
    },
    {
      fundingRequirement: "John Carter Robinson",
      dealType: "Angel Investor",
      fundingRound: "5",
      dilution: "2.5%",
      preMoney: "$20,000",
      postMoney: "$30,000",
      fundingClosingDate: "20 November, 2021",
    },
    {
      fundingRequirement: "John Carter Robinson",
      dealType: "Angel Investor",
      fundingRound: "5",
      dilution: "2.5%",
      preMoney: "$20,000",
      postMoney: "$30,000",
      fundingClosingDate: "20 November, 2021",
    },
    {
      fundingRequirement: "John Carter Robinson",
      dealType: "Angel Investor",
      fundingRound: "5",
      dilution: "2.5%",
      preMoney: "$20,000",
      postMoney: "$30,000",
      fundingClosingDate: "20 November, 2021",
    },
  ];
  return (
    <section className="mb-4">
      <h4 className="mb-5 fundraisingSubTitle">Cap Table</h4>

      <section>
        <Table columns={columns} data={data} className="cap-table" />
      </section>
    </section>
  );
};

export default CapTable;
