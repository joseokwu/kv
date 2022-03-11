import React, { useMemo } from "react";
import { Table } from "../../../../../mentorComponents";

const PreviousRound = ({ data = [] }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Investor",
        accessor: "invest",
      },
      {
        Header: "Funding Date",
        accessor: "fundDate",
      },
      {
        Header: "Deal Type",
        accessor: "dealType",
      },
      {
        Header: "Funding Round",
        accessor: "fundRound",
      },
      {
        Header: "Investment Amount",
        accessor: "investAmnt",
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
        accessor: "pstMoney",
      },
    ],
    []
  );

  // const data = [
  //   {
  //     investor: "John Carter",
  //     fundingDate: "20 November, 2021",
  //     dealType: "Common Equity",
  //     fundingRound: "Seed",
  //     dilution: "20%",
  //     preMoney: "$5,000",
  //     postMoney: "$10,000",
  //     investmentAmount: "$30,000",
  //   },
  //   {
  //     investor: "John Carter",
  //     fundingDate: "20 November, 2021",
  //     dealType: "Preferred Shares",
  //     fundingRound: "Pre-Series A",
  //     dilution: "20%",
  //     preMoney: "$5,000",
  //     postMoney: "$10,000",
  //     investmentAmount: "$20,000",
  //   },
  //   {
  //     investor: "John Carter",
  //     fundingDate: "20 November, 2021",
  //     dealType: "Debit Financing",
  //     fundingRound: "Pre-Series A",
  //     dilution: "20%",
  //     preMoney: "$5,000",
  //     postMoney: "$10,000",
  //     investmentAmount: "$40,000",
  //   },
  //   {
  //     investor: "John Carter",
  //     fundingDate: "20 November, 2021",
  //     dealType: "Common Equity",
  //     fundingRound: "Series A",
  //     dilution: "20%",
  //     preMoney: "$5,000",
  //     postMoney: "$10,000",
  //     investmentAmount: "$10,000",
  //   },
  // ];
  return (
    <section className="mb-4">
      {/* <h4 className="mb-5 fundraisingSubTitle">Previous Round</h4> */}

      <section className="text-center">
        <Table columns={columns} data={data} className="prev-table" />
      </section>
    </section>
  );
};

export default PreviousRound;
