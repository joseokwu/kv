import React, { useMemo } from "react";
import { Table } from "../../../../../components";

const PreviousRound = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Investor",
        accessor: "investor",
      },
      {
        Header: "Funding Date",
        accessor: "fundingDate",
      },
      {
        Header: "Deal Type",
        accessor: "dealType",
      },
      {
        Header: "Funding Round",
        accessor: "fundingRound",
      },
      {
        Header: "Investment Amount",
        accessor: "investmentAmount",
      },
      {
        Header: "Dilution",
        accessor: "dilution",
      },
      {
        Header: "Pre-Money",
        accessor: "preMoney",
      },
      {
        Header: "Post-Money",
        accessor: "postMoney",
      },
    ],
    []
  );

  const data = [
    {
      investor: "John Carter",
      fundingDate: "20 November, 2021",
      dealType: "Common Equity",
      fundingRound: "Seed",
      dilution: "10%",
      preMoney: "$20,000",
      postMoney: "$30,000",
      fundingClosingDate: "20 November, 2021",
      ddd: "aaskwe",
      investmentAmount: "$30,000",
    },
    {
      investor: "John Carter",
      fundingDate: "20 November, 2021",
      dealType: "Common Equity",
      fundingRound: "Seed",
      dilution: "10%",
      preMoney: "$20,000",
      postMoney: "$30,000",
      fundingClosingDate: "20 November, 2021",
      ddd: "aaskwe",
      investmentAmount: "$30,000",
    },
    {
      investor: "John Carter",
      fundingDate: "20 November, 2021",
      dealType: "Common Equity",
      fundingRound: "Seed",
      dilution: "10%",
      preMoney: "$20,000",
      postMoney: "$30,000",
      fundingClosingDate: "20 November, 2021",
      ddd: "aaskwe",
      investmentAmount: "$30,000",
    },
    {
      investor: "John Carter",
      fundingDate: "20 November, 2021",
      dealType: "Common Equity",
      fundingRound: "Seed",
      dilution: "10%",
      preMoney: "$20,000",
      postMoney: "$30,000",
      fundingClosingDate: "20 November, 2021",
      ddd: "aaskwe",
      investmentAmount: "$30,000",
    },
  ];
  return (
    <section className="mb-4">
      {/* <h4 className="mb-5 fundraisingSubTitle">Previous Round</h4> */}

      <section>
        <Table columns={columns} data={data} className="prev-table" />
      </section>
    </section>
  );
};

export default PreviousRound;
