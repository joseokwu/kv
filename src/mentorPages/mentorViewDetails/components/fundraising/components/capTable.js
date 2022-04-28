import React, { useMemo } from "react";
import { Table } from "../../../../../mentorComponents";

const CapTable = ({ data = [] }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Shareholders",
        accessor: "shareHolders",
      },
      {
        Header: "Shareholder Type",
        accessor: "shareType",
      },
      {
        Header: "Number of shares",
        accessor: "noShares",
      },
      {
        Header: "Percentage (%) of shares",
        accessor: "sharePercent",
      },
    ],
    []
  );

  // const data = [
  //   {
  //     shareHolders: "John Carter Robinson",
  //     shareHolderType: "Angel Investor",
  //     numberOfShares: "5",
  //     percentage: "2.5%",
  //   },
  //   {
  //     shareHolders: "John Carter Robinson",
  //     shareHolderType: "",
  //     numberOfShares: "15",
  //     percentage: "5.6%",
  //   },
  //   {
  //     shareHolders: "John Carter Robinson",
  //     shareHolderType: "Angel Investor",
  //     numberOfShares: "5",
  //     percentage: "2.5%",
  //   },
  //   {
  //     shareHolders: "John Carter Robinson",
  //     shareHolderType: "",
  //     numberOfShares: "15",
  //     percentage: "5.6%",
  //   },
  //   {
  //     shareHolders: "John Carter Robinson",
  //     shareHolderType: "Angel Investor",
  //     numberOfShares: "5",
  //     percentage: "2.5%",
  //   },
  //   {
  //     shareHolders: "John Carter Robinson",
  //     shareHolderType: "",
  //     numberOfShares: "15",
  //     percentage: "5.6%",
  //   },
  //   {
  //     shareHolders: "Total",
  //   },
  // ];
  return (
    <section className="mb-4">
      {/* <h4 className="mb-5 fundraisingSubTitle">Cap Table</h4> */}

      <section className="text-center">
        <Table columns={columns} data={data} className="cap-table" />
      </section>
    </section>
  );
};

export default CapTable;
