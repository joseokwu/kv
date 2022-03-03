import { Header, Table, Section } from "./ask.styled";
import downloadIcon from "../../../../assets/icons/downloadoutline.svg";

export const FundingAsk = ({ data = {} }) => {
  return (
    <div>
      <Header className="d-flex justify-content-end">
        <div>{/* <h4>Funding Ask</h4> */}</div>
        <div className="d-flex">
          <img src={downloadIcon} className="mr-2" alt="." />
          <a className="pe-3" href="#">
            Download.xlsx
          </a>
          <span>Update details</span>
        </div>
      </Header>
      <section className="my-5 table-responsive">
        <Table className="table">
          <thead>
            <tr>
              <th>Fund Requirement</th>
              <th>Deal Type</th>
              <th>Funding Round </th>
              <th>Dilution </th>
              <th>Pre-Money </th>
              <th>Post-Money </th>
              <th>Funding Close date </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {data?.requirement?.length > 0 &&
                data?.requirement?.map((i) => (
                  <td style={{ borderBottom: "1px solid #E6E7E9" }} key={i}>
                    {i}
                  </td>
                ))}
            </tr>
          </tbody>
        </Table>
      </section>
      <Section className="table-responsive">
        <h4>Commitment</h4>

        <Table className="table table-borderless">
          <thead className="">
            <tr>
              <th>Investors</th>
              <th>Investor Type</th>
              <th>Amount</th>
              <th>Lead Investor </th>
            </tr>
          </thead>
          <tbody>
            {data?.committment?.length > 0 &&
              data?.committment.map((data) => (
                <tr key={data?.investor}>
                  <td> {data?.investor} </td>
                  <td> {data?.investType} </td>
                  <td> {data?.amnt} </td>
                  <td> {data?.ledInvest} </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Section>
    </div>
  );
};
