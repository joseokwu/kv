import React, { useEffect, useState } from "react";
import {
  MentorDashCard,
  EvaluationCompletedCard,
  AllEvaluationCard,
  Tabs,
  EvaluationPendingCard,
} from "../../mentorComponents";
import filter from "../../assets/icons/filterFunnel.svg";
import down from "../../assets/icons/chevronDown.svg";
import "./evaluation.css";
import { mentorEvaluations } from "../../services/mentor";

export const MentorEvaluation = ({ history }) => {
  const {
    location: { hash },
  } = history;

  const [evalCardsData, setEvalCardsData] = useState([]);
  const [assigned, setAssigned] = useState([]);
  const [pending, setPending] = useState([]);
  const [completed, setCompleted] = useState([]);

  const fetchData = async () => {
    const res = await mentorEvaluations();

    setEvalCardsData(res?.cards);
    setAssigned(res?.AssignedStartups);
    setPending(() =>
      res?.AssignedStartups?.filter(
        (x) => x.status?.toLowerCase() === "pending"
      )
    );
    setCompleted(() =>
      res?.AssignedStartups?.filter(
        (x) => x.status?.toLowerCase() === "completed"
      )
    );
  };

  useEffect(() => {
    fetchData();

    return () =>{
      setCompleted();
      setPending();
      setAssigned(); 
      setEvalCardsData();     
    }

  }, [hash]);

  const cardColors = ["#D5D6F4", "#DEF6FF", "#D5D6F4"];
  //console.log(completed)
  const cardData =
    evalCardsData?.length > 0
      ? evalCardsData?.map((card, i) => {
          return {
            name: card.title,
            count: card.count,
            color: cardColors[i],
          };
        })
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
                  <div key={i} className="col-xl-6 mb-3">
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
                return (
                  <div key={i} className="col-xl-6">
                    <EvaluationCompletedCard data={c} />
                  </div>
                );
              })
            ) : (
              <div className="col-12 my-5 text-center">
                <span className="completed-tag">No Completed Evaluation</span>
              </div>
            )}
          </div>
        );

      default:
        return <AllEvaluationCard />;
    }
  };

  const tabItems = ["All", "Pending", "Completed"];

  return (
    <div className="dashboard_main container-fluid">
      <section className="row tab-wrap">
        <section
          className="col-lg-12 d-flex align-items-center dashboard-cards"
          style={{ background: "#fefefe" }}
        >
          {cardData.map((data, i) => (
            <MentorDashCard
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
        <div className="">
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
