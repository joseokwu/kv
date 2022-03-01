import { Header, Table, Section } from "./prevRpund.styled";
import html2pdf from "html2pdf.js";
import downloadIcon from "../../../../assets/icons/downloadoutline.svg";

export const PreviousRound = ({ data = [] }) => {
  console.log("data", data);
  const downloadStatement = () => {
    const element = document.querySelector("#fndRound");

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

  const preRoundArr = [...data];

  return (
    <div id="fndRound">
      <Header className="d-flex justify-content-end">
        {/* <h4>Previous Round</h4> */}

        <div className="d-flex">
          <img src={downloadIcon} className="mr-2" alt="." />
          <a className="pe-3" href="#" onClick={downloadStatement}>
            Download.xlsx
          </a>
          <span>Update details</span>
        </div>
      </Header>
      <Table className="table table-borderless">
        <thead>
          <tr>
            <th>Investor</th>
            <th>Funding Date</th>
            <th>Deal Type </th>
            <th>Funding Round </th>
            <th>Investment Amount </th>
            <th>Dilution </th>
            <th>Pre-Money </th>
            <th>Post-Money </th>
          </tr>
        </thead>
        <tbody>
          {preRoundArr?.length > 0 &&
            preRoundArr.map((data) => (
              <tr key={data}>
                <td style={{ fontWeight: "600", lineHeight: "130%" }}>
                  {" "}
                  {data?.invest}{" "}
                </td>
                <td style={{ fontWeight: "600", lineHeight: "130%" }}>
                  {" "}
                  {data?.fundDate}{" "}
                </td>
                <td style={{ fontWeight: "600", lineHeight: "130%" }}>
                  {" "}
                  {data?.dealType}{" "}
                </td>
                <td style={{ fontWeight: "600", lineHeight: "130%" }}>
                  {" "}
                  {data?.fundRound}{" "}
                </td>
                <td style={{ fontWeight: "600", lineHeight: "130%" }}>
                  {" "}
                  {data?.investAmnt}{" "}
                </td>
                <td style={{ fontWeight: "600", lineHeight: "130%" }}>
                  {" "}
                  {data?.dulition}{" "}
                </td>
                <td style={{ fontWeight: "600", lineHeight: "130%" }}>
                  {" "}
                  {data?.preMoney}{" "}
                </td>
                <td style={{ fontWeight: "600", lineHeight: "130%" }}>
                  {" "}
                  {data?.pstMoney}{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
