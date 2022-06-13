import { Header, Table, Section } from "./cap.styled";
import downloadIcon from "../../../../assets/icons/downloadoutline.svg";
import html2pdf from "html2pdf.js";
import { useHistory } from "react-router-dom";

export const CapTable = (data) => {
  const history = useHistory();
  const downloadStatement = () => {
    const element = document.querySelector("#cap");

    let opt = {
      margin: 1,
      filename: "capital table.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    return html2pdf().from(element).set(opt).save();
  };

  console.log(data)
  

  return (
    <div id="cap">
      <Header className="d-flex justify-content-between">
        <div>{/* <h4>Cap Table</h4> */}</div>
        <div className="d-flex">
          {/* <img src={downloadIcon} className="mr-2" alt="." />
          <a className="pe-3" href="#" onClick={downloadStatement}>
            Download.xlsx
          </a> */}
          <span onClick={() => history.push('/startup/registration#Financial%20Projection')} >Update details</span>
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
            { Array.isArray(data?.data)  &&
              data?.data.map((data) => (
                <tr key={data}>
                  <td> {data?.Shareholders} </td>
                  <td> {data?.Sharetype} </td>
                  <td> {data?.numberofshares} </td>
                  <td> {data?.sharesPercent} </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Section>
    </div>
  );
};
