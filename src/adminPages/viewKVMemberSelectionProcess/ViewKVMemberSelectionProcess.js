import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Tabs } from "../../components";
import left from "../../assets/icons/chervonLeft.svg";
import styles from "./viewKVMemberProcess.module.css";
import { SelectionTeam } from "./components/SelectionTeam";
import { Startups } from "./components/Startups";

export const ViewKVMemberSelectionProcess = () => {
  const tabs = ["Startups", "Selection Team"];

  const {
    location: { hash },
  } = useHistory();

  const startups = [
    { status: "evaluated" },
    { status: "pending" },
    { status: "pending" },
    { status: "evaluated" },
    { status: "pending" },
    { status: "evaluated" },
    { status: "evaluated" },
    { status: "pending" },
    { status: "pending" },
  ];

  const renderComp = () => {
    switch (hash) {
      case `#${tabs[0]}`:
        return <Startups data={startups} />;
      case `#${tabs[1]}`:
        return <SelectionTeam />;
      default:
        return <Startups data={startups} />;
    }
  };

  const { goBack } = useHistory();

  return (
    <div className="p-5">
      <section
        className="d-flex align-items-center mb-3"
        onClick={() => goBack()}
        role="button"
        style={{ width: "fit-content" }}
      >
        <img
          src={left}
          alt="left"
          className="mr-2"
          style={{ transform: "rotate(180deg)" }}
        />
        <p className="bread-start" role="button">
          Selection Process
        </p>
      </section>
      <section className="d-flex align-items-center justify-content-between mb-4">
        <Tabs tabItems={tabs} />
        <Button label="Create New Criteria" variant="secondary" />
      </section>
      <section className="mb-4">
        <p className={styles.pageSubtitle}>
          Evaluation / KV Members Evaluation
        </p>
      </section>
      <section>{renderComp()}</section>
    </div>
  );
};
