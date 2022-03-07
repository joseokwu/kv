import React, { useEffect, useState } from "react";
import filter from "../../assets/icons/filterFunnel.svg";
import down from "../../assets/icons/chevronDown.svg";
import { getInvestorEvaluation } from "../../services/investor";
import {
  DashCard,
  EvaluationCompletedCard,
  AllEvaluationCard,
  Tabs,
  EvaluationPendingCard,
} from "../../components";

export const InvestorEvaluation = ({ history }) => {
  const {
    location: { hash },
  } = history;

  const [evalCardsData, setEvalCardsData] = useState([]);
  const [assigned, setAssigned] = useState([]);
  const [pending, setPending] = useState([]);
  const [completed, setCompleted] = useState([]);

  const fetchData = async () => {
    const res = await getInvestorEvaluation();

    console.log("res", res);
    setEvalCardsData(res);
    setAssigned(res?.startups);
    setPending(() =>
      res?.startups?.filter((x) => x.status?.toLowerCase() === "pending")
    );
    setCompleted(() =>
      res?.startups?.filter((x) => x.status?.toLowerCase() === "completed")
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("pending", pending);
  const cardColors = ["#D5D6F4", "#DEF6FF", "#D5D6F4"];

  const cardData =
    evalCardsData?.assignedStartups.length > 0
      ? [
          {
            name: "Incubation Program",
            count: evalCardsData?.incubations,
            color: cardColors[0],
          },
          {
            name: "Partner",
            count: evalCardsData?.partners,
            color: cardColors[1],
          },
          {
            name: "Total Startup Assigned",
            count: evalCardsData?.assignedStartups,
            color: cardColors[2],
          },
        ]
      : [
          {
            name: "Incubation Program",
            count: 0,
            color: cardColors[0],
          },
          {
            name: "Partners",
            count: 0,
            color: cardColors[1],
          },
          {
            name: "Total Startup Assigned",
            count: 0,
            color: cardColors[2],
          },
        ];

  const renderContent = () => {
    switch (hash) {
      case "#All":
        return <AllEvaluationCard data={assigned} />;

      case "#Pending":
        return (
          <div className="row">
            {pending?.length > 0 ? (
              pending?.map((p, i) => {
                return (
                  <div className="col-xl-6 mb-3">
                    <EvaluationPendingCard data={p} />
                  </div>
                );
              })
            ) : (
              <div className="col-12 my-5 text-center">
                <span className="pending-tag">No Pending Evaluation</span>
              </div>
            )}
          </div>
        );

      case "#Completed":
        return (
          <div className="row">
            {completed?.length > 0 ? (
              completed?.map((c, i) => {
                <div className="col-xl-6">
                  <EvaluationCompletedCard data={c} />
                </div>;
              })
            ) : (
              <div className="col-12 my-5 text-center">
                <span className="completed-tag">No Completed Evaluation</span>
              </div>
            )}
          </div>
        );

      default:
        return <AllEvaluationCard data={assigned} />;
    }
  };

  const tabItems = ["All", "Pending", "Completed"];

  return (
    <div className="dashboard_main container-fluid">
      <section className="row pb-5">
        <section
          className="col-lg-12 d-flex align-items-center dashboard-cards position-sticky"
          style={{ background: "#fefefe" }}
        >
          {cardData.map((data, i) => (
            <DashCard
              name={data.name}
              count={data.count}
              color={data.color}
              key={i}
            />
          ))}
        </section>
      </section>

      <section className=" d-flex align-items-center justify-content-between">
        <Tabs tabItems={tabItems} />
        <div>
          <button
            className="d-flex align-items-center filter-btn"
            style={{ columnGap: 7 }}
            data-toggle="dropdown"
          >
            <img src={filter} alt="filter" />
            <span>Filter</span>
            <img className="pl-1" src={down} alt="down" />
          </button>
        </div>
      </section>

      <div className="pt-3">
        <section className="mt-1">{renderContent()}</section>
      </div>
    </div>
  );
};
