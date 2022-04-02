import React, { useMemo } from "react";
import { Table } from "../../../../../components";

const PreviousRound = ({data}) => {
  const columns =  [
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
    ]
    

  return (
    <section className="mb-4">
      {/* <h4 className="mb-5 fundraisingSubTitle">Previous Round</h4> */}

      <section>
      {
        data && data.length > 0 && (
          <Table columns={columns} data={data} className="prev-table" />
        )
      }
        
      </section>
    </section>
  );
};

export default PreviousRound;
