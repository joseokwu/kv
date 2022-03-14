import React, { useEffect, useState } from "react";
import { MentorDashCard } from "../../mentorComponents";
import down from "../../assets/icons/chevronDown.svg";
import "./assignments.css";
import { useHistory } from "react-router-dom";
import { mentorAssignments } from "../../services";
import { PageLoader } from "../../components";

export const MentorAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await mentorAssignments();
    setAssignments(res?.assignments ?? []);
    setCards(res?.cards ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const cardColors = ["#D5D6F4", "#DEF6FF", "#D5D6F4", "#DEF6FF"];
  const cardTitle = ["Assignment", "Submitted", "Pending"];
  const cardDataTemplate = [
    { name: "Assignment", count: 0, color: "#D5D6F4" },
    { name: "Submitted", count: 0, color: "#DEF6FF" },
    { name: "Pending", count: 0, color: "#D5D6F4" },
  ];

  const cardData =
    Object.values(cards)?.length > 0
      ? Object.values(cards)?.map((c, i) => {
          return {
            name: cardTitle[i],
            count: c,
            color: cardColors[i],
          };
        })
      : cardDataTemplate;

  if (loading) {
    return <PageLoader dashboard={true} num={[assignments, cardData]} />;
  }
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

      <section className="d-flex justify-content-between">
        <div className="mt-3">
          <button
            className="d-flex align-items-center filter-btn"
            style={{ columnGap: 7 }}
            data-toggle="dropdown"
          >
            <span
              className=""
              style={{ color: "#828282", fontSize: "1.125rem" }}
            >
              Recent
            </span>
            <img className="pl-2" src={down} alt="down" />
          </button>
        </div>

        <div className="mt-3">
          <a className="create_assignment" href="/mentor/assignments/create">
            Create
          </a>
        </div>
      </section>

      <section className="row d-flex justify-content-between">
        {assignments?.length > 0 &&
          assignments?.map((assign, i) => {
            return (
              <div className="col-xl-6" key={`assignments-${i}`}>
                <AssignmentCard data={assign} />
              </div>
            );
          })}
      </section>
    </div>
  );
};
export const AssignmentCard = ({ data = {} }) => {
  const { push } = useHistory();

  return (
    <div className="assignment_card opp-card my-3">
      <h3>{data?.topic}</h3>
      <p className="pt-2 pb-4 border-bottom">
        Attachments - <a href="#!">businessplan.pdf</a>
      </p>

      <p className="pt-3 pb-3 border-bottom">
        {data?.description}
        <a href="/mentor/assignments/create/details">More Details</a>
      </p>
      <button
        className="pending_evaluation mt-4"
        onClick={() => push("/mentor/assignments/view")}
      >
        View Assignment
      </button>
    </div>
  );
};
