import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Card } from "./expenseChart.styled";

const dataForPlaceholder = [
  { name: "Legend label", color: "#50AEF4", size: 25 },
  { name: "Legend label", color: "#3AB011", size: 25 },
  { name: "Legend label", color: "#FF8E29", size: 25 },
  { name: "Legend label", color: "#890C85", size: 18 },
  { name: "others", color: "#C5C5C5", size: 7 },
];
export const ExpenseChart = ({
  title = "Monthly Revenue",
  data = dataForPlaceholder,
}) => {
  return (
    <Card>
      <h5>{title}</h5>
      <div className="row">
        <section className="col-lg-7 mb-4">
          <Doughnut
            data={{
              labels: [...data?.map((d) => d.name)],
              datasets: [
                {
                  data: [...data.map((d) => d.size)],
                  backgroundColor: [...data?.map((d) => d.color)],
                  hoverOffset: 5,
                  cutout: "65%",
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
        </section>

        <section className="col-lg-5 d-flex flex-column justify-content-center pl-lg-5 mb-4">
          {data?.length > 0 &&
            data?.map((d, i) => {
              return (
                <div
                  className="d-flex align-items-center mb-2"
                  style={{ columnGap: 8 }}
                  key={`legend-${i}`}
                >
                  <Checkbox color={d?.color} />
                  <p className="legend-name">{d.name}</p>
                  <p className="ml-2 percentage">{d.size}%</p>
                </div>
              );
            })}
        </section>
      </div>
    </Card>
  );
};

const Checkbox = ({ color = "#C5C5C5" }) => {
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
        d="M2 0C0.895431 0 0 0.895431 0 2V10C0 11.1046 0.895431 12 2 12H10C11.1046 12 12 11.1046 12 10V2C12 0.895431 11.1046 0 10 0H2ZM2 10V2H10V10H2Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 0C0.895431 0 0 0.895431 0 2V10C0 11.1046 0.895431 12 2 12H10C11.1046 12 12 11.1046 12 10V2C12 0.895431 11.1046 0 10 0H2ZM9.205 3.11495L9.884 3.79467C9.959 3.86964 10 3.9686 10 4.06656C10 4.17251 9.963 4.27447 9.884 4.35444L5.353 8.88455C5.198 9.03848 4.948 9.03848 4.793 8.88455L2.115 6.20566C2.036 6.1267 2 6.02474 2 5.92078C2 5.82082 2.04 5.72287 2.115 5.6479L2.794 4.96918C2.871 4.89221 2.973 4.85323 3.074 4.85323C3.175 4.85323 3.276 4.89221 3.353 4.96818L5.073 6.68946L8.646 3.11495C8.723 3.03798 8.824 3 8.926 3C9.027 3 9.128 3.03798 9.205 3.11495Z"
        fill={color}
      />
    </svg>
  );
};
