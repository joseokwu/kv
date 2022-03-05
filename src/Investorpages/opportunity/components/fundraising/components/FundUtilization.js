import React from "react";
import { ExpenseChart, Select, Table } from "../../../../../components";

const FundUtilization = ({data}) => {
  return (
    <div>
      <section>
        <UtilizationTable data={data} />
      </section>
    </div>
  );
};

const UtilizationTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "fundingRequirement",
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
      {
        Header: "Funding Closing Date",
        accessor: "fundingClosingDate",
      },
    ],
    []
  );
    console.log(data.length)
  // const data = [
  //   {
  //     fundingRequirement: "$1000,000",
  //     dealType: "Common Equity",
  //     fundingRound: "Seed",
  //     dilution: "10%",
  //     preMoney: "$20,000",
  //     postMoney: "$30,000",
  //     fundingClosingDate: "20 November, 2021",
  //   },
  // ];

  return (
    <section className="mb-4">
      {/* <h4 className="mb-5 fundraisingSubTitle">Fund Utilization</h4> */}
      <section style={{ overflow: "auto" }}>
        <table className="util-table">
          <thead>
            <tr>
              <th></th>
                {
                 data.map((item , i) =>(
                  <th>Month {i + 1} </th>
                 )) 
                }
            
            </tr>
          </thead>

          <tbody>
                {
                data?.map((item, i) =>(
                  <tr key={i} >
                  <td className="title" > { item?.head} </td>
                  <td> { item?.month1 } </td>
                  <td> { item?.month2 } </td>
                  <td> { item?.month3 } </td>
                  <td> { item?.month4 } </td>
                  <td> { item?.month5 } </td>
                  <td> { item?.month6 } </td>
                  </tr>
                ))  
                }
            
          </tbody>
        </table>
      </section>

      <section className="mt-5 chart-card">
        <div className="mb-4 d-flex justify-content-end">
          <Select options={["Month 1"]} />
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
  );
};

export default FundUtilization;
