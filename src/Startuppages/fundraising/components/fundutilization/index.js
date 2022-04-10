import { useEffect } from 'react';
import { Header, Table, Section } from "./utilization";
import downloadIcon from "../../../../assets/icons/downloadoutline.svg";
import ApplicationChart from "./applicationChart/ApplicationChart";
import html2pdf from "html2pdf.js";
import { Select } from "../../../../Startupcomponents";
import * as Papa from 'papaparse';
import axios from 'axios';

export const FundUtilization = ({ data  }) => {

  const downloadStatement = () => {
    const element = document.querySelector("#utilization");

    let opt = {
      margin: 1,
      filename: "fund utilization.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    return html2pdf().from(element).set(opt).save();
  };

  const fetchFile = async() =>{
    try{
      const res = await axios.get(data?.files)
      console.log(res?.data)
    }catch(err){
      console.log(err)
    }
  }

  //iles: "https://cdn.shoutng.com/kvu6t59yz90snuhtzaozkuapplication/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

  useEffect(() =>{
    fetchFile();
    
  },[])

  return (
    <div>
      <Header className="d-flex justify-content-between">
        <div>{/* <h4>Funding Utilization</h4> */}</div>
        <div className="d-flex">
          <img src={downloadIcon} className="mr-2" alt="." />
          <b className="pe-3" onClick={downloadStatement}>
            Download.xlsx
          </b>
          <span>Update details</span>
        </div>
      </Header>

      <Section id="utilization" className="table-responsive">
        <Table className="table text-center">
          <thead className="">
            <tr>
              <th></th>
              <th>Month 1</th>
              <th>Month 2 </th>
              <th>Month 3 </th>
              <th>Month 4 </th>
              <th>Month 5 </th>
              <th>Month 6 </th>
            </tr>
          </thead>

          <tbody>
           
          </tbody>
        </Table>
      </Section>
      {/* 
      <Section className="row py-5">
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
          <div className="col-xl-6 col-lg-6 mt-5">
            <ApplicationChart header="Monthly Revenue" />
          </div>
          <div className="col-xl-6 col-lg-6 mt-5">
            <ApplicationChart header="Monthly Expenses" />
          </div>
          <div className="col-xl-6 col-lg-6 mt-5">
            <ApplicationChart header="Burn Rate" />
          </div>
          <div className="col-xl-6 col-lg-6 mt-5">
            <ApplicationChart header="Runway Months" />
          </div>
        </div>
      </Section> */}
    </div>
  );
};

// {uitlizations?.length > 0 &&
//   uitlizations.map((data) => (
//     <tr key={data}>
//       <td style={{ fontWeight: "bolder" }}> {data?.head} </td>
//       <td> {data?.month1} </td>
//       <td> {data?.month2} </td>
//       <td> {data?.month3} </td>
//       <td> {data?.month4} </td>
//       <td> {data?.month5} </td>
//       <td> {data?.month6} </td>
//     </tr>
//   ))}
