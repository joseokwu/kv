import React, { useEffect, useState } from "react";
import {
  AssignedStartupCard,
  MentorDashCard,
  UpcomingEventCard,
} from "../../mentorComponents";
import "./dashboard.css";
import { useHistory } from "react-router-dom";
import { getDashboard } from "../../services/mentor";
import { useDispatch } from "react-redux";
import { DASH_VIEW } from "../../store/actions/actions.types";

export const MentorDashboard = () => {
  const { push } = useHistory();
  const [dashInfo, setDashInfo] = useState({});
  const [assignedStartups, setAssignedStartups] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const res = await getDashboard();

    setDashInfo(res);
    setAssignedStartups(res?.AssignedStartups);
    setUpcoming(res?.upcomingEvents);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const cardColors = ["#D5D6F4", "#DEF6FF", "#D5D6F4", "#DEF6FF"];

  const cardData =
    dashInfo?.cards && dashInfo?.cards?.length > 0
      ? dashInfo?.cards?.map((dash, i) => {
          return {
            name: dash?.title,
            count: dash?.count,
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
            name: "Accelerators",
            count: 0,
            color: cardColors[1],
          },
          {
            name: "Mentors",
            count: 0,
            color: cardColors[2],
          },
          {
            name: "Investors",
            count: 0,
            color: cardColors[2],
          },
        ];

  return (
    <div className="dashboard_main container-fluid">
      <section className="row pb-5">
        <section className="col-lg-12 d-flex align-items-center dashboard-cards position-fixed mt-0">
          {cardData?.length > 0 &&
            cardData.map((data, i) => (
              <MentorDashCard
                name={data.name}
                count={data.count}
                color={data.color}
                key={i}
              />
            ))}
        </section>
      </section>

      <section className="row mt-0 dash-main-content">
        <div className="col-lg-12">
          <div style={{ marginTop: "6.38rem" }}>
            <section className="d-flex align-items-center justify-content-between mb-3">
              <p className="dash-sub-title">Assigned Startups</p>
              <p className="see-all">See All</p>
            </section>

            <section className="row">
              {assignedStartups?.length > 0 &&
                assignedStartups?.map((assigned, i) => {
                  return (
                    <div className="col-xl-4 mb-4">
                      <AssignedStartupCard
                        onClick={() => {
                          push("/mentor/dashboard/view");
                          dispatch({ type: DASH_VIEW, payload: assigned });
                        }}
                        data={assigned}
                      />
                    </div>
                  );
                })}
            </section>
          </div>
        </div>

        <div className="col-lg-12">
          <div style={{ marginTop: "2.38rem" }}>
            <section className="d-flex align-items-center justify-content-between mb-3">
              <p className="dash-sub-title">Upcoming Events</p>
              <p className="see-all">
                <a className="see-all-event" href="/mentor/events">
                  See All
                </a>
              </p>
            </section>

            <section className="row">
              {upcoming?.length > 0 &&
                upcoming?.map((event, i) => {
                  return (
                    <div className="col-xl-4 mb-4">
                      <UpcomingEventCard data={event} />
                    </div>
                  );
                })}
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
