import React, { useMemo } from "react";
import { Table } from "../../../../../components";

const CapTable = ({data}) => {

  const columns = 
  [
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
        accessor: "noShare",
      },
      {
        Header: "Percentage (%) of shares",
        accessor: "sharePercent",
      },
    ]
   


  return (
    <section className="mb-4">
      {/* <h4 className="mb-5 fundraisingSubTitle">Cap Table</h4> */}

      <section>
        {
          data && data.length > 0 && (
            <Table columns={columns} data={data} className="cap-table" />
          )
        }
        
      </section>
    </section>
  );
};

export default CapTable;
