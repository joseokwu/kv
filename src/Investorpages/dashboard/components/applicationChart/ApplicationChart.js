import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./applicationChart.css";

const ApplicationChart = () => {
  return (
    <div className="appChart-main">
      <h4 className="appChart-header">Applications</h4>

      <div style={{ maxWidth: 250 }} className="mx-auto">
        <Doughnut
          data={{
            labels: ["new", "pending", "approved", "expired", "re-applied"],
            datasets: [
              {
                data: [12, 5, 60, 10, 20],
                backgroundColor: [
                  "#74BE8C",
                  "#650A9D",
                  "#1880AC",
                  "#2196F3",
                  "#7B61FF",
                ],
                hoverOffset: 5,
                cutout: 70,
              },
            ],
          }}
          // width={300}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>

      <section className="row mx-0 appChart-legend">
        <div className="col-6">
          <section className="d-flex align-items-center appChart-label">
            <LabelCheck color="#74BE8C" />
            <p className="label-name">New</p>
            <p className="label-percent">25%</p>
          </section>
        </div>
        <div className="col-6">
          <section className="d-flex align-items-center appChart-label">
            <LabelCheck color="#2196F3" />
            <p className="label-name">Expired</p>
            <p className="label-percent">25%</p>
          </section>
        </div>
        <div className="col-6">
          <section className="d-flex align-items-center appChart-label">
            <LabelCheck color="#650A9D" />
            <p className="label-name">Pending</p>
            <p className="label-percent">25%</p>
          </section>
        </div>
        <div className="col-6">
          <section className="d-flex align-items-center appChart-label">
            <LabelCheck color="#7B61FF" />
            <p className="label-name">Re-applied</p>
            <p className="label-percent">25%</p>
          </section>
        </div>
        <div className="col-6">
          <section className="d-flex align-items-center appChart-label">
            <LabelCheck color="#1880AC" />
            <p className="label-name">Approved</p>
            <p className="label-percent">25%</p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ApplicationChart;

const LabelCheck = ({ color }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 0C0.895431 0 0 0.895431 0 2V10C0 11.1046 0.895431 12 2 12H10C11.1046 12 12 11.1046 12 10V2C12 0.895431 11.1046 0 10 0H2ZM9.205 3.11495L9.884 3.79467C9.959 3.86964 10 3.9686 10 4.06656C10 4.17251 9.963 4.27447 9.884 4.35444L5.353 8.88455C5.198 9.03848 4.948 9.03848 4.793 8.88455L2.115 6.20566C2.036 6.1267 2 6.02474 2 5.92078C2 5.82082 2.04 5.72287 2.115 5.6479L2.794 4.96918C2.871 4.89221 2.973 4.85323 3.074 4.85323C3.175 4.85323 3.276 4.89221 3.353 4.96818L5.073 6.68946L8.646 3.11495C8.723 3.03798 8.824 3 8.926 3C9.027 3 9.128 3.03798 9.205 3.11495Z"
        fill={color}
      />
    </svg>
  );
};
