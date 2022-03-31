import React from "react";
import { useHistory } from "react-router-dom";
import { DashCard, Tabs } from "../../components";
import styles from "./applicationMgt.module.css";
import {
  KVScreeningTable,
  MentorScreeningTable,
  PendingTable,
  RecommendationTable,
  AcceptedTable,
  DeclinedTable,
} from "./components";

export const ApplicationMgt = () => {
  const cardDetails = [
    {
      name: "Application Declined",
      count: 20,
      color: "#D5D6F4",
    },
    {
      name: "KV Screening",
      count: 30,
      color: "#DEF6FF",
    },
    {
      name: "Mentor Screening",
      count: 20,
      color: "#D5D6F4",
    },
    {
      name: "Accepted",
      count: 10,
      color: "#DEF6FF",
    },
  ];

  const mgtTab = [
    "Pending",
    "KV Screening",
    "Recommended",
    "Mentor Screening",
    "Accepted",
    "Declined",
  ];

  const {
    location: { hash },
  } = useHistory();

  const renderComponent = () => {
    switch (hash) {
      case `#${mgtTab[0]}`:
        return <PendingTable />;
      case `#${mgtTab[1]}`:
        return <KVScreeningTable />;
      case `#${mgtTab[2]}`:
        return <RecommendationTable />;
      case `#${mgtTab[3]}`:
        return <MentorScreeningTable />;
      case `#${mgtTab[4]}`:
        return <AcceptedTable />;
      case `#${mgtTab[5]}`:
        return <DeclinedTable />;
      default:
        return <PendingTable />;
    }
  };

  return (
    <div className="p-5" style={{ maxWidth: 2000 }}>
      <section className="d-flex align-items-center dashboard-cards mb-5">
        {cardDetails.length > 0 &&
          cardDetails.map((card, i) => {
            return (
              <DashCard
                name={card?.name}
                color={card.color}
                count={card?.count}
              />
            );
          })}
      </section>

      <section className="mb-45">
        <Tabs tabItems={mgtTab} />
      </section>

      <section>{renderComponent()}</section>
    </div>
  );
};
