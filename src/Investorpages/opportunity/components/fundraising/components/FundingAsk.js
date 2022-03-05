import React from "react";
import { Table } from "../../../../../components";

const FundingAsk = ({data}) => {
  
  return (
    <div>
      <FundingAskTable info={data && data?.requirement} />
      <CommitmentTable data={data?.committment} />
    </div>
  );
};

const FundingAskTable = ({info}) => {


  const columns = 
   [
      {
        Header: "Fund Requirement",
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
    ]
  
  

 

  return (
    <section className="mb-4">
      {/* <h4 className="mb-5 fundraisingSubTitle">Funding Ask</h4> */}

      <section>
      {
        info && info.length > 0 && (
          <Table columns={columns} data={info} />
        )
      }
      </section>
    </section>
  );
};

const CommitmentTable = ({data}) => {
  const columns = 
    [
      {
        Header: "Investors",
        accessor: "investor",
      },
      {
        Header: "Investor Type",
        accessor: "InvestorType",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Lead Investor",
        accessor: "leadInvestor",
      }
    ]
  


  return (
    <section className="pt-2">
      <h4 className="mb-5 fundraisingSubTitle">Commitments</h4>
      <section>
        {
        data && data.length > 0 && (
            <Table columns={columns} data={data} />
          )
        }
      </section>
    </section>
  );
};

export default FundingAsk;
