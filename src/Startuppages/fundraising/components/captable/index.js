import { Header, Table, Section } from "./cap.styled";
import downloadIcon from "../../../../assets/icons/downloadoutline.svg";
import html2pdf from "html2pdf.js";

export const CapTable = (data = []) => {
  const downloadStatement = () => {
    const element = document.querySelector("#cap");

    let opt = {
      margin: 1,
      filename: "capital table.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    //console.log(html2pdf().from(element).set(opt).save())

    return html2pdf().from(element).set(opt).save();
  };

  console.log("data", data.data);

  const capTable = [...data?.data];

  return (
    <div id="cap">
      <Header className="d-flex justify-content-between">
        <div>{/* <h4>Cap Table</h4> */}</div>
        <div className="d-flex">
          <img src={downloadIcon} className="mr-2" alt="." />
          <a className="pe-3" href="#" onClick={downloadStatement}>
            Download.xlsx
          </a>
          <span>Update details</span>
        </div>
      </Header>

      <Section>
        <Table className="table table-striped">
          <thead className="">
            <tr>
              <th>Share Holders</th>
              <th>Shareholder Type </th>
              <th>Number of Shares </th>
              <th>Shares (%) </th>
            </tr>
          </thead>
          <tbody>
            {capTable?.length > 0 &&
              capTable.map((data) => (
                <tr key={data}>
                  <td> {data?.shareHolders} </td>
                  <td> {data?.shareType} </td>
                  <td> {data?.noShare} </td>
                  <td> {data?.sharePercent} </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Section>
    </div>
  );
};
