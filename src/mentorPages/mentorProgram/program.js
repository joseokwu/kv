import React, { useEffect, useState } from "react";
import filter from "../../assets/icons/filterFunnel.svg";
import down from "../../assets/icons/chevronDown.svg";
import "./program.css";
import { Tabs } from "../../mentorComponents";
import { Pending } from "./components/pending/pending";
import { Accepted } from "./components/accepted/accepted";
import { Declined } from "./components/declined/declined";
import { AllProgramCard } from "./components/allProgramCard/allProgramCard";
import { Rescheduled } from "./components/rescheduled/rescheduled";
import { mentorPrograms } from "../../services";
import { PageLoader } from "../../components";

export const MentorProgram = ({ history }) => {
  const {
    location: { hash },
  } = history;

  const [programs, setPrograms] = useState([]);
  const [pendingPrograms, setPendingPrograms] = useState([]);
  const [acceptedPrograms, setAcceptedPrograms] = useState([]);
  const [rescheduledPrograms, setRescheduledPrograms] = useState([]);
  const [declinedPrograms, setDeclinedPrograms] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await mentorPrograms();
    setPrograms(res?.programs);
    setAcceptedPrograms(() =>
      res?.programs?.filter((p) => p?.status?.toLowerCase() === "accepted")
    );
    setDeclinedPrograms(() =>
      res?.programs?.filter((p) => p?.status?.toLowerCase() === "declined")
    );
    setRescheduledPrograms(() =>
      res?.programs?.filter((p) => p?.status?.toLowerCase() === "rescheduled")
    );

    setPendingPrograms(() =>
      res?.programs?.filter((p) => p?.status?.toLowerCase() === "pending")
    );
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    return () => {
      setPrograms([]);
      setAcceptedPrograms([]);
      setDeclinedPrograms([]);
      setPendingPrograms([]);
    };
  }, []);

  const renderContent = () => {
    switch (hash) {
      case "#All":
        return <AllProgramCard data={programs} />;

      case "#Pending":
        return (
          <div>
            {pendingPrograms?.length > 0 ? (
              pendingPrograms?.map((pp, i) => {
                return <Pending data={pp} key={`pending-${i}`} />;
              })
            ) : (
              <p className="text-center">No pending program available</p>
            )}
          </div>
        );

      case "#Accepted":
        return (
          <div>
            {acceptedPrograms?.length > 0 ? (
              acceptedPrograms?.map((ap, i) => {
                return <Accepted data={ap} key={`accepted-${i}`} />;
              })
            ) : (
              <p className="text-center">No accepted program available</p>
            )}
          </div>
        );

      case "#Rescheduled":
        return (
          <div>
            {rescheduledPrograms?.length > 0 ? (
              rescheduledPrograms?.map((rp, i) => {
                return <Rescheduled data={rp} key={`rescheduled-${i}`} />;
              })
            ) : (
              <p className="text-center">No rescheduled program available</p>
            )}
          </div>
        );

      case "#Declined":
        return (
          <div>
            {declinedPrograms?.length > 0 ? (
              declinedPrograms?.map((dp, i) => {
                return <Declined data={dp} key={`pending-${i}`} />;
              })
            ) : (
              <p className="text-center">No accepted program available</p>
            )}
          </div>
        );

      default:
        return <AllProgramCard data={programs} />;
    }
  };

  const tabItems = ["All", "Pending", "Accepted", "Rescheduled", "Declined"];

  if (loading) {
    return <PageLoader big={true} />;
  }
  return (
    <div className="dashboard-main">
      <div className="col-lg-12">
        <section className="d-flex align-items-center justify-content-between mb-3">
          <p className="program-sub-title">
            {programs?.length} programs assigned to you
          </p>
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
      </div>

      <div className="col-lg-12">
        <Tabs tabItems={tabItems} />
      </div>

      <div className="col-lg-12 mt-5">
        <section className="mt-1">{renderContent()}</section>
      </div>
    </div>
  );
};
