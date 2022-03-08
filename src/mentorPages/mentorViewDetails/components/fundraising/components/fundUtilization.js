import React from "react";
import { ExpenseChart, Select } from "../../../../../mentorComponents";

const FundUtilization = ({ data = {} }) => {
  return (
    <div>
      <section>
        <UtilizationTable data={data} />
      </section>
    </div>
  );
};

const UtilizationTable = ({ data = {} }) => {
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

  // const data = [
  //   {
  //     fundingRequirement: "$1,000,000",
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
        <table className="util-table text-center">
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
              {Object.values(data?.revenue).length > 0 &&
                Object.values(data?.revenue).map((d, i) => {
                  return <td>{d}</td>;
                })}
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
              {Object.values(data?.expenses).length > 0 &&
                Object.values(data?.expenses).map((d, i) => {
                  return <td>{d}</td>;
                })}
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
              {Object.values(data?.burnRate).length > 0 &&
                Object.values(data?.burnRate).map((d, i) => {
                  return <td>{d}</td>;
                })}
            </tr>
            <tr>
              <td className="title">Runway Months</td>
              {Object.values(data?.runwayMonths).length > 0 &&
                Object.values(data?.runwayMonths).map((d, i) => {
                  return <td>{d}</td>;
                })}
            </tr>
            <tr>
              <td className="title">No. of customers</td>
              {Object.values(data?.noOfCustomers).length > 0 &&
                Object.values(data?.noOfCustomers).map((d, i) => {
                  return <td>{d}</td>;
                })}
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
              {Object.values(data?.noOfEmployees).length > 0 &&
                Object.values(data?.noOfEmployees).map((d, i) => {
                  return <td>{d}</td>;
                })}
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mt-5 chart-card">
        <div className="mb-4 d-flex justify-content-end">
          <Select
            options={[
              "Month 1",
              "Month 2",
              "Month 3",
              "Month 4",
              "Month 5",
              "Month 6",
            ]}
            placeholder={"Month 1"}
          />
        </div>
        <div className="row">
          <article className="col-xl-6 mb-4">
            <ExpenseChart title="Monthly Revenue" />
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
