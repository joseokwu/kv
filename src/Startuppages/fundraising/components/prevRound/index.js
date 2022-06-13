import { Header, Table, Section } from "./prevRpund.styled";
import html2pdf from "html2pdf.js";
import downloadIcon from "../../../../assets/icons/downloadoutline.svg";
import moment from "moment";
import { useHistory } from "react-router-dom";


export const PreviousRound = ({ data  }) => {

  const history = useHistory();

  const downloadStatement = () => {
    const element = document.querySelector("#fndRound");

    let opt = {
      margin: 1,
      filename: "capital table.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    return html2pdf().from(element).set(opt).save();
  };

  console.log()

  return (
    <div id="fndRound">
      <Header className="d-flex justify-content-end">
        {/* <h4>Previous Round</h4> */}

        <div className="d-flex">
          {/* <img src={downloadIcon} className="mr-2" alt="." />
          <a className="pe-3" href="#" onClick={downloadStatement}>
            Download.xlsx
          </a> */}
          <span onClick={() => history.push('/startup/registration#Previous%20Round')} >Update details</span>
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
           { data &&
            (
              <tr >
                <td style={{ fontWeight: "600", lineHeight: "130%" }}>
                  {" "}
                  {data?.invest ?? ''}{" "}
                </td>
                <td style={{ fontWeight: "600", lineHeight: "130%" }}>
                  {" "}
                  { moment(data?.dateOfFunding).format('YYYY-MM-DD') }{" "}
                </td>
                <td style={{ fontWeight: "600", lineHeight: "130%" }}>
                  {" "}
                  {data?.dealType}{" "}
                </td>
                <td style={{ fontWeight: "600", lineHeight: "130%" }}>
                  {" "}
                  {data?.numberOfRounds}{" "}
                </td>
                <td style={{ fontWeight: "600", lineHeight: "130%" }}>
                  {" "}
                  {data?.instrumentForRound}{" "}
                </td>
                <td style={{ fontWeight: "600", lineHeight: "130%" }}>
                  {" "}
                  {data?.dilution}{" "}
                </td>
                <td style={{ fontWeight: "600", lineHeight: "130%" }}>
                  {" "}
                  {data?.preMoneyValuation}{" "}
                </td>
                <td style={{ fontWeight: "600", lineHeight: "130%" }}>
                  {" "}
                  {data?.postMoneyValuation}{" "}
                </td>
              </tr>
            )} 
        </tbody>
      </Table>
    </div>
  );
};
